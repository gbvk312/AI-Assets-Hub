import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  validatePluginSchema,
  filterAndSortPlugins,
  extractCategories,
  buildContributorPluginJson,
  renderMarkdownToHtml,
  isMostPopularPlugin,
  buildPluginDeepLinkUrl,
  extractDeepLinkPluginId,
  POPULAR_STARS_THRESHOLD,
  type PluginItem,
} from './pluginCore';

const pluginsJsonPath = path.resolve(process.cwd(), 'plugins.json');
const rawJson = fs.readFileSync(pluginsJsonPath, 'utf-8');
const samplePlugins: PluginItem[] = JSON.parse(rawJson);

test('plugins.json contains 5 realistic plugins adhering strictly to required schema including numeric stars', () => {
  assert.equal(Array.isArray(samplePlugins), true);
  assert.equal(samplePlugins.length, 5);

  for (const plugin of samplePlugins) {
    const validation = validatePluginSchema(plugin);
    assert.equal(
      validation.valid,
      true,
      `Plugin "${plugin.id}" failed validation: ${validation.errors.join(', ')}`
    );
    assert.equal(typeof plugin.stars, 'number');
    assert.equal(plugin.stars > 0, true);
  }

  const invalidStarsCheck = validatePluginSchema({
    ...samplePlugins[0],
    stars: -10,
  });
  assert.equal(invalidStarsCheck.valid, false);
});

test('isMostPopularPlugin accurately identifies plugins exceeding the 500 stars threshold', () => {
  assert.equal(POPULAR_STARS_THRESHOLD, 500);
  assert.equal(isMostPopularPlugin(501), true);
  assert.equal(isMostPopularPlugin(2490), true);
  assert.equal(isMostPopularPlugin(500), false);
  assert.equal(isMostPopularPlugin(380), false);
  assert.equal(isMostPopularPlugin(0), false);

  const popularIds = samplePlugins
    .filter((p) => isMostPopularPlugin(p.stars))
    .map((p) => p.id);
  assert.deepEqual(popularIds, [
    'gh-find-skills',
    'gh-release-sentinel',
    'cmdk-palette-lite',
    'env-vault-sync',
  ]);
});

test('filterAndSortPlugins sorts plugins by most stars descending when sortBy is "stars"', () => {
  const byStars = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'All',
    activeTag: null,
    sortBy: 'stars',
  });
  assert.equal(byStars.length, 5);
  assert.deepEqual(
    byStars.map((p) => p.id),
    [
      'gh-find-skills',
      'cmdk-palette-lite',
      'gh-release-sentinel',
      'env-vault-sync',
      'edge-rate-guard',
    ]
  );
  assert.deepEqual(
    byStars.map((p) => p.stars),
    [38400, 2490, 1840, 1320, 380]
  );
});

test('filterAndSortPlugins filters by title, description, and tags in real-time', () => {
  const byTitle = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'Sentinel',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byTitle.length, 1);
  assert.equal(byTitle[0].id, 'gh-release-sentinel');

  const byDesc = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'AES-256-GCM',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byDesc.length, 1);
  assert.equal(byDesc[0].id, 'env-vault-sync');

  const byTag = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'cloudflare-workers',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byTag.length, 1);
  assert.equal(byTag[0].id, 'edge-rate-guard');
});

test('filterAndSortPlugins filters by category and activeTag accurately', () => {
  const uiOnly = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'UI',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(uiOnly.length, 1);
  assert.equal(uiOnly[0].id, 'cmdk-palette-lite');

  const cliWithTag = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'CLI',
    activeTag: 'encryption',
    sortBy: 'featured',
  });
  assert.equal(cliWithTag.length, 1);
  assert.equal(cliWithTag[0].id, 'env-vault-sync');

  const emptyResult = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'nonexistent-xyz-plugin',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(emptyResult.length, 0);
});

test('extractCategories returns counts for All, Automation, UI, CLI, and API', () => {
  const categories = extractCategories(samplePlugins);
  const allCat = categories.find((c) => c.name === 'All');
  assert.equal(allCat?.count, 5);
  assert.equal(categories.find((c) => c.name === 'CLI')?.count, 2);
  for (const expected of ['Automation', 'UI', 'API']) {
    const found = categories.find((c) => c.name === expected);
    assert.equal(found?.count, 1, `Expected category ${expected} to have count 1`);
  }
});

test('buildContributorPluginJson generates valid schema-compliant JSON including numeric stars', () => {
  const generatedStr = buildContributorPluginJson({
    id: 'My Super Plugin!',
    name: 'Super Plugin',
    author: '@devuser',
    version: 'v1.2.0',
    stars: 412,
    category: 'CLI',
    tags: ['cli', 'fast'],
    installCommand: 'npm i -g super-plugin',
    downloadUrl: 'https://github.com/example/super/releases/download/v1.2.0/super.tgz',
    readme: '# Super Plugin\n\nFast CLI.',
  });
  const parsed = JSON.parse(generatedStr);
  assert.equal(parsed.id, 'my-super-plugin-');
  assert.equal(parsed.author, 'devuser');
  assert.equal(parsed.version, '1.2.0');
  assert.equal(parsed.stars, 412);
  const check = validatePluginSchema(parsed);
  assert.equal(check.valid, true);
});

test('renderMarkdownToHtml parses headings, bold, italic, code, links, lists, blockquotes, and tables safely', () => {
  const md = [
    '# Main Title',
    '',
    'Paragraph with **bold text**, *italic text*, `inline <tag>`, and [Docs Link](https://example.com).',
    '',
    '> **Note:** Important blockquote callout.',
    '',
    '## Ordered Steps',
    '',
    '1. First step',
    '2. Second step',
    '',
    '- Bullet A',
    '- Bullet B',
    '',
    '| Flag | Default |',
    '| --- | --- |',
    '| `--watch` | `true` |',
    '',
    '```bash',
    'npx test-runner --watch',
    '```',
  ].join('\n');

  const html = renderMarkdownToHtml(md);

  assert.equal(html.includes('<h3'), true, 'Renders # as h3');
  assert.equal(html.includes('<h4'), true, 'Renders ## as h4');
  assert.equal(html.includes('<strong'), true, 'Renders **bold**');
  assert.equal(html.includes('<em'), true, 'Renders *italic*');
  assert.equal(html.includes('inline &lt;tag&gt;'), true, 'Escapes HTML inside inline code');
  assert.equal(html.includes('href="https://example.com"'), true, 'Renders safe markdown link');
  assert.equal(html.includes('<blockquote'), true, 'Renders blockquote');
  assert.equal(html.includes('<ol'), true, 'Renders ordered list');
  assert.equal(html.includes('<ul'), true, 'Renders unordered list');
  assert.equal(html.includes('<table'), true, 'Renders markdown table');
  assert.equal(html.includes('npx test-runner --watch'), true, 'Renders fenced code block');
});

test('buildPluginDeepLinkUrl and extractDeepLinkPluginId construct and parse direct plugin deep-links accurately', () => {
  const link = buildPluginDeepLinkUrl('https://forgehub.github.io/registry/', 'gh-find-skills');
  assert.equal(
    link,
    'https://forgehub.github.io/registry/?plugin=gh-find-skills#plugin-gh-find-skills'
  );
  assert.equal(extractDeepLinkPluginId(link), 'gh-find-skills');

  const hashOnly = 'http://localhost:3000/#plugin-cmdk-palette-lite';
  assert.equal(extractDeepLinkPluginId(hashOnly), 'cmdk-palette-lite');

  const noPlugin = 'http://localhost:3000/#directory';
  assert.equal(extractDeepLinkPluginId(noPlugin), null);
});
