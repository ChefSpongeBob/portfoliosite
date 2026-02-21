<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Card from '$lib/components/Card.svelte';

  // Config props (not data props)
  export let sensorType: string = 'temperature';
  export let label: string = 'Current';
  export let units: string = '';
  export let min: number = 0;
  export let max: number = 100;
  export let pollMs: number = 4000;

  type Reading = {
    value: number;
    timestamp: string | number;
  };

  let value = 0;
  let timer: ReturnType<typeof setInterval> | null = null;

  async function load() {
    try {
      const res = await fetch(
        `/api/iot-data?sensor_type=${encodeURIComponent(sensorType)}&last=1`
      );
      if (!res.ok) return;

      const data: Reading[] = await res.json();
      const latest = data?.[0];

      if (latest && latest.value !== undefined) {
        value = Number(latest.value);
      }
    } catch {
      // silent fail (prevents UI flicker)
    }
  }

  onMount(() => {
    load();
    timer = setInterval(load, pollMs);
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });

  // Gauge math
  $: clamped = Math.min(Math.max(value, min), max);
  $: percent = (clamped - min) / (max - min || 1);
  $: angle = -90 + percent * 180;
</script>

<Card title={label}>
  <div class="gauge-container" aria-label={label || 'Gauge'}>
    <div class="meta">{sensorType}</div>

    <svg viewBox="0 0 200 110" class="gauge">
      <!-- Background arc -->
      <path d="M10,90 A90,90 0 0,1 190,90" fill="none" class="arc-bg" stroke-width="15" />

      <!-- Active arc -->
      <path
        d="M10,90 A90,90 0 0,1 190,90"
        fill="none"
        class="arc-active"
        stroke-width="15"
        stroke-dasharray="141.3"
        stroke-dashoffset="{141.3 * (1 - percent)}"
        stroke-linecap="round"
      />

      <!-- Needle -->
      <line
        x1="100"
        y1="90"
        x2="{100 + 80 * Math.cos((angle * Math.PI) / 180)}"
        y2="{90 + 80 * Math.sin((angle * Math.PI) / 180)}"
        class="needle"
        stroke-width="3"
      />

      <!-- Center -->
      <circle cx="100" cy="90" r="5" class="hub" />
    </svg>

    <div class="value">{clamped}{units}</div>
  </div>
</Card>

<style>
  .gauge-container {
    width: 100%;
    max-width: 220px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255,255,255,0.9);
  }

  .meta {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.5);
  }

  .gauge {
    width: 100%;
    height: auto;
  }

  .arc-bg {
    stroke: rgba(255,255,255,0.12);
  }

  .arc-active {
    stroke: #1e90ff;
  }

  .needle {
    stroke: #ff4136;
  }

  .hub {
    fill: rgba(255,255,255,0.35);
  }

  .value {
    font-weight: 700;
    font-size: 1.25rem;
    color: rgba(255,255,255,0.95);
  }
</style>