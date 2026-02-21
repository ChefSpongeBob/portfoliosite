<script lang="ts">
  import { page } from "$app/stores";
  import { primaryNav } from "$lib/assets/navigation";
  import { onMount } from "svelte";
  import Footer from "$lib/components/Footer.svelte";

  let collapsed = false; // desktop + mobile rail mode
  let width = 0;

  const BREAKPOINT = 768;

  $: currentPath = $page.url.pathname;

  // Current nav item for header title
  $: currentItem =
    primaryNav.find((item) => {
      const route = item.route.endsWith("/") ? item.route : item.route + "/";
      const path = currentPath.endsWith("/") ? currentPath : currentPath + "/";
      return path.startsWith(route);
    }) ?? null;

  $: pageTitle = currentItem ? currentItem.label : "";

  $: isMobile = width > 0 && width < BREAKPOINT;

  function toggleCollapse() {
    collapsed = !collapsed;
  }

  function collapseSidebar() {
    collapsed = true;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isMobile && !collapsed) collapseSidebar();
  }

  function reconcileOnResize() {
    width = window.innerWidth;

    // On mobile, default to collapsed rail so content isn't crushed.
    if (width < BREAKPOINT) collapsed = true;
  }

  onMount(() => {
    reconcileOnResize();
    window.addEventListener("resize", reconcileOnResize);
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("resize", reconcileOnResize);
      window.removeEventListener("keydown", onKeydown);
    };
  });
</script>

<div class="layout">
  <!-- Mobile overlay (only when expanded on mobile; click outside collapses) -->
  {#if isMobile && !collapsed}
    <div
      class="overlay"
      role="button"
      tabindex="0"
      aria-label="Collapse sidebar"
      on:click={collapseSidebar}
      on:keydown={(e) => (e.key === "Enter" || e.key === " ") && collapseSidebar()}
    />
  {/if}

  <!-- Sidebar: fixed overlay; expands over content; rail always visible -->
  <aside class="sidebar {collapsed ? 'collapsed' : ''}">
    <button class="sidebar-toggle" on:click={toggleCollapse} aria-label="Toggle sidebar">
      <span class="material-icons">bug_report</span>
    </button>

    <div class="sidebar-inner">
      {#each primaryNav as item}
        <a
          href={item.route}
          class="side-item {currentPath.startsWith(item.route) ? 'active' : ''}"
          on:click={() => isMobile && !collapsed && collapseSidebar()}
        >
          <span class="icon material-icons">{item.icon}</span>

          {#if !collapsed}
            <span class="label">{item.label}</span>
          {/if}

          <span class="active-indicator"></span>
        </a>
      {/each}
    </div>
  </aside>

  <main class="app-shell">
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/">CharlottesNexus</a>

        {#if pageTitle}
          <div class="page-title">{pageTitle}</div>
        {/if}
      </div>
    </header>

    <div class="page-content">
      <slot />
    </div>

    <Footer class="site-footer" />
  </main>
</div>

<style>
  :global(:root) {
    --header-h: 64px;

    /* Always-clear rail width so cards never sit under collapsed sidebar */
    --rail-w: 72px;

    /* Sidebar expanded width (allowed to overlay content) */
    --sidebar-w: 240px;
  }

  .layout {
    display: flex;
    min-height: 100vh;
  }

  /* Sidebar: fixed overlay, under header/footer, above page content */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    width: var(--sidebar-w);
    background: #121212;
    border-right: 1px solid #222;

    transition: width 0.24s ease;
    z-index: 3000;

    display: flex;
    flex-direction: column;
  }

  .sidebar.collapsed {
    width: var(--rail-w);
  }

  /* Keep spider button visible under sticky header */
  .sidebar-toggle {
    margin-top: var(--header-h);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #ccc;
    font-size: 28px;
  }

  .sidebar-inner {
    padding: 1rem 0.5rem 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .side-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0.5rem;
    color: #888;
    text-decoration: none;
    border-radius: 6px;
    position: relative;
    transition: background 0.2s, color 0.2s;
  }

  .side-item:hover {
    background: #1a1a1a;
    color: #e0e0e0;
  }

  .sidebar.collapsed .label {
    display: none;
  }

  .icon {
    font-family: "Material Icons";
    font-size: 24px;
  }

  .active-indicator {
    position: absolute;
    left: -10px;
    width: 4px;
    height: 22px;
    background: #a13aaa;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .side-item.active {
    color: #e0e0e0;
    background: #1a1a1a;
  }

  .side-item.active .active-indicator {
    opacity: 1;
  }

  /* Mobile overlay: below sidebar, above page content */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 2500;
  }

  /* App shell should NOT be pushed by sidebar */
  .app-shell {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-left: 0; /* important: no push */
  }

  /* Header sits above sidebar */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 4000; /* above sidebar */

    background: rgba(8, 8, 8, 0.82);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    isolation: isolate;
  }

  .header-inner {
    height: var(--header-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .brand {
    color: rgba(255, 255, 255, 0.92);
    text-decoration: none;
    font-weight: 800;
    letter-spacing: 0.02em;
    font-size: 1.05rem;
  }

  .brand:hover {
    color: rgba(255, 255, 255, 1);
  }

  .page-title {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.01em;
  }

  /* Content: ALWAYS clears the rail; does not react to collapsed/expanded */
  .page-content {
    padding: var(--content-pad, 2rem);
    padding-left: calc(var(--rail-w) + var(--content-pad, 2rem));
    position: relative;
    z-index: 1; /* below sidebar */
  }

  /* Footer sits above sidebar */
  :global(.site-footer) {
    position: relative;
    z-index: 4000; /* above sidebar */
  }

  @media (max-width: 767px) {
    .page-content {
      --content-pad: 1rem;
    }

    .header-inner {
      padding: 0 1.25rem;
    }

    .sidebar {
      box-shadow: 12px 0 40px rgba(0, 0, 0, 0.55);
    }
  }

  @media (max-width: 420px) {
    .page-content {
      --content-pad: 0.75rem;
    }
  }
</style>