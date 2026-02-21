<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Card from '$lib/components/Card.svelte';

  export let title: string = 'Live Telemetry';
  export let sensorType: string = 'temperature';
  export let last: number = 50;
  export let pollMs: number = 4000;

  export let color: string = '#1e90ff';
  export let width: number = 300;
  export let height: number = 150;

  type Reading = {
    device_id: string;
    sensor_type: string;
    value: number;
    timestamp: string | number;
  };

  let readings: Reading[] = [];
  let timer: ReturnType<typeof setInterval> | null = null;

  async function load() {
    try {
      const res = await fetch(
        `/api/iot-data?sensor_type=${encodeURIComponent(sensorType)}&last=${last}`
      );
      if (!res.ok) return;

      const data: Reading[] = await res.json();
      // newest-first -> oldest->newest
      readings = (data ?? []).slice().reverse();
    } catch {
      // silent fail
    }
  }

  onMount(() => {
    load();
    timer = setInterval(load, pollMs);
  });

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });

  // Values from data
  $: rawValues = readings.map(r => Number(r.value ?? 0));

  /**
   * IMPORTANT:
   * polyline needs >= 2 points to look like a line.
   * If we have 0 readings, draw a neutral flat line at 0.
   * If we have 1 reading, duplicate it so the line spans the chart.
   */
  $: plotValues =
    rawValues.length >= 2 ? rawValues
    : rawValues.length === 1 ? [rawValues[0], rawValues[0]]
    : [0, 0];

  // Labels only when we have real history
  $: labels =
    readings.length >= 2
      ? readings.map(r => {
          const t =
            typeof r.timestamp === 'string'
              ? new Date(r.timestamp)
              : new Date(Number(r.timestamp));
          if (Number.isNaN(t.getTime())) return '';
          return t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        })
      : [];

  // Safe plotting math
  $: maxValue = Math.max(...plotValues, 1);
  $: denom = Math.max(plotValues.length - 1, 1);

  $: points = plotValues.map((v, i) => {
    const x = (i / denom) * width;

    // Add a tiny padding so dots/lines don't clip on edges
    const pad = 6;
    const usableH = height - pad * 2;
    const y = (height - pad) - (v / maxValue) * usableH;

    return [x, y];
  });

  $: labelDenom = Math.max(labels.length - 1, 1);
</script>

<Card title={title}>
  <div class="graph-container">
    <div class="meta">{sensorType}</div>

    <svg viewBox={`0 0 ${width} ${height}`} class="graph-svg" aria-label={title}>
      <!-- Grid -->
      {#each Array(5) as _, i}
        <line
          x1="0"
          x2={width}
          y1={(i / 4) * height}
          y2={(i / 4) * height}
          class="grid"
        />
      {/each}

      <!-- Line -->
      <polyline
        fill="none"
        stroke={color}
        stroke-width="2"
        points={points.map(p => p.join(',')).join(' ')}
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- Points (only show dots when we have real readings) -->
      {#if rawValues.length > 0}
        {#each points as [x, y]}
          <circle cx={x} cy={y} r="3" fill={color} />
        {/each}
      {/if}

      <!-- X labels -->
      {#if labels.length > 0}
        {#each labels as label, i}
          <text
            x={(i / labelDenom) * width}
            y={height + 12}
            class="xlabel"
            text-anchor="middle"
          >
            {label}
          </text>
        {/each}
      {/if}
    </svg>
  </div>
</Card>

<style>
  .graph-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: rgba(255,255,255,0.9);
  }

  .meta {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(255,255,255,0.5);
  }

  .graph-svg {
    width: 100%;
    height: auto;
    overflow: visible;
    min-height: 140px; /* prevents weird collapsing in some layouts */
  }

  .grid {
    stroke: rgba(255,255,255,0.08);
    stroke-width: 1;
  }

  .xlabel {
    font-size: 10px;
    fill: rgba(255,255,255,0.55);
  }
</style>