<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Graph from '$lib/components/Graph.svelte';
  import MetricTile from '$lib/components/MetricTile.svelte';

  // Replace with live values later
  let temperature = 72;
  let humidity = 55;
  let airQuality = 120;
  let battery = 85;

  let tempHistory = [70, 72, 74, 73, 71, 75, 76];
  let tempLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Example “SaaS” summary values (later derived from backend)
  let activeDevices = 12;
  let alertsOpen = 2;
  let lastIngest = '27s ago';
</script>

<header class="dash-header">
  <div>
    <h1>Dashboard</h1>
    <p class="sub">System overview, telemetry, and recent activity.</p>
  </div>

  <div class="actions">
    <button class="btn">New Device</button>
    <button class="btn ghost">Export</button>
  </div>
</header>

<section class="grid">
  <!-- KPI strip (SaaS feel) -->
  <Card>
    <div class="kpi-row">
      <div class="kpi">
        <div class="kpi-label">Active Devices</div>
        <div class="kpi-value">{activeDevices}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Open Alerts</div>
        <div class="kpi-value">{alertsOpen}</div>
      </div>
      <div class="kpi">
        <div class="kpi-label">Last Ingest</div>
        <div class="kpi-value">{lastIngest}</div>
      </div>
    </div>
  </Card>

  <!-- Metric tiles -->
  <div class="span-12 tiles">
    <MetricTile title="Temperature" value={temperature} min={0} max={100} units="°C" hint="Live" delta={+1} />
    <MetricTile title="Humidity" value={humidity} min={0} max={100} units="%" hint="Live" delta={-2} />
    <MetricTile title="Air Quality" value={airQuality} min={0} max={500} units="AQI" hint="Live" delta={+5} />
    <MetricTile title="Battery" value={battery} min={0} max={100} units="%" hint="Avg devices" delta={0} />
  </div>

  <!-- Primary chart area -->
  <div class="span-8">
    <Card title="Temperature Trend">
      <div class="chart-wrap">
        <Graph values={tempHistory} labels={tempLabels} />
      </div>
    </Card>
  </div>

  <!-- Activity / Status side panel -->
  <div class="span-4">
    <Card title="Recent Activity">
      <ul class="activity">
        <li><span class="dot ok"></span> Sensor TX • 12s ago</li>
        <li><span class="dot warn"></span> AQI spike • 3m ago</li>
        <li><span class="dot ok"></span> Battery report • 8m ago</li>
        <li><span class="dot err"></span> Device offline • 14m ago</li>
      </ul>
    </Card>
  </div>

  <!-- Table-style SaaS block -->
  <div class="span-12">
    <Card title="Devices">
      <div class="table">
        <div class="row head">
          <div>Name</div><div>Status</div><div>Last Seen</div><div>Sensor</div><div>Value</div>
        </div>
        <div class="row">
          <div>CNX-ESP32-01</div><div class="ok">Online</div><div>12s</div><div>Temp</div><div>72°C</div>
        </div>
        <div class="row">
          <div>CNX-ESP8266-03</div><div class="warn">Degraded</div><div>3m</div><div>AQI</div><div>120</div>
        </div>
        <div class="row">
          <div>CNX-ESP32-07</div><div class="err">Offline</div><div>14m</div><div>Battery</div><div>—</div>
        </div>
      </div>
    </Card>
  </div>
</section>

<style>
  .dash-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  h1 { margin: 0; font-size: 1.6rem; letter-spacing: 0.2px; }
  .sub { margin: 0.25rem 0 0; opacity: 0.75; }

  .actions { display: flex; gap: 0.5rem; }
  .btn {
    border-radius: 0.75rem;
    padding: 0.55rem 0.8rem;
    border: 1px solid rgba(255,255,255,0.14);
    background: rgba(255,255,255,0.06);
    color: inherit;
    cursor: pointer;
  }
  .btn.ghost { background: transparent; }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;
  }

  /* First Card (KPI row) spans full width */
  .grid :global(.card) { width: 100%; }

  .span-12 { grid-column: span 12; }
  .span-8 { grid-column: span 8; }
  .span-4 { grid-column: span 4; }

  .tiles {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }

  .kpi-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    padding: 0.25rem 0;
  }
  .kpi-label { opacity: 0.7; font-size: 0.85rem; }
  .kpi-value { font-size: 1.35rem; font-weight: 700; margin-top: 0.25rem; }

  .chart-wrap { min-height: 260px; }

  .activity { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.65rem; }
  .dot { display: inline-block; width: 0.55rem; height: 0.55rem; border-radius: 999px; margin-right: 0.55rem; }
  .ok { color: rgba(120, 255, 180, 0.95); }
  .warn { color: rgba(255, 220, 120, 0.95); }
  .err { color: rgba(255, 140, 140, 0.95); }
  .dot.ok { background: rgba(120, 255, 180, 0.85); }
  .dot.warn { background: rgba(255, 220, 120, 0.85); }
  .dot.err { background: rgba(255, 140, 140, 0.85); }

  .table { display: grid; gap: 0.25rem; }
  .row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 0.75rem;
    padding: 0.65rem 0.5rem;
    border-radius: 0.75rem;
  }
  .row.head { opacity: 0.7; font-size: 0.85rem; padding-top: 0.25rem; }
  .row:not(.head) { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); }

  @media (max-width: 980px) {
    .span-8, .span-4 { grid-column: span 12; }
    .tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .kpi-row { grid-template-columns: 1fr; }
  }
</style>