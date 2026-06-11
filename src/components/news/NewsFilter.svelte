<script lang="ts">
  interface Article {
    slug: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    pdfUrl?: string;
    featured: boolean;
  }

  interface Category {
    value: string;
    label: string;
  }

  let {
    articles,
    categories,
  }: { articles: Article[]; categories: Category[] } = $props();

  let active = $state('all');

  const categoryLabels = Object.fromEntries(categories.map((c) => [c.value, c.label]));

  function getFiltered() {
    return active === 'all' ? articles : articles.filter((a) => a.category === active);
  }

  function getFilteredCount() {
    return getFiltered().length;
  }
</script>

<div class="news-filter">
  <!-- Filter buttons -->
  <div class="filter-bar" role="group" aria-label="Filter news by category">
    <button
      class="filter-btn"
      class:active={active === 'all'}
      onclick={() => (active = 'all')}
    >
      All <span class="filter-count">{articles.length}</span>
    </button>
    {#each categories as cat}
      {@const count = articles.filter((a) => a.category === cat.value).length}
      {#if count > 0}
        <button
          class="filter-btn"
          class:active={active === cat.value}
          onclick={() => (active = cat.value)}
        >
          {cat.label} <span class="filter-count">{count}</span>
        </button>
      {/if}
    {/each}
  </div>

  <!-- Results count -->
  <p class="filter-results" aria-live="polite">
    {getFilteredCount()} {getFilteredCount() === 1 ? 'release' : 'releases'}
    {active !== 'all' ? `in ${categoryLabels[active] ?? active}` : ''}
  </p>

  <!-- Article list -->
  {#if getFilteredCount() > 0}
    <ul class="news-list" role="list">
      {#each getFiltered() as article (article.slug)}
        <li class="news-item">
          <div class="news-item__inner">
            <div class="news-item__date">
              {new Date(article.date + 'T12:00:00').toLocaleDateString('en-CA', {
                year: 'numeric', month: 'short', day: 'numeric'
              })}
            </div>
            <div class="news-item__body">
              <span class="news-item__badge news-item__badge--{article.category}">
                {categoryLabels[article.category] ?? article.category}
              </span>
              <!-- Stretched link covers the whole card -->
              <a href={`/news/${article.slug}`} class="news-item__title-link">
                {article.title}
              </a>
              <p class="news-item__summary">{article.summary}</p>
            </div>
            <div class="news-item__actions">
              <span class="news-item__read" aria-hidden="true">Read →</span>
              {#if article.pdfUrl}
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="news-item__pdf"
                >
                  PDF ↗
                </a>
              {/if}
            </div>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="news-empty">No news releases in this category.</p>
  {/if}
</div>

<style>
  /* Filter bar */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2, 0.5rem);
    margin-bottom: var(--space-3, 0.75rem);
  }

  .filter-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    padding: 0.35em 0.85em;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted, #6b7280);
    background: var(--color-bg-alt, #f4f6f8);
    border: 1px solid var(--color-border, #e2e5ea);
    border-radius: 999px;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    white-space: nowrap;
  }

  .filter-btn:hover {
    color: var(--color-primary, #0a1a2e);
    border-color: var(--color-border-dark, #c9cdd4);
  }

  .filter-btn.active {
    background: var(--color-primary, #0a1a2e);
    color: #ffffff;
    border-color: var(--color-primary, #0a1a2e);
  }

  .filter-count {
    font-size: 0.75em;
    opacity: 0.7;
  }

  /* Results */
  .filter-results {
    font-size: 0.8125rem;
    color: var(--color-text-muted, #6b7280);
    margin-bottom: var(--space-5, 1.25rem);
  }

  /* List */
  .news-list { list-style: none; padding: 0; margin: 0; }

  .news-item {
    border-bottom: 1px solid var(--color-border, #e2e5ea);
  }

  .news-item:last-child { border-bottom: none; }

  .news-item__inner {
    display: grid;
    grid-template-columns: 120px 1fr auto;
    gap: 1.5rem;
    align-items: start;
    padding: 1.25rem 0.5rem;
    border-radius: 0.5rem;
    transition: background 0.15s;
    position: relative; /* needed for stretched link */
  }

  .news-item__inner:hover { background: var(--color-bg-alt, #f4f6f8); }

  .news-item__date {
    font-size: 0.8125rem;
    color: var(--color-text-muted, #6b7280);
    padding-top: 0.2em;
    flex-shrink: 0;
  }

  .news-item__body {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    min-width: 0;
  }

  /* Badge — replicate the Badge component styles inline for Svelte */
  .news-item__badge {
    display: inline-block;
    padding: 0.2em 0.65em;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    border-radius: 999px;
    white-space: nowrap;
    align-self: flex-start;
  }

  .news-item__badge--exploration-results  { background: #dcfce7; color: #166534; }
  .news-item__badge--corporate-update     { background: #dbeafe; color: #1e40af; }
  .news-item__badge--financial-disclosure { background: #fef3c7; color: #92400e; }
  .news-item__badge--agm                  { background: #ede9fe; color: #5b21b6; }
  .news-item__badge--management-change    { background: #fce7f3; color: #9d174d; }
  .news-item__badge--property-update      { background: #f0fdf4; color: #14532d; }
  .news-item__badge--capital-markets      { background: #fff7ed; color: #9a3412; }

  /* Stretched link — covers the whole card, PDF sits above via z-index */
  .news-item__title-link {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-primary, #0a1a2e);
    line-height: 1.4;
    text-decoration: none;
  }

  .news-item__title-link::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
  }

  .news-item__title-link:hover { text-decoration: none; }

  .news-item__summary {
    font-size: 0.875rem;
    color: var(--color-text-muted, #6b7280);
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-item__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    flex-shrink: 0;
    padding-top: 0.2em;
  }

  .news-item__read {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-accent, #c17f3a);
    opacity: 0;
    transition: opacity 0.15s;
    white-space: nowrap;
    /* sits below the stretched link overlay */
    position: relative;
    z-index: 0;
    pointer-events: none;
  }

  .news-item__inner:hover .news-item__read { opacity: 1; }

  .news-item__pdf {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted, #6b7280);
    text-decoration: none;
    border: 1px solid var(--color-border-dark, #c9cdd4);
    padding: 0.2em 0.55em;
    border-radius: 0.25rem;
    transition: color 0.15s, border-color 0.15s;
    /* sits above the stretched link overlay */
    position: relative;
    z-index: 1;
  }

  .news-item__pdf:hover {
    color: var(--color-accent, #c17f3a);
    border-color: var(--color-accent, #c17f3a);
  }

  .news-empty {
    padding: 3rem 0;
    text-align: center;
    color: var(--color-text-muted, #6b7280);
    font-size: 0.9375rem;
  }

  @media (max-width: 640px) {
    .news-item__inner {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    .news-item__actions { flex-direction: row; align-items: center; }
    .news-item__read { opacity: 1; }
  }
</style>
