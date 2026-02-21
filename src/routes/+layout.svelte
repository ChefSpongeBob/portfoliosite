<script lang="ts">
  import { page } from "$app/stores";
  import { primaryNav } from "$lib/assets/navigation";
  import { onMount } from "svelte";
  import Footer from "$lib/components/Footer.svelte";

  let collapsed = false; // sidebar collapsed (desktop)
  let sidebarOpen = false; // mobile open
  let width = 0; // viewport width

  $: currentPath = $page.url.pathname;

  // Current nav item for header title
  $: currentItem =
    primaryNav.find((item) => {
      const route = item.route.endsWith("/") ? item.route : item.route + "/";
      const path = currentPath.endsWith("/") ? currentPath : currentPath + "/";
      return path.startsWith(route);
    }) ?? null;

  $: pageTitle = currentItem ? currentItem.label : "";

  function toggleCollapse() {
    if (width < 768) {
      sidebarOpen = !sidebarOpen;
    } else {
      collapsed = !collapsed;
    }
  }

  function closeSidebar() {
    sidebarOpen = false;
  }

  onMount(() => {
    width = window.innerWidth;
    const resizeHandler = () => (width = window.innerWidth);
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });
</script>

<div class="layout">
  <!-- Sidebar -->
  <aside class="sidebar {collapsed ? 'collapsed' : ''}" class:open={sidebarOpen}>
    <!-- Spider / collapse button inside sidebar -->
    <button class="sidebar-toggle" on:click={toggleCollapse} aria-label="Toggle sidebar">
      <span class="material-icons">bug_report</span>
    </button>

    <div class="sidebar-inner">
      {#each primaryNav as item}
        <a
          href={item.route}
          class="side-item {currentPath.startsWith(item.route) ? 'active' : ''}"
          on:click={closeSidebar}
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

  <!-- Mobile overlay -->
  {#if sidebarOpen && width < 768}
    <div
      class="overlay"
      role="button"
      tabindex="0"
      aria-label="Close sidebar"
      on:click={closeSidebar}
      on:keydown={(e) => (e.key === "Enter" || e.key === " ") && closeSidebar()}
    ></div>
  {/if}

  <!-- Main content -->
  <main class="app-shell">
    <!-- Consistent Header -->
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
    transform: translateX(-100%);
    transition: transform 0.24s ease, width 0.24s ease;
    z-index: 1050;
    display: flex;
    flex-direction: column;
  }

  .sidebar.open {
    transform: translateX(0);
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
     Mobile overlay
  ========================= */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1000;
    transition: opacity 0.3s ease;
  }

  /* =========================
     App Shell (layout only)
     Background is handled in app.css
  ========================= */
  .app-shell {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 240px;
    transition: margin-left 0.24s ease;
    min-height: 100vh;
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

    /* keep header above any global background layers */
    isolation: isolate;
  }

  .header-inner {
    height: 64px;
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

  /* =========================
     Content
  ========================= */
  .page-content {
    padding: 2rem;
    position: relative;
    z-index: 1; /* stays above app.css background layers */
  }

  /* Desktop: sidebar always visible, overlay hidden */
  @media (min-width: 768px) {
    .sidebar {
      transform: translateX(0);
    }
    .overlay {
      display: none;
    }
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .app-shell {
      margin-left: 0;
    }
    .header-inner {
      padding: 0 1.25rem;
    }
  }
</style>