<script lang="ts">
  export let title: string = 'CharlottesNexus';
</script>

<header class="site-header">
  <div class="inner">
    <a class="brand" href="/">
      {title}
    </a>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;

    /* dark glassy header */
    background: rgba(10, 10, 10, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .inner {
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
  }

  .brand {
    color: rgba(255,255,255,0.92);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.02em;
    font-size: 1.05rem;
  }

  .brand:hover {
    color: rgba(255,255,255,1);
  }
</style>