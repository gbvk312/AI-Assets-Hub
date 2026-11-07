export interface PluginItem {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  category: 'Automation' | 'UI' | 'CLI' | 'API' | string;
  tags: string[];
  installCommand: string;
  downloadUrl: string;
  readme: string;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  activeTag: string | null;
  sortBy: 'featured' | 'name' | 'version';
}

const REQUIRED_FIELDS: (keyof PluginItem)[] = [
  'id',
  'name',
  'description',
  'author',
  'version',
  'category',
  'tags',
  'installCommand',
  'downloadUrl',
  'readme',
];

export function validatePluginSchema(item: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!item || typeof item !== 'object') {
    return { valid: false, errors: ['Plugin entry must be a JSON object.'] };
  }
  const obj = item as Record<string, unknown>;
  for (const field of REQUIRED_FIELDS) {
    if (!(field in obj) || obj[field] === undefined || obj[field] === null) {
      errors.push(`Missing required field: "${field}"`);
      continue;
    }
    if (field === 'tags') {
      if (!Array.isArray(obj.tags) || obj.tags.length === 0 || !obj.tags.every((t) => typeof t === 'string' && t.trim().length > 0)) {
        errors.push('Field "tags" must be a non-empty array of strings.');
      }
    } else if (typeof obj[field] !== 'string' || (obj[field] as string).trim().length === 0) {
      errors.push(`Field "${field}" must be a non-empty string.`);
    }
  }
  return { valid: errors.length === 0, errors };
}

export function filterAndSortPlugins(plugins: PluginItem[], state: FilterState): PluginItem[] {
  const query = (state.searchQuery || '').trim().toLowerCase();
  const category = (state.category || 'All').trim();
  const activeTag = state.activeTag ? state.activeTag.trim().toLowerCase() : null;

  const filtered = plugins.filter((plugin) => {
    const matchesCategory =
      category === 'All' || plugin.category.toLowerCase() === category.toLowerCase();

    const matchesTag =
      !activeTag ||
      plugin.tags.some((t) => t.toLowerCase() === activeTag);

    if (!matchesCategory || !matchesTag) {
      return false;
    }

    if (!query) {
      return true;
    }

    const inTitle = plugin.name.toLowerCase().includes(query);
    const inDescription = plugin.description.toLowerCase().includes(query);
    const inAuthor = plugin.author.toLowerCase().includes(query);
    const inId = plugin.id.toLowerCase().includes(query);
    const inCategory = plugin.category.toLowerCase().includes(query);
    const inTags = plugin.tags.some((tag) => tag.toLowerCase().includes(query));

    return inTitle || inDescription || inAuthor || inId || inCategory || inTags;
  });

  const sorted = [...filtered];
  if (state.sortBy === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortBy === 'version') {
    sorted.sort((a, b) => b.version.localeCompare(a.version, undefined, { numeric: true }));
  }

  return sorted;
}

export function extractCategories(plugins: PluginItem[]): { name: string; count: number }[] {
  const baseCategories = ['All', 'Automation', 'UI', 'CLI', 'API'];
  const counts = new Map<string, number>();

  for (const cat of baseCategories) {
    if (cat !== 'All') counts.set(cat, 0);
  }

  for (const plugin of plugins) {
    const current = counts.get(plugin.category) || 0;
    counts.set(plugin.category, current + 1);
  }

  const result: { name: string; count: number }[] = [
    { name: 'All', count: plugins.length },
  ];

  for (const [name, count] of counts.entries()) {
    result.push({ name, count });
  }

  return result;
}

export function buildContributorPluginJson(input: Partial<PluginItem>): string {
  const normalized: PluginItem = {
    id: (input.id || 'my-custom-plugin').trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-'),
    name: (input.name || 'My Custom Plugin').trim(),
    description: (input.description || 'Concise summary of what this plugin automates or provides.').trim(),
    author: (input.author || 'your-github-handle').trim().replace(/^@/, ''),
    version: (input.version || '1.0.0').trim().replace(/^v/, ''),
    category: (input.category || 'Automation').trim(),
    tags:
      Array.isArray(input.tags) && input.tags.length > 0
        ? input.tags.map((t) => t.trim().toLowerCase()).filter(Boolean)
        : ['automation', 'workflow'],
    installCommand: (input.installCommand || 'npx @forgehub/my-custom-plugin init').trim(),
    downloadUrl: (
      input.downloadUrl ||
      'https://github.com/your-org/my-custom-plugin/releases/latest/download/plugin.tar.gz'
    ).trim(),
    readme:
      (input.readme ||
        '# My Custom Plugin\n\nDescribe installation and usage instructions here.\n\n```bash\nnpx @forgehub/my-custom-plugin init\n```').trim(),
  };

  return JSON.stringify(normalized, null, 2);
}
