<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Gauge from '$lib/components/Gauge.svelte';

  export let title: string;
  export let value: number;
  export let min = 0;
  export let max = 100;
  export let units = '';
  export let delta: number | null = null; // e.g. +3, -2 (optional)
  export let hint: string | null = null;  // e.g. "Last 15m"
</script>

<Card>
  <div class="tile">
    <div class="top">
      <div class="meta">
        <div class="title">{title}</div>
        {#if hint}<div class="hint">{hint}</div>{/if}
      </div>

      {#if delta !== null}
        <div class:pos={delta >= 0} class:neg={delta < 0} class="delta">
          {delta >= 0 ? `+${delta}` : `${delta}`}
        </div>
      {/if}
    </div>

    <div class="body">
      <Gauge {value} {min} {max} {units} />
    </div>
  </div>
</Card>

<style>
  .tile { display: grid; gap: 0.75rem; }
  .top { display: flex; align-items: baseline; justify-content: space-between; gap: 0.75rem; }
  .title { font-weight: 650; letter-spacing: 0.2px; }
  .hint { opacity: 0.7; font-size: 0.85rem; margin-top: 0.2rem; }
  .delta { font-size: 0.85rem; padding: 0.15rem 0.5rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); }
  .pos { color: rgba(120, 255, 180, 0.95); }
  .neg { color: rgba(255, 140, 140, 0.95); }
  .body { display: grid; place-items: center; min-height: 180px; }
</style>