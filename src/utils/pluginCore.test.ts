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
  TOP_1000_PLUGINS,
  MAX_COMPARE_PLUGINS,
  DEFAULT_PAGE_SIZE,
  paginatePlugins,
  toggleComparePlugin,
  getComparedPlugins,
  buildComparisonMatrix,
  type PluginItem,
} from './pluginCore';

const pluginsJsonPath = path.resolve(process.cwd(), 'plugins.json');
const rawJson = fs.readFileSync(pluginsJsonPath, 'utf-8');
const samplePlugins: PluginItem[] = JSON.parse(rawJson);

test('plugins.json and TOP_1000_PLUGINS contain all 1000 assets adhering strictly to required schema with unique IDs', () => {
  assert.equal(Array.isArray(samplePlugins), true);
  assert.equal(samplePlugins.length, 1000);
  assert.equal(TOP_1000_PLUGINS.length, 1000);
  assert.equal(TOP_50_PLUGINS.length, 50);

  const uniqueIds = new Set<string>();
  for (const plugin of samplePlugins) {
    const validation = validatePluginSchema(plugin);
    assert.equal(
      validation.valid,
      true,
      `Plugin "${plugin.id}" failed validation: ${validation.errors.join(', ')}`
    );
    assert.equal(typeof plugin.stars, 'number');
    assert.equal(plugin.stars > 0, true);
    assert.equal(uniqueIds.has(plugin.id), false, `Duplicate plugin ID found: ${plugin.id}`);
    uniqueIds.add(plugin.id);
  }
  assert.equal(uniqueIds.size, 1000);

  // Verify the original curated Top 50 items remain at indices 0..49
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

test('extractCategories returns 1000 total and 200 each for Developers, Testers & QA, Designers & UI, AI & Automation, and GitHub Pages & Docs', () => {
  const categories = extractCategories(samplePlugins);
  assert.equal(categories.find((c) => c.name === 'All')?.count, 1000);
  assert.equal(categories.find((c) => c.name === 'Developers')?.count, 200);
  assert.equal(categories.find((c) => c.name === 'Testers & QA')?.count, 200);
  assert.equal(categories.find((c) => c.name === 'Designers & UI')?.count, 200);
  assert.equal(categories.find((c) => c.name === 'AI & Automation')?.count, 200);
  assert.equal(categories.find((c) => c.name === 'GitHub Pages & Docs')?.count, 200);
});

test('isMostPopularPlugin accurately identifies plugins exceeding the POPULAR_STARS_THRESHOLD', () => {
  assert.equal(POPULAR_STARS_THRESHOLD, 15000);
  assert.equal(isMostPopularPlugin(15001), true);
  assert.equal(isMostPopularPlugin(48500), true);
  assert.equal(isMostPopularPlugin(15000), false);
  assert.equal(isMostPopularPlugin(6800), false);
  assert.equal(isMostPopularPlugin(0), false);
});

test('filterAndSortPlugins sorts all 1000 plugins by most stars descending when sortBy is "stars"', () => {
  const byStars = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'All',
    activeTag: null,
    sortBy: 'stars',
  });
  assert.equal(byStars.length, 1000);
  assert.equal(byStars[0].id, 'threejs-webgl-studio');
  assert.equal(byStars[1].id, 'ollama-local-runner');

  for (let i = 1; i < byStars.length; i++) {
    assert.equal(byStars[i - 1].stars >= byStars[i].stars, true);
  }
});

test('filterAndSortPlugins filters by title, description, and tags in real-time across 1000 assets', () => {
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
  assert.equal(byTag.some((p) => p.id === 'axe-devtools'), true);
});

test('filterAndSortPlugins filters by each of the 5 categories (200 each) and activeTag accurately', () => {
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
    assert.equal(filtered.length, 200, `Expected 200 plugins in category ${cat}`);
  }

  const qaWithTag = filterAndSortPlugins(samplePlugins, {
    searchQuery: '',
    category: 'Testers & QA',
    activeTag: 'playwright',
    sortBy: 'featured',
  });
  assert.equal(qaWithTag.some((p) => p.id === 'playwright-test'), true);

  const emptyResult = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'nonexistent-xyz-plugin',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(emptyResult.length, 0);
});

test('paginatePlugins slices 1000 items into deterministic pages and handles bounds safely', () => {
  assert.equal(DEFAULT_PAGE_SIZE, 24);
  const page1 = paginatePlugins(samplePlugins, 1, 24);
  assert.equal(page1.items.length, 24);
  assert.equal(page1.totalItems, 1000);
  assert.equal(page1.currentPage, 1);
  assert.equal(page1.totalPages, 42);
  assert.equal(page1.startIndex, 1);
  assert.equal(page1.endIndex, 24);
  assert.equal(page1.hasMore, true);

  const lastPage = paginatePlugins(samplePlugins, 42, 24);
  assert.equal(lastPage.items.length, 16);
  assert.equal(lastPage.startIndex, 985);
  assert.equal(lastPage.endIndex, 1000);
  assert.equal(lastPage.hasMore, false);

  const allInOne = paginatePlugins(samplePlugins, 1, 1000);
  assert.equal(allInOne.items.length, 1000);
  assert.equal(allInOne.totalPages, 1);
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

test('toggleComparePlugin enforces up to 3 plugins limit and supports adding/removing', () => {
  assert.equal(MAX_COMPARE_PLUGINS, 3);
  let selected: string[] = [];

  const r1 = toggleComparePlugin(selected, 'github-copilot');
  assert.equal(r1.status, 'added');
  assert.deepEqual(r1.selectedIds, ['github-copilot']);
  selected = r1.selectedIds;

  const r2 = toggleComparePlugin(selected, 'playwright-test');
  assert.equal(r2.status, 'added');
  assert.deepEqual(r2.selectedIds, ['github-copilot', 'playwright-test']);
  selected = r2.selectedIds;

  const r3 = toggleComparePlugin(selected, 'storybook');
  assert.equal(r3.status, 'added');
  assert.deepEqual(r3.selectedIds, ['github-copilot', 'playwright-test', 'storybook']);
  selected = r3.selectedIds;

  // 4th selection should be blocked with limit_reached
  const r4 = toggleComparePlugin(selected, 'coderabbit');
  assert.equal(r4.status, 'limit_reached');
  assert.deepEqual(r4.selectedIds, ['github-copilot', 'playwright-test', 'storybook']);

  // Toggling an already-selected plugin removes it
  const r5 = toggleComparePlugin(selected, 'playwright-test');
  assert.equal(r5.status, 'removed');
  assert.deepEqual(r5.selectedIds, ['github-copilot', 'storybook']);
});

test('getComparedPlugins and buildComparisonMatrix produce side-by-side property rows and identify highest stars', () => {
  const compared = getComparedPlugins(samplePlugins, [
    'github-copilot',
    'playwright-test',
    'storybook',
  ]);
  assert.equal(compared.length, 3);
  assert.deepEqual(
    compared.map((p) => p.name),
    ['GitHub Copilot', 'Playwright Test', 'Storybook']
  );

  const matrix = buildComparisonMatrix(compared);
  assert.equal(matrix.plugins.length, 3);
  assert.equal(matrix.maxStarsId, 'storybook'); // 85,200 stars > 69,400 > 48,500
  assert.equal(matrix.rows.length, 9);

  const categoryRow = matrix.rows.find((r) => r.key === 'category');
  assert.deepEqual(
    categoryRow?.values.map((v) => v.displayValue),
    ['AI & Automation', 'Testers & QA', 'Designers & UI']
  );

  const starsRow = matrix.rows.find((r) => r.key === 'stars');
  assert.deepEqual(
    starsRow?.values.map((v) => v.isHighestStars),
    [false, false, true]
  );
});

