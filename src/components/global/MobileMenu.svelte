<script lang="ts">
  import { onMount } from 'svelte';

  let { pathname = '/' }: { pathname: string } = $props();

  const navItems = [
    { label: 'About',     href: '/about' },
    { label: 'Projects',  href: '/projects' },
    { label: 'Investors', href: '/investors' },
    { label: 'News',      href: '/news' },
    { label: 'Contact',   href: '/contact' },
  ];

  let open = $state(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  function toggle() { open = !open; }
  function close() { open = false; }

  onMount(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  });
</script>

<div class="mobile-menu">
  <button
    class="hamburger"
    aria-label={open ? 'Close menu' : 'Open menu'}
    aria-expanded={open}
    aria-controls="mobile-nav"
    onclick={toggle}
  >
    <span class="bar" class:open></span>
    <span class="bar" class:open></span>
    <span class="bar" class:open></span>
  </button>

  {#if open}
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="overlay" onclick={close}></div>
  {/if}

  <nav
    id="mobile-nav"
    class="drawer"
    class:open
    aria-label="Mobile navigation"
    aria-hidden={!open}
  >
    <ul role="list">
      {#each navItems as item}
        <li>
          <a
            href={item.href}
            class="mobile-link"
            class:active={isActive(item.href)}
            aria-current={isActive(item.href) ? 'page' : undefined}
            onclick={close}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .mobile-menu { display: contents; }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.375rem;
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    color: white;
  }

  .bar {
    display: block;
    width: 100%;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 0.2s, opacity 0.2s;
    transform-origin: center;
  }

  .bar.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .bar.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .bar.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 40;
    backdrop-filter: blur(2px);
  }

  .drawer {
    position: fixed;
    top: var(--header-height);
    right: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background: var(--color-primary);
    z-index: 50;
    padding: var(--space-6) var(--space-4);
    transform: translateX(100%);
    transition: transform 0.25s ease;
    overflow-y: auto;
    list-style: none;
  }

  .drawer.open { transform: translateX(0); }

  ul { list-style: none; display: flex; flex-direction: column; gap: var(--space-1); }

  .mobile-link {
    display: block;
    padding: var(--space-3) var(--space-4);
    font-size: 1.0625rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    border-radius: var(--radius);
    transition: background 0.15s, color 0.15s;
  }

  .mobile-link:hover,
  .mobile-link.active {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .mobile-link.active { color: var(--color-accent-light, #d4954f); }
</style>
