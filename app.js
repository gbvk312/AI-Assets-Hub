/**
 * ForgeHub — Zero-Build Static Plugin Marketplace & Hub
 * Pure Vanilla JavaScript (ES6+) · Dynamically hydrated from ./plugins.json
 */

const state = {
  plugins: [],
  searchQuery: '',
  category: 'All',
  activeTag: null,
  sortBy: 'featured',
  activePluginId: null,
  activeDocsTab: 'readme',
  theme: 'dark',
};

const BASE_CATEGORIES = ['All', 'Automation', 'UI', 'CLI', 'API'];
export const POPULAR_STARS_THRESHOLD = 500;

/**
 * Returns true when a plugin's star count exceeds the Most Popular community threshold (default: 500).
 */
export function isMostPopularPlugin(stars, threshold = POPULAR_STARS_THRESHOLD) {
  const num = Number(stars);
  return Number.isFinite(num) && num > threshold;
}

/**
 * Builds a direct, shareable deep-link URL for a specific plugin ID.
 */
export function buildPluginDeepLinkUrl(baseUrl, pluginId) {
  const cleanId = String(pluginId ?? '').trim();
  try {
    const url = new URL(baseUrl || 'http://localhost:3000/');
    url.searchParams.set('plugin', cleanId);
    url.hash = `plugin-${encodeURIComponent(cleanId)}`;
    return url.toString();
  } catch {
    const base = String(baseUrl || '').split('#')[0].split('?')[0];
    return `${base}?plugin=${encodeURIComponent(cleanId)}#plugin-${encodeURIComponent(cleanId)}`;
  }
}

/**
 * Extracts a deep-linked plugin ID from a full URL, query string (?plugin=...), or hash (#plugin-...).
 */
export function extractDeepLinkPluginId(urlOrLocation) {
  if (!urlOrLocation) return null;
  try {
    const url = new URL(urlOrLocation, 'http://localhost:3000/');
    const fromQuery = url.searchParams.get('plugin')?.trim();
    if (fromQuery) return fromQuery;
    const rawHash = url.hash.replace(/^#/, '').trim();
    if (rawHash.startsWith('plugin-')) {
      const fromHash = decodeURIComponent(rawHash.slice('plugin-'.length)).trim();
      if (fromHash) return fromHash;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Inline Lucide SVG definitions for zero-latency rendering & offline resilience,
 * paired with window.lucide.createIcons() when CDN script is active.
 */
const ICONS = {
  search:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  copy:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  bookOpen:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  share:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>',
  download:
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
  sun:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
  moon:
    '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
};

/**
 * Escapes HTML special characters to prevent XSS when rendering dynamic JSON strings.
 */
function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Formats numeric star counts with locale thousands separators for tabular display.
 */
function formatStars(stars) {
  const num = Number(stars);
  if (!Number.isFinite(num) || num < 0) return '0';
  return Math.floor(num).toLocaleString('en-US');
}

/**
 * Copies text to clipboard using standard Clipboard API with textarea fallback for iframes.
 */
async function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand fallback
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  document.body.removeChild(textarea);
  return copied;
}

/**
 * Displays a non-blocking, accessible toast notification at bottom-right.
 */
function showToast(title, detail = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className =
    'pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl transition-all duration-150 opacity-0 translate-y-2';

  toast.innerHTML = `
    <span class="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true">${ICONS.check}</span>
    <div class="flex-1 min-w-0 space-y-1">
      <p class="text-xs font-semibold">${escapeHtml(title)}</p>
      ${
        detail
          ? `<p class="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">${escapeHtml(detail)}</p>`
          : ''
      }
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 180);
  }, 3200);
}

/**
 * Pure filtering and sorting function matching src/utils/pluginCore.ts
 */
export function filterAndSortPlugins(plugins, currentState) {
  const query = (currentState.searchQuery || '').trim().toLowerCase();
  const category = (currentState.category || 'All').trim();
  const activeTag = currentState.activeTag ? currentState.activeTag.trim().toLowerCase() : null;

  const filtered = plugins.filter((plugin) => {
    const matchesCategory =
      category === 'All' ||
      String(plugin.category || '').toLowerCase() === category.toLowerCase();

    const matchesTag =
      !activeTag ||
      (Array.isArray(plugin.tags) &&
        plugin.tags.some((t) => String(t).toLowerCase() === activeTag));

    if (!matchesCategory || !matchesTag) return false;
    if (!query) return true;

    const inTitle = String(plugin.name || '').toLowerCase().includes(query);
    const inDescription = String(plugin.description || '').toLowerCase().includes(query);
    const inAuthor = String(plugin.author || '').toLowerCase().includes(query);
    const inId = String(plugin.id || '').toLowerCase().includes(query);
    const inCategory = String(plugin.category || '').toLowerCase().includes(query);
    const inTags =
      Array.isArray(plugin.tags) &&
      plugin.tags.some((tag) => String(tag).toLowerCase().includes(query));

    return inTitle || inDescription || inAuthor || inId || inCategory || inTags;
  });

  const sorted = [...filtered];
  if (currentState.sortBy === 'stars') {
    sorted.sort((a, b) => (Number(b.stars) || 0) - (Number(a.stars) || 0));
  } else if (currentState.sortBy === 'name') {
    sorted.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  } else if (currentState.sortBy === 'version') {
    sorted.sort((a, b) =>
      String(b.version).localeCompare(String(a.version), undefined, { numeric: true })
    );
  }
  return sorted;
}

/**
 * Parses Markdown string from plugin.readme into clean, semantic HTML with copyable code blocks.
 */
function formatInlineMarkdown(text) {
  const codeTokens = [];

  // 1. Tokenize inline code spans first so inner characters (*, _, <tag>) are never altered
  const withPlaceholders = String(text ?? '').replace(/`([^`]+)`/g, (_match, code) => {
    const idx = codeTokens.length;
    codeTokens.push(
      `<code class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] text-indigo-600 dark:text-indigo-300">${escapeHtml(code)}</code>`
    );
    return `\x00CODE_${idx}\x00`;
  });

  // 2. Escape HTML on the remaining text
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

function parseTableRow(line) {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
}

function isTableSeparator(line) {
  const trimmed = line.trim();
  if (!trimmed.includes('|') && !trimmed.includes('-')) return false;
  const cells = parseTableRow(trimmed);
  return cells.length > 0 && cells.every((c) => /^:?-{3,}:?$/.test(c));
}

export function renderMarkdownToHtml(markdown) {
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

          if (/^(---|\*\*\*|___)$/.test(trimmed)) {
            return '<hr class="my-4 border-slate-200 dark:border-slate-800" />';
          }

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

          if (lines.every((line) => line.trim().startsWith('>'))) {
            const quoteBody = lines
              .map((line) => formatInlineMarkdown(line.trim().replace(/^>\s?/, '')))
              .join('<br />');
            return `<blockquote class="my-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${quoteBody}</blockquote>`;
          }

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

          if (lines.every((line) => /^[-*]\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-disc text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400">${formatInlineMarkdown(line.trim().replace(/^[-*]\s+/, ''))}</li>`
              )
              .join('');
            return `<ul class="space-y-1.5 my-2">${items}</ul>`;
          }

          if (lines.every((line) => /^\d+\.\s+/.test(line.trim()))) {
            const items = lines
              .map(
                (line) =>
                  `<li class="ml-4 list-decimal text-xs text-slate-600 dark:text-slate-300 leading-relaxed marker:text-slate-400 marker:font-mono">${formatInlineMarkdown(line.trim().replace(/^\d+\.\s+/, ''))}</li>`
              )
              .join('');
            return `<ol class="space-y-1.5 my-2">${items}</ol>`;
          }

          const paragraphContent = lines.map((l) => formatInlineMarkdown(l.trim())).join(' ');
          return `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${paragraphContent}</p>`;
        })
        .join('');
    })
    .join('');
}

/**
 * Renders the segmented category filter buttons with live counts.
 */
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const counts = new Map();
  for (const cat of BASE_CATEGORIES) {
    if (cat !== 'All') counts.set(cat, 0);
  }
  for (const plugin of state.plugins) {
    const cat = plugin.category || 'Other';
    counts.set(cat, (counts.get(cat) || 0) + 1);
  }

  const allCategories = [
    { name: 'All', count: state.plugins.length },
    ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
  ];

  container.innerHTML = allCategories
    .map(({ name, count }) => {
      const isActive = state.category.toLowerCase() === name.toLowerCase();
      const btnClasses = isActive
        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium';

      return `
        <button
          type="button"
          data-category="${escapeHtml(name)}"
          aria-pressed="${isActive ? 'true' : 'false'}"
          class="px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${btnClasses}"
        >
          <span>${escapeHtml(name)}</span>
          <span class="ml-1.5 font-mono text-[11px] opacity-75 tabular-nums">${count}</span>
        </button>
      `;
    })
    .join('');
}

/**
 * Renders the filtered plugin cards grid or empty state.
 */
function renderPluginGrid() {
  const grid = document.getElementById('plugin-grid');
  const emptyState = document.getElementById('empty-state');
  const totalMetric = document.getElementById('total-plugins-metric');
  const visibleMetric = document.getElementById('visible-plugins-metric');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const activeTagBanner = document.getElementById('active-tag-banner');
  const activeTagValue = document.getElementById('active-tag-value');

  if (!grid || !emptyState) return;

  const filtered = filterAndSortPlugins(state.plugins, state);

  if (totalMetric) totalMetric.textContent = String(state.plugins.length);
  if (visibleMetric) visibleMetric.textContent = String(filtered.length);

  if (clearSearchBtn) {
    clearSearchBtn.classList.toggle('hidden', state.searchQuery.trim().length === 0);
  }

  if (activeTagBanner && activeTagValue) {
    if (state.activeTag) {
      activeTagBanner.classList.remove('hidden');
      activeTagBanner.classList.add('inline-flex');
      activeTagValue.textContent = `#${state.activeTag}`;
    } else {
      activeTagBanner.classList.add('hidden');
      activeTagBanner.classList.remove('inline-flex');
    }
  }

  if (filtered.length === 0) {
    grid.classList.add('hidden');
    grid.classList.remove('grid');
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.classList.remove('hidden');
  grid.classList.add('grid');

  grid.innerHTML = filtered
    .map((plugin) => {
      const tagsMarkup = Array.isArray(plugin.tags)
        ? plugin.tags
            .map(
              (tag) => `
              <button
                type="button"
                data-tag="${escapeHtml(tag)}"
                class="font-mono text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                aria-label="Filter by tag ${escapeHtml(tag)}"
              >#${escapeHtml(tag)}</button>
            `
            )
            .join('<span class="text-slate-300 dark:text-slate-700 select-none" aria-hidden="true">·</span>')
        : '';

      const isPopular = isMostPopularPlugin(plugin.stars);
      const popularBadgeMarkup = isPopular
        ? `<span
            data-testid="most-popular-badge-${escapeHtml(plugin.id)}"
            class="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/25 rounded-md whitespace-nowrap shrink-0"
            title="Community favorite exceeding ${POPULAR_STARS_THRESHOLD} stars"
          >Most Popular</span>`
        : '';

      return `
        <article
          id="plugin-${escapeHtml(plugin.id)}"
          data-plugin-card="${escapeHtml(plugin.id)}"
          class="flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-5"
        >
          <div class="space-y-3">
            <!-- Unboxed Typographic Metadata Line (Zero-Pill Discipline) -->
            <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-semibold text-indigo-600 dark:text-indigo-400">${escapeHtml(plugin.category)}</span>
                <span aria-hidden="true">·</span>
                <span>v${escapeHtml(plugin.version)}</span>
                <span aria-hidden="true">·</span>
                <span>by @${escapeHtml(plugin.author)}</span>
              </div>
              <span
                data-testid="plugin-stars-${escapeHtml(plugin.id)}"
                class="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 tabular-nums"
                title="${formatStars(plugin.stars)} community stars"
              >
                <span aria-hidden="true">★</span>
                <span>${formatStars(plugin.stars)}</span>
                <span class="text-slate-500 dark:text-slate-400 font-normal">stars</span>
              </span>
            </div>

            <!-- Plugin Title, Most Popular Badge & Description -->
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  ${escapeHtml(plugin.name)}
                </h2>
                ${popularBadgeMarkup}
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${escapeHtml(plugin.description)}
              </p>
            </div>

            <!-- Unboxed Interactive Tag Stream -->
            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${tagsMarkup}
            </div>
          </div>

          <div class="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <!-- Install Command Snippet Preview -->
            <div class="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 font-mono text-xs text-slate-800 dark:text-slate-200 overflow-x-auto">
              <code class="truncate select-all">${escapeHtml(plugin.installCommand)}</code>
            </div>

            <!-- Card Action Buttons -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  data-action="copy-install"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="Copy install command for ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.copy}</span>
                  <span data-copy-label>Copy Install</span>
                </button>

                <button
                  type="button"
                  data-action="view-docs"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="View Source and Docs for ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.bookOpen}</span>
                  <span>View Source / Docs</span>
                </button>

                <button
                  type="button"
                  data-action="share-plugin"
                  data-plugin-id="${escapeHtml(plugin.id)}"
                  aria-label="Share deep-link URL for ${escapeHtml(plugin.name)}"
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span class="pointer-events-none" aria-hidden="true">${ICONS.share}</span>
                  <span data-share-label>Share</span>
                </button>
              </div>

              <a
                href="${escapeHtml(plugin.downloadUrl)}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download release archive for ${escapeHtml(plugin.name)}"
                class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
              >
                <span aria-hidden="true">${ICONS.download}</span>
                <span>Download</span>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Opens the View Source / Docs modal for a specific plugin ID.
 */
function openDocsModal(pluginId) {
  const plugin = state.plugins.find((p) => p.id === pluginId);
  if (!plugin) return;

  state.activePluginId = plugin.id;
  state.activeDocsTab = 'readme';

  const modal = document.getElementById('docs-modal');
  const metaEl = document.getElementById('docs-modal-meta');
  const titleEl = document.getElementById('docs-modal-title');
  const tagsEl = document.getElementById('docs-modal-tags');
  const installEl = document.getElementById('docs-install-command');
  const readmePanel = document.getElementById('docs-readme-panel');
  const rawJsonEl = document.getElementById('docs-raw-json');
  const downloadLink = document.getElementById('docs-download-link');
  const repoLink = document.getElementById('docs-repo-link');

  if (!modal) return;

  if (metaEl) {
    const popularLabel = isMostPopularPlugin(plugin.stars) ? ' · Most Popular' : '';
    metaEl.textContent = `${plugin.category} · v${plugin.version} · ★ ${formatStars(plugin.stars)} stars${popularLabel} · Maintained by @${plugin.author}`;
  }
  if (titleEl) {
    titleEl.textContent = plugin.name;
  }
  if (tagsEl && Array.isArray(plugin.tags)) {
    tagsEl.innerHTML = plugin.tags.map((t) => `<span>#${escapeHtml(t)}</span>`).join('<span>·</span>');
  }
  if (installEl) {
    installEl.textContent = plugin.installCommand;
  }
  if (readmePanel) {
    readmePanel.innerHTML = renderMarkdownToHtml(plugin.readme);
  }
  if (rawJsonEl) {
    rawJsonEl.textContent = JSON.stringify(plugin, null, 2);
  }
  if (downloadLink) {
    downloadLink.href = plugin.downloadUrl;
  }
  if (repoLink) {
    const repoMatch = String(plugin.downloadUrl).match(/^(https:\/\/github\.com\/[^/]+\/[^/]+)/);
    repoLink.href = repoMatch ? repoMatch[1] : `https://github.com/${plugin.author}`;
  }

  switchDocsModalTab('readme');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function switchDocsModalTab(tabName) {
  state.activeDocsTab = tabName;
  const tabReadme = document.getElementById('docs-tab-readme');
  const tabJson = document.getElementById('docs-tab-json');
  const readmePanel = document.getElementById('docs-readme-panel');
  const jsonPanel = document.getElementById('docs-json-panel');

  const isReadme = tabName === 'readme';
  if (readmePanel) readmePanel.classList.toggle('hidden', !isReadme);
  if (jsonPanel) jsonPanel.classList.toggle('hidden', isReadme);

  if (tabReadme && tabJson) {
    tabReadme.setAttribute('aria-selected', isReadme ? 'true' : 'false');
    tabJson.setAttribute('aria-selected', !isReadme ? 'true' : 'false');
    tabReadme.className = isReadme
      ? 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm cursor-pointer'
      : 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
    tabJson.className = !isReadme
      ? 'px-3 py-1.5 text-xs font-semibold rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm cursor-pointer'
      : 'px-3 py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
  }
}

function closeDocsModal() {
  const modal = document.getElementById('docs-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  state.activePluginId = null;
}

/**
 * Opens & manages the "Submit a Plugin" contributor modal and live JSON builder.
 */
function readContributorFormObject() {
  const name = document.getElementById('contrib-name')?.value.trim() || '';
  const id = document.getElementById('contrib-id')?.value.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-') || '';
  const author = document.getElementById('contrib-author')?.value.trim().replace(/^@/, '') || '';
  const version = document.getElementById('contrib-version')?.value.trim().replace(/^v/, '') || '';
  const rawStars = document.getElementById('contrib-stars')?.value ?? '0';
  const parsedStars = Number(rawStars);
  const stars = Number.isFinite(parsedStars) && parsedStars >= 0 ? Math.floor(parsedStars) : 0;
  const category = document.getElementById('contrib-category')?.value.trim() || 'Automation';
  const description = document.getElementById('contrib-description')?.value.trim() || '';
  const rawTags = document.getElementById('contrib-tags')?.value || '';
  const tags = rawTags
    .split(',')
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
  const installCommand = document.getElementById('contrib-install')?.value.trim() || '';
  const downloadUrl = document.getElementById('contrib-download')?.value.trim() || '';
  const readme = document.getElementById('contrib-readme')?.value.trim() || '';

  return {
    id,
    name,
    description,
    author,
    version,
    stars,
    category,
    tags,
    installCommand,
    downloadUrl,
    readme,
  };
}

function updateContributorJsonPreview() {
  const previewEl = document.getElementById('generated-json-preview');
  if (!previewEl) return;
  const obj = readContributorFormObject();
  previewEl.textContent = JSON.stringify(obj, null, 2);
}

function openSubmitModal() {
  const modal = document.getElementById('submit-modal');
  const errEl = document.getElementById('submit-form-error');
  if (!modal) return;
  if (errEl) errEl.classList.add('hidden');
  updateContributorJsonPreview();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSubmitModal() {
  const modal = document.getElementById('submit-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

/**
 * Theme management (Dark default, toggles .dark on <html>).
 */
function applyTheme(theme) {
  state.theme = theme === 'light' ? 'light' : 'dark';
  const root = document.documentElement;
  const iconEl = document.getElementById('theme-toggle-icon');
  const labelEl = document.getElementById('theme-toggle-label');

  if (state.theme === 'dark') {
    root.classList.add('dark');
    if (iconEl) iconEl.innerHTML = ICONS.sun;
    if (labelEl) labelEl.textContent = 'Light Mode';
  } else {
    root.classList.remove('dark');
    if (iconEl) iconEl.innerHTML = ICONS.moon;
    if (labelEl) labelEl.textContent = 'Dark Mode';
  }

  try {
    localStorage.setItem('forgehub_theme', state.theme);
  } catch {
    // Ignore storage errors in restricted sandboxes
  }
}

/**
 * Fetches plugins dynamically from ./plugins.json in the repository root.
 */
async function loadPlugins() {
  const loadingState = document.getElementById('loading-state');
  const errorState = document.getElementById('error-state');
  const errorMsg = document.getElementById('error-message');
  const grid = document.getElementById('plugin-grid');

  if (loadingState) loadingState.classList.remove('hidden');
  if (errorState) errorState.classList.add('hidden');
  if (grid) grid.classList.add('hidden');

  try {
    const response = await fetch(`./plugins.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} while fetching ./plugins.json`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('plugins.json root must be a JSON array of plugin objects.');
    }

    state.plugins = data;
    if (loadingState) loadingState.classList.add('hidden');

    renderCategoryFilters();
    renderPluginGrid();

    if (typeof window !== 'undefined' && window.location) {
      const deepLinkedId = extractDeepLinkPluginId(window.location.href);
      if (deepLinkedId && state.plugins.some((p) => p.id === deepLinkedId)) {
        const cardEl = document.getElementById(`plugin-${deepLinkedId}`);
        if (cardEl && typeof cardEl.scrollIntoView === 'function') {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        openDocsModal(deepLinkedId);
      }
    }
  } catch (err) {
    if (loadingState) loadingState.classList.add('hidden');
    if (errorState) errorState.classList.remove('hidden');
    if (errorMsg) {
      errorMsg.textContent =
        err instanceof Error
          ? err.message
          : 'Failed to load plugins.json from repository root.';
    }
  }
}

/**
 * Wires all event listeners for search, filters, clipboard actions, modals, and theme switching.
 */
function initApp() {
  // Hydrate static icons
  const searchIconSlot = document.getElementById('search-icon-slot');
  if (searchIconSlot) searchIconSlot.innerHTML = ICONS.search;

  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('forgehub_theme') || 'dark';
  } catch {
    savedTheme = 'dark';
  }
  applyTheme(savedTheme);

  // Theme Toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  themeBtn?.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Search Input
  const searchInput = document.getElementById('plugin-search');
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value || '';
    renderPluginGrid();
  });

  // Clear Search Button
  const clearSearchBtn = document.getElementById('clear-search-btn');
  clearSearchBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    renderPluginGrid();
  });

  // Sort Selector
  const sortSelect = document.getElementById('plugin-sort');
  sortSelect?.addEventListener('change', (e) => {
    state.sortBy = e.target.value || 'featured';
    renderPluginGrid();
  });

  // Category Filter Delegation
  const categoryContainer = document.getElementById('category-filters');
  categoryContainer?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-category]');
    if (!btn) return;
    state.category = btn.getAttribute('data-category') || 'All';
    renderCategoryFilters();
    renderPluginGrid();
  });

  // Clear Tag Filter
  const clearTagBtn = document.getElementById('clear-tag-btn');
  clearTagBtn?.addEventListener('click', () => {
    state.activeTag = null;
    renderPluginGrid();
  });

  // Reset Filters from Empty State
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  resetFiltersBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    state.category = 'All';
    state.activeTag = null;
    state.sortBy = 'featured';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'featured';
    renderCategoryFilters();
    renderPluginGrid();
  });

  // Retry Fetch Button
  const retryFetchBtn = document.getElementById('retry-fetch-btn');
  retryFetchBtn?.addEventListener('click', () => {
    loadPlugins();
  });

  // Plugin Grid Delegation (Copy Install, View Source / Docs, Share Deep-Link, Tag Click)
  const grid = document.getElementById('plugin-grid');
  grid?.addEventListener('click', async (e) => {
    const tagBtn = e.target.closest('button[data-tag]');
    if (tagBtn) {
      const clickedTag = tagBtn.getAttribute('data-tag');
      state.activeTag = state.activeTag === clickedTag ? null : clickedTag;
      renderPluginGrid();
      return;
    }

    const actionBtn = e.target.closest('button[data-action]');
    if (!actionBtn) return;

    const action = actionBtn.getAttribute('data-action');
    const pluginId = actionBtn.getAttribute('data-plugin-id');
    const plugin = state.plugins.find((p) => p.id === pluginId);
    if (!plugin) return;

    if (action === 'copy-install') {
      await copyToClipboard(plugin.installCommand);
      const labelSpan = actionBtn.querySelector('[data-copy-label]');
      if (labelSpan) {
        const originalText = labelSpan.textContent;
        labelSpan.textContent = 'Copied!';
        setTimeout(() => {
          labelSpan.textContent = originalText;
        }, 1800);
      }
      showToast(`Copied ${plugin.name} install command`, plugin.installCommand);
    } else if (action === 'view-docs') {
      openDocsModal(plugin.id);
    } else if (action === 'share-plugin') {
      const deepLinkUrl = buildPluginDeepLinkUrl(window.location.href, plugin.id);
      await copyToClipboard(deepLinkUrl);
      try {
        window.history.replaceState(null, '', deepLinkUrl);
      } catch {
        // Ignore history state restrictions in sandboxed environments
      }
      const shareLabelSpan = actionBtn.querySelector('[data-share-label]');
      if (shareLabelSpan) {
        const originalText = shareLabelSpan.textContent;
        shareLabelSpan.textContent = 'Link Copied!';
        setTimeout(() => {
          shareLabelSpan.textContent = originalText;
        }, 1800);
      }
      showToast(`Copied ${plugin.name} deep-link URL`, deepLinkUrl);
    }
  });

  // Docs Modal Handlers
  document.getElementById('close-docs-modal-btn')?.addEventListener('click', closeDocsModal);
  document.getElementById('footer-close-docs-btn')?.addEventListener('click', closeDocsModal);
  document.getElementById('docs-tab-readme')?.addEventListener('click', () => switchDocsModalTab('readme'));
  document.getElementById('docs-tab-json')?.addEventListener('click', () => switchDocsModalTab('json'));

  document.getElementById('docs-copy-install-btn')?.addEventListener('click', async () => {
    const plugin = state.plugins.find((p) => p.id === state.activePluginId);
    if (!plugin) return;
    await copyToClipboard(plugin.installCommand);
    showToast(`Copied ${plugin.name} install snippet`, plugin.installCommand);
  });

  document.getElementById('docs-copy-json-btn')?.addEventListener('click', async () => {
    const plugin = state.plugins.find((p) => p.id === state.activePluginId);
    if (!plugin) return;
    const raw = JSON.stringify(plugin, null, 2);
    await copyToClipboard(raw);
    showToast(`Copied ${plugin.id} manifest JSON`, 'Ready to paste into plugins.json');
  });

  // Copy buttons inside rendered Markdown code blocks
  document.getElementById('docs-readme-panel')?.addEventListener('click', async (e) => {
    const codeCopyBtn = e.target.closest('button[data-copy-encoded]');
    if (!codeCopyBtn) return;
    const decoded = decodeURIComponent(codeCopyBtn.getAttribute('data-copy-encoded') || '');
    await copyToClipboard(decoded);
    const prev = codeCopyBtn.textContent;
    codeCopyBtn.textContent = 'Copied!';
    setTimeout(() => {
      codeCopyBtn.textContent = prev;
    }, 1600);
    showToast('Copied documentation code block', decoded.split('\n')[0]);
  });

  // Submit a Plugin Modal Handlers
  document.getElementById('open-submit-modal-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('empty-submit-plugin-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('schema-open-submit-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('close-submit-modal-btn')?.addEventListener('click', closeSubmitModal);
  document.getElementById('footer-close-submit-btn')?.addEventListener('click', closeSubmitModal);

  const contribForm = document.getElementById('contributor-plugin-form');
  contribForm?.addEventListener('input', updateContributorJsonPreview);

  document.getElementById('copy-generated-json-btn')?.addEventListener('click', async () => {
    const obj = readContributorFormObject();
    const errEl = document.getElementById('submit-form-error');
    if (!obj.name || !obj.id || !obj.author || !obj.version || !obj.description || !obj.installCommand || !obj.downloadUrl || obj.tags.length === 0) {
      if (errEl) {
        errEl.textContent = 'Please complete all required plugin fields before copying the manifest object.';
        errEl.classList.remove('hidden');
      }
      return;
    }
    if (errEl) errEl.classList.add('hidden');
    const jsonString = JSON.stringify(obj, null, 2);
    await copyToClipboard(jsonString);
    showToast('Copied plugin JSON entry to clipboard', `Append "${obj.id}" to plugins.json`);
  });

  contribForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = readContributorFormObject();
    const errEl = document.getElementById('submit-form-error');

    if (
      !obj.name ||
      !obj.id ||
      !obj.author ||
      !obj.version ||
      !obj.description ||
      !obj.installCommand ||
      !obj.downloadUrl ||
      !obj.readme ||
      obj.tags.length === 0
    ) {
      if (errEl) {
        errEl.textContent = 'All manifest fields (including tags and readme) are required to add a plugin.';
        errEl.classList.remove('hidden');
      }
      return;
    }

    if (errEl) errEl.classList.add('hidden');

    const existingIdx = state.plugins.findIndex((p) => p.id === obj.id);
    if (existingIdx >= 0) {
      state.plugins[existingIdx] = obj;
    } else {
      state.plugins.unshift(obj);
    }

    state.category = 'All';
    state.searchQuery = '';
    state.activeTag = null;
    if (searchInput) searchInput.value = '';

    renderCategoryFilters();
    renderPluginGrid();
    closeSubmitModal();
    showToast(
      `Added "${obj.name}" to live registry`,
      `Category: ${obj.category} · v${obj.version} · ★ ${formatStars(obj.stars)} stars`
    );
  });

  // Backdrop click dismissal for modals
  const docsModal = document.getElementById('docs-modal');
  docsModal?.addEventListener('click', (e) => {
    if (e.target === docsModal) closeDocsModal();
  });

  const submitModal = document.getElementById('submit-modal');
  submitModal?.addEventListener('click', (e) => {
    if (e.target === submitModal) closeSubmitModal();
  });

  // Global Keyboard Shortcuts ('/' to focus search, 'Escape' to close modals)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDocsModal();
      closeSubmitModal();
      return;
    }
    if (
      e.key === '/' &&
      document.activeElement &&
      !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
    ) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  loadPlugins();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
