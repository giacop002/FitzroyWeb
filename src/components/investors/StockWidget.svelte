<script lang="ts">
  interface Ticker {
    symbol: string;
    exchange: string;
    label: string;
  }

  let { tickers }: { tickers: Ticker[] } = $props();

  const widgetUrl = import.meta.env.PUBLIC_STOCK_WIDGET_URL;
</script>

{#if widgetUrl}
  <div class="stock-widget">
    <iframe
      src={widgetUrl}
      title="Stock quote widget"
      frameborder="0"
      scrolling="no"
      class="stock-widget__iframe"
    ></iframe>
  </div>
{:else}
  <div class="stock-placeholder">
    <p class="stock-placeholder__label">Live stock quote</p>
    <div class="stock-tickers">
      {#each tickers as ticker}
        <div class="stock-ticker">
          <span class="stock-ticker__exchange">{ticker.exchange}</span>
          <span class="stock-ticker__symbol">{ticker.symbol}</span>
        </div>
      {/each}
    </div>
    <p class="stock-placeholder__note">
      Configure <code>PUBLIC_STOCK_WIDGET_URL</code> in <code>.env</code> to embed a live quote widget.
    </p>
  </div>
{/if}

<style>
  .stock-widget__iframe {
    width: 100%;
    min-height: 200px;
    border: none;
  }

  .stock-placeholder {
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .stock-placeholder__label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--color-text-muted);
  }

  .stock-tickers {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .stock-ticker {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }

  .stock-ticker__exchange {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-muted);
  }

  .stock-ticker__symbol {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-primary);
    letter-spacing: -0.01em;
  }

  .stock-placeholder__note {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-3);
  }

  code {
    font-family: monospace;
    background: var(--color-border);
    padding: 0.1em 0.4em;
    border-radius: 3px;
    font-size: 0.875em;
  }
</style>
