import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  validatePluginSchema,
  filterAndSortPlugins,
  extractCategories,
  buildContributorPluginJson,
  type PluginItem,
} from './pluginCore';

const pluginsJsonPath = path.resolve(process.cwd(), 'plugins.json');
const rawJson = fs.readFileSync(pluginsJsonPath, 'utf-8');
const samplePlugins: PluginItem[] = JSON.parse(rawJson);

test('plugins.json contains 4 realistic plugins adhering strictly to required schema', () => {
  assert.equal(Array.isArray(samplePlugins), true);
  assert.equal(samplePlugins.length, 4);

  for (const plugin of samplePlugins) {
    const validation = validatePluginSchema(plugin);
    assert.equal(
      validation.valid,
      true,
      `Plugin "${plugin.id}" failed validation: ${validation.errors.join(', ')}`
    );
  }
});

test('filterAndSortPlugins filters by title, description, and tags in real-time', () => {
  // Search by title
  const byTitle = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'Sentinel',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byTitle.length, 1);
  assert.equal(byTitle[0].id, 'gh-release-sentinel');

  // Search by description keyword
  const byDesc = filterAndSortPlugins(samplePlugins, {
    searchQuery: 'AES-256-GCM',
    category: 'All',
    activeTag: null,
    sortBy: 'featured',
  });
  assert.equal(byDesc.length, 1);
  assert.equal(byDesc[0].id, 'env-vault-sync');

  // Search by tag
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
  assert.equal(allCat?.count, 4);
  for (const expected of ['Automation', 'UI', 'CLI', 'API']) {
    const found = categories.find((c) => c.name === expected);
    assert.equal(found?.count, 1, `Expected category ${expected} to have count 1`);
  }
});

test('buildContributorPluginJson generates valid schema-compliant JSON', () => {
  const generatedStr = buildContributorPluginJson({
    id: 'My Super Plugin!',
    name: 'Super Plugin',
    author: '@devuser',
    version: 'v1.2.0',
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
  const check = validatePluginSchema(parsed);
  assert.equal(check.valid, true);
});
