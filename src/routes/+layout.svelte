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

  <!-- Sidebar: always visible rail; expands over content on mobile -->
  <aside class="sidebar {collapsed ? 'collapsed' : ''}">
    <!-- Spider button (acts as both hamburger + collapse) -->
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

  <!-- Main content -->
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

    <Footer />
  </main>
</div>

<style>
  /* =========================
     Layout
  ========================= */
  .layout {
    display: flex;
    min-height: 100vh;
  }

  /* =========================
     Sidebar
  ========================= */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    width: 240px;
    background: #121212;
    border-right: 1px solid #222;

    transition: width 0.24s ease;
    z-index: 3000;

    display: flex;
    flex-direction: column;
  }

  .sidebar.collapsed {
    width: 72px;
  }

  .sidebar-toggle {
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

  /* =========================
     Mobile overlay (only when expanded on mobile)
  ========================= */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 2500; /* behind sidebar (3000) but above app content */
  }

  /* =========================
     App Shell (layout only)
     Background is handled in app.css
  ========================= */
  .app-shell {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    margin-left: 240px;
    transition: margin-left 0.24s ease;
  }

  .sidebar.collapsed ~ .app-shell {
    margin-left: 72px;
  }

  /* =========================
     Header (always visible)
  ========================= */
  .site-header {
    position: sticky;
    top: 0;
    z-index: 2000;

    background: rgba(8, 8, 8, 0.82);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    isolation: isolate;
  }

  .header-inner {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    /* keep desktop roomy by default */
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

  /* =========================
     Content
  ========================= */
  .page-content {
    /* CHANGE #1: make padding scale via a variable */
    padding: var(--content-pad, 2rem);
    position: relative;
    z-index: 1;
  }

  /* =========================
     Mobile: ALWAYS rail (72px), expanded sidebar overlays content
     + tighter padding so cards don't look "buffed"
  ========================= */
  @media (max-width: 767px) {
    /* CHANGE #2: reduce content padding on mobile */
    .page-content {
      --content-pad: 1rem;
    }

    .header-inner {
      padding: 0 1.25rem;
    }

    /* On mobile, keep content offset for the rail */
    .app-shell {
      margin-left: 72px !important;
    }

    /* Visual pop when expanded overlays content */
    .sidebar {
      box-shadow: 12px 0 40px rgba(0, 0, 0, 0.55);
    }
  }

  /* Extra-tight phones */
  @media (max-width: 420px) {
    .page-content {
      --content-pad: 0.75rem;
    }
  }
</style>