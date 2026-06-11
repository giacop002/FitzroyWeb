<script lang="ts">
  let { documentUrl }: { documentUrl: string } = $props();

  type State = 'prompt' | 'accepted' | 'declined';
  let state: State = $state('prompt');

  function accept() { state = 'accepted'; }
  function decline() { state = 'declined'; }
</script>

<div class="life-gate">
  {#if state === 'prompt'}
    <div class="life-gate__prompt">
      <div class="life-gate__icon" aria-hidden="true">⚠️</div>
      <h2 class="life-gate__heading">Investor Eligibility Confirmation</h2>
      <div class="life-gate__notice">
        <p>
          The information contained in this section is only available to investors who confirm they are
          eligible to access this offering document under applicable securities laws.
        </p>
        <p>
          By clicking <strong>"Yes, I confirm"</strong>, you confirm that you are an eligible investor
          under applicable securities regulations and that you are not accessing this document from a
          jurisdiction where its distribution is restricted or prohibited.
        </p>
        <p>
          This document does not constitute an offer or solicitation to buy or sell securities in any
          jurisdiction where such offer or solicitation would be unlawful.
        </p>
      </div>
      <p class="life-gate__question">
        Do you confirm you are an eligible investor?
      </p>
      <div class="life-gate__actions">
        <button class="life-gate__btn life-gate__btn--yes" onclick={accept}>
          Yes, I confirm
        </button>
        <button class="life-gate__btn life-gate__btn--no" onclick={decline}>
          No, exit
        </button>
      </div>
    </div>

  {:else if state === 'accepted'}
    <div class="life-gate__document">
      <div class="life-gate__doc-header">
        <span class="life-gate__doc-label">LIFE Offering Document</span>
        <a href={documentUrl} target="_blank" rel="noopener noreferrer" class="life-gate__doc-btn">
          Open Document (PDF) ↗
        </a>
      </div>
      <iframe
        src={documentUrl}
        title="LIFE Offering Document"
        class="life-gate__iframe"
        aria-label="LIFE Offering PDF document"
      ></iframe>
    </div>

  {:else}
    <div class="life-gate__declined">
      <p class="life-gate__declined-msg">
        You indicated you are not an eligible investor. You have been redirected away from the offering documents.
      </p>
      <a href="/investors" class="life-gate__back">← Return to Investor Relations</a>
    </div>
  {/if}
</div>

<style>
  .life-gate {
    max-width: 700px;
    margin-inline: auto;
  }

  .life-gate__prompt {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-8);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .life-gate__icon { font-size: 2rem; text-align: center; }

  .life-gate__heading {
    font-size: 1.375rem;
    color: var(--color-primary);
    text-align: center;
  }

  .life-gate__notice {
    background: #fff8ed;
    border: 1px solid #fcd34d;
    border-radius: var(--radius);
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    font-size: 0.9rem;
    color: var(--color-text);
    line-height: 1.65;
  }

  .life-gate__question {
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-primary);
    text-align: center;
  }

  .life-gate__actions {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
  }

  .life-gate__btn {
    padding: var(--space-3) var(--space-8);
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius);
    border: 2px solid transparent;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
    font-family: inherit;
  }

  .life-gate__btn--yes {
    background: var(--color-accent);
    color: #ffffff;
    border-color: var(--color-accent);
  }

  .life-gate__btn--yes:hover {
    background: var(--color-accent-light);
    border-color: var(--color-accent-light);
  }

  .life-gate__btn--no {
    background: transparent;
    color: var(--color-text-muted);
    border-color: var(--color-border-dark);
  }

  .life-gate__btn--no:hover {
    background: var(--color-bg-alt);
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .life-gate__document { display: flex; flex-direction: column; gap: var(--space-3); }

  .life-gate__doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-3) var(--space-4);
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
  }

  .life-gate__doc-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .life-gate__doc-btn {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-accent);
    text-decoration: none;
  }

  .life-gate__iframe {
    width: 100%;
    height: 80vh;
    min-height: 500px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
  }

  .life-gate__declined {
    text-align: center;
    padding: var(--space-12);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
  }

  .life-gate__declined-msg {
    font-size: 1rem;
    color: var(--color-text-muted);
    max-width: 420px;
    line-height: 1.65;
  }

  .life-gate__back {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-accent);
    text-decoration: none;
  }
</style>
