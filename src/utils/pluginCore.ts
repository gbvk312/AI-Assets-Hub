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

export function escapeHtml(str: unknown): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatInlineMarkdown(text: string): string {
  const codeTokens: string[] = [];

  // 1. Extract inline code spans first so inner characters (*, _, <tag>) are never altered
  const withPlaceholders = String(text ?? '').replace(/`([^`]+)`/g, (_match, code) => {
    const idx = codeTokens.length;
    codeTokens.push(
      `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">${escapeHtml(code)}</code>`
    );
    return `\x00CODE_${idx}\x00`;
  });

  // 2. Escape HTML on the non-code text
  let html = escapeHtml(withPlaceholders);

  // 3. Links: [label](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, rawUrl) => {
    const url = String(rawUrl).trim();
    const isSafe = /^(https?:\/\/|mailto:|#|\/)/i.test(url);
    if (!isSafe) return label;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="font-medium text-indigo-600 dark:text-indigo-400 underline underline-offset-2 hover:text-indigo-500">${label}</a>`;
  });

  // 4. Bold + Italic: ***text***
  html = html.replace(
    /\*\*\*([^*]+)\*\*\*/g,
    '<strong class="font-semibold text-slate-900 dark:text-white"><em>$1</em></strong>'
  );

  // 5. Bold: **text** or __text__
  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>'
  );
  html = html.replace(
    /__([^_]+)__/g,
    '<strong class="font-semibold text-slate-900 dark:text-white">$1</strong>'
  );

  // 6. Italic: *text* or _text_
  html = html.replace(/\*([^*\n]+)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/(^|\s)_([^_\n]+)_(?=\s|$|[.,!?:;])/g, '$1<em class="italic">$2</em>');

  // 7. Strikethrough: ~~text~~
  html = html.replace(/~~([^~]+)~~/g, '<del class="line-through opacity-75">$1</del>');

  // 8. Restore inline code tokens
  html = html.replace(/\x00CODE_(\d+)\x00/g, (_m, idx) => codeTokens[Number(idx)] || '');

  return html;
}

function parseTableRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
}

function isTableSeparator(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.includes('|') && !trimmed.includes('-')) return false;
  const cells = parseTableRow(trimmed);
  return cells.length > 0 && cells.every((c) => /^:?-{3,}:?$/.test(c));
}

export function renderMarkdownToHtml(markdown: string): string {
  const raw = String(markdown ?? '').replace(/\r\n/g, '\n');
  const segments = raw.split(/(```[\s\S]*?```)/g);

  return segments
    .map((segment) => {
      if (segment.startsWith('```') && segment.endsWith('```')) {
        const lines = segment.slice(3, -3).trim().split('\n');
        let lang = 'shell';
        let codeContent = lines.join('\n');
        if (lines.length > 1 && /^[a-zA-Z0-9_-]+$/.test(lines[0].trim())) {
          lang = lines[0].trim();
          codeContent = lines.slice(1).join('\n');
        }
        const encodedCode = encodeURIComponent(codeContent);
        return `
          <div class="my-4 rounded-lg border border-slate-800 bg-slate-950 overflow-hidden">
            <div class="flex items-center justify-between px-3.5 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span>${escapeHtml(lang)}</span>
              <button
                type="button"
                data-copy-encoded="${encodedCode}"
                class="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
              >
                Copy Code
              </button>
            </div>
            <pre class="p-3.5 text-xs font-mono text-slate-100 overflow-x-auto leading-relaxed"><code>${escapeHtml(codeContent)}</code></pre>
          </div>
        `;
      }

      const blocks = segment
        .trim()
        .split(/\n{2,}/)
        .filter(Boolean);

      return blocks
        .map((block) => {
          const trimmed = block.trim();
          const lines = trimmed.split('\n');

          // Horizontal Rule
          if (/^(---|\*\*\*|___)$/.test(trimmed)) {
            return '<hr class="my-4 border-slate-200 dark:border-slate-800" />';
          }

          // Headings (# to ####)
          const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
          if (headingMatch && lines.length === 1) {
            const level = headingMatch[1].length;
            const content = formatInlineMarkdown(headingMatch[2].trim());
            if (level === 1) {
              return `<h3 class="text-base font-bold tracking-tight text-slate-900 dark:text-white mt-2">${content}</h3>`;
            }
            if (level === 2) {
              return `<h4 class="text-sm font-semibold text-slate-900 dark:text-white mt-5 pt-3 border-t border-slate-200 dark:border-slate-800">${content}</h4>`;
            }
            if (level === 3) {
              return `<h5 class="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-3">${content}</h5>`;
            }
            return `<h6 class="text-xs font-medium text-slate-700 dark:text-slate-300 mt-2">${content}</h6>`;
          }

          // Blockquote (> ...)
          if (lines.every((line) => line.trim().startsWith('>'))) {
            const quoteBody = lines
              .map((line) => formatInlineMarkdown(line.trim().replace(/^>\s?/, '')))
              .join('<br />');
            return `<blockquote class="my-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${quoteBody}</blockquote>`;
          }

          // Markdown Table
          if (
            lines.length >= 2 &&
            lines[0].includes('|') &&
            isTableSeparator(lines[1])
          ) {
            const headers = parseTableRow(lines[0]);
            const bodyRows = lines.slice(2).filter((l) => l.trim().includes('|'));
            const theadHtml = headers
              .map(
                (h) =>
                  `<th class="py-2 px-3 font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">${formatInlineMarkdown(h)}</th>`
              )
              .join('');
            const tbodyHtml = bodyRows
              .map((rowLine) => {
                const cells = parseTableRow(rowLine);
                const cellsHtml = headers
                  .map(
                    (_h, idx) =>
                      `<td class="py-2 px-3 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800/60">${formatInlineMarkdown(cells[idx] ?? '')}</td>`
                  )
                  .join('');
                return `<tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">${cellsHtml}</tr>`;
              })
              .join('');

            return `
              <div class="my-3 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table class="w-full text-left border-collapse text-xs tabular-nums">
                  <thead><tr>${theadHtml}</tr></thead>
                  <tbody>${tbodyHtml}</tbody>
                </table>
              </div>
            `;
          }

          // Unordered List (- or * items)
          if (lines.every((line) => /^[-*]\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-disc text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400">${formatInlineMarkdown(line.trim().replace(/^[-*]\s+/, ''))}</li>`
              )
              .join('');
            return `<ul class="space-y-1.5 my-2">${items}</ul>`;
          }

          // Ordered List (1. 2. items)
          if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-decimal text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400 marker:font-mono">${formatInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ''))}</li>`
              )
              .join('');
            return `<ol class="space-y-1.5 my-2">${items}</ol>`;
          }

          // Paragraph (joining single line-breaks)
          const paragraphContent = lines.map((l) => formatInlineMarkdown(l.trim())).join(' ');
          return `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${paragraphContent}</p>`;
        })
        .join('');
    })
    .join('');
}

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
      if (
        !Array.isArray(obj.tags) ||
        obj.tags.length === 0 ||
        !obj.tags.every((t) => typeof t === 'string' && t.trim().length > 0)
      ) {
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
      !activeTag || plugin.tags.some((t) => t.toLowerCase() === activeTag);

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
    description: (
      input.description || 'Concise summary of what this plugin automates or provides.'
    ).trim(),
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
    readme: (
      input.readme ||
      '# My Custom Plugin\n\nDescribe installation and usage instructions here.\n\n```bash\nnpx @forgehub/my-custom-plugin init\n```'
    ).trim(),
  };

  return JSON.stringify(normalized, null, 2);
}
