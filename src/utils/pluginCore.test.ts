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
  TOP_50_PLUGINS,
  type PluginItem,
} from './pluginCore';

const pluginsJsonPath = path.resolve(process.cwd(), 'plugins.json');
const rawJson = fs.readFileSync(pluginsJsonPath, 'utf-8');
const samplePlugins: PluginItem[] = JSON.parse(rawJson);

test('plugins.json and TOP_50_PLUGINS contain all 50 plugins adhering strictly to required schema', () => {
  assert.equal(Array.isArray(samplePlugins), true);
  assert.equal(samplePlugins.length, 50);
  assert.equal(TOP_50_PLUGINS.length, 50);

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

  // Verify first and last items of the 50-item dataset
  assert.equal(samplePlugins[0].name, 'GitHub Copilot');
  assert.equal(samplePlugins[9].name, 'Renovate Bot');
  assert.equal(samplePlugins[10].name, 'Prettier');
  assert.equal(samplePlugins[20].name, 'Playwright Test');
  assert.equal(samplePlugins[28].name, 'axe DevTools');
  assert.equal(samplePlugins[30].name, 'Storybook');
  assert.equal(samplePlugins[40].name, 'Decap CMS (Netlify CMS)');
  assert.equal(samplePlugins[49].name, 'Plausible Analytics');

  const invalidStarsCheck = validatePluginSchema({
    ...samplePlugins[0],
    stars: -10,
  });
  assert.equal(invalidStarsCheck.valid, false);
});

test('extractCategories returns 50 total and 10 each for Developers, Testers & QA, Designers & UI, AI & Automation, and GitHub Pages & Docs', () => {
  const categories = extractCategories(samplePlugins);
  assert.equal(categories.find((c) => c.name === 'All')?.count, 50);
  assert.equal(categories.find((c) => c.name === 'Developers')?.count, 10);
  assert.equal(categories.find((c) => c.name === 'Testers & QA')?.count, 10);
  assert.equal(categories.find((c) => c.name === 'Designers & UI')?.count, 10);
  assert.equal(categories.find((c) => c.name === 'AI & Automation')?.count, 10);
  assert.equal(categories.find((c) => c.name === 'GitHub Pages & Docs')?.count, 10);
});

test('isMostPopularPlugin accurately identifies plugins exceeding the POPULAR_STARS_THRESHOLD', () => {
  assert.equal(POPULAR_STARS_THRESHOLD, 15000);
  assert.equal(isMostPopularPlugin(15001), true);
  assert.equal(isMostPopularPlugin(48500), true);
  assert.equal(isMostPopularPlugin(15000), false);
  assert.equal(isMostPopularPlugin(6800), false);
  assert.equal(isMostPopularPlugin(0), false);
});

test('filterAndSortPlugins sorts plugins by most stars descending when sortBy is "stars"', () => {
  const byStars = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'All',
    activeTag: null,
    sortBy: 'stars',
  });
  assert.equal(byStars.length, 50);
  assert.equal(byStars[0].id, 'storybook');
  assert.equal(byStars[1].id, 'playwright-test');
  assert.equal(byStars[2].id, 'prettier');

  for (let i = 1; i < byStars.length; i++) {
    assert.equal(byStars[i - 1].stars >= byStars[i].stars, true);
  }
});

test('filterAndSortPlugins filters by title, description, and tags in real-time', () => {
  const byTitle = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'CodeRabbit',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byTitle.length, 1);
  assert.equal(byTitle[0].id, 'coderabbit');

  const byDesc = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'Jupyter Notebooks',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byDesc.length, 1);
  assert.equal(byDesc[0].id, 'reviewnb');

  const byTag = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'wcag',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byTag.length, 1);
  assert.equal(byTag[0].id, 'axe-devtools');
});

test('filterAndSortPlugins filters by each of the 5 categories and activeTag accurately', () => {
  for (const cat of [
    'Developers',
    'Testers & QA',
    'Designers & UI',
    'AI & Automation',
    'GitHub Pages & Docs',
  ]) {
    const filtered = filterAndSortPlugins(samplePlugins, {
      searchQuery: '',
      category: cat,
      activeTag: null,
      sortBy: 'featured',
    });
    assert.equal(filtered.length, 10, `Expected 10 plugins in category ${cat}`);
  }

  const qaWithTag = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'Testers & QA',
    activeTag: 'playwright',
    sortBy: 'featured',
  });
  assert.equal(qaWithTag.length, 1);
  assert.equal(qaWithTag[0].id, 'playwright-test');

  const emptyResult = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'nonexistent-xyz-plugin',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(emptyResult.length, 0);
});

test('buildContributorPluginJson generates valid schema-compliant JSON including numeric stars', () => {
  const generatedStr = buildContributorPluginJson({
    id: 'My Super Plugin!',
    name: 'Super Plugin',
    author: '@devuser',
    version: 'v1.2.0',
    stars: 412,
    category: 'Developers',
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
  assert.equal(parsed.category, 'Developers');
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
  const link = buildPluginDeepLinkUrl('https://ai-assets-hub.github.io/registry/', 'github-copilot');
  assert.equal(
    link,
    'https://ai-assets-hub.github.io/registry/?plugin=github-copilot#plugin-github-copilot'
  );
  assert.equal(extractDeepLinkPluginId(link), 'github-copilot');

  const hashOnly = 'http://localhost:3000/#plugin-playwright-test';
  assert.equal(extractDeepLinkPluginId(hashOnly), 'playwright-test');

  const noPlugin = 'http://localhost:3000/#directory';
  assert.equal(extractDeepLinkPluginId(noPlugin), null);
});
