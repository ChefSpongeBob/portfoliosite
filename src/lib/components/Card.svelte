<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let title: string = '';
  export let href: string | null = null;
  export let onClick: () => void = () => {};

  const dispatch = createEventDispatcher();

  function handleClick() {
    if (href) return;
    onClick();
    dispatch('click');
  }
</script>

{#if href}
  <a class="card" href={href}>
    {#if title}<h3>{title}</h3>{/if}
    <div class="content">
      <slot />
    </div>
  </a>
{:else}
  <div class="card" on:click={handleClick}>
    {#if title}<h3>{title}</h3>{/if}
    <div class="content">
      <slot />
    </div>
  </div>
{/if}

<style>
.card {
  background: #1a1a1a;
  color: #eee;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255,255,255,0.05);
  margin: 0rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 100%;
  word-wrap: break-word;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.1);
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #fff;
}

.card .content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Mobile responsive grid parent usage */
@media (max-width: 640px) {
  .card {
    min-width: 100%;
  }
}
</style>
