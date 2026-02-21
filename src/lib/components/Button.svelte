<script lang="ts">
  export let type: 'primary' | 'secondary' = 'primary';
  export let onClick: () => void = () => {};
  export let href: string | null = null;
</script>

{#if href}
  <a href={href} class="btn {type}">
    <slot />
  </a>
{:else}
  <button class="btn {type}" on:click={onClick}>
    <slot />
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.4rem;
    border-radius: 0.6rem;
    border: none;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .btn.primary {
    background-color: #1e90ff;
    color: white;
  }

  .btn.primary:hover {
    background-color: #0f76d1;
    transform: translateY(-2px);
  }

  .btn.secondary {
    background-color: rgba(255,255,255,0.1);
    color: #eee;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .btn.secondary:hover {
    background-color: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.4);
    transform: translateY(-2px);
  }
</style>