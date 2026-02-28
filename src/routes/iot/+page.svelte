<!-- src/routes/iot/+page.svelte -->
<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import Card from '$lib/components/Card.svelte';

  // Swap these images with your own (recommended: real photos of builds, enclosures, dashboards, TFT UIs)
  const iotSlides = [
    {
      src: "/images/carousel/iot-1.webp",
      alt: "ESP32 prototype with sensors on a workbench",
      title: "Rapid Prototyping",
      caption: "ESP32/ESP8266 + sensors → validated fast."
    },
    {
      src: "/images/carousel/iot-2.webp",
      alt: "TFT screen showing a device GUI dashboard",
      title: "On-Device TFT GUIs",
      caption: "Local control screens, menus, charts, and status."
    },
    {
      src: "/images/carousel/iot-3.webp",
      alt: "3D printed enclosure with mounted device",
      title: "Custom Enclosures",
      caption: "3D printed cases built for your environment."
    }
  ];
</script>

<div class="page-layout">

  <!-- ========================= -->
  <!-- TOP BANNER (CAROUSEL)     -->
  <!-- ========================= -->
  <div class="banner-row">
    <Carousel slides={iotSlides} interval={8000} />
  </div>

  <!-- ========================= -->
  <!-- HERO + SIDE CARDS         -->
  <!-- ========================= -->
  <div class="top-row">

    <div class="hero-column">
      <Card>
        <div class="hero-content">
          <h1 class="hero-title">
            IoT Development, Built End-to-End
          </h1>

          <p class="hero-sub">
            We design and deploy real-world IoT systems using single-board computers and microcontrollers —
            <strong>ESP32, ESP8266, NodeMCU</strong>, and modern SBC platforms — paired with reliable sensors,
            secure connectivity, and clean interfaces.
          </p>

          <p class="hero-sub">
            From low-power sensor nodes to full on-site control stations with TFT screens and custom GUIs,
            every build is configurable for your workflow, your environment, and your brand style.
          </p>

          <div class="hero-cta">
            <a href="/contacts" class="primary-btn">Talk IoT With Us</a>
            <a href="/projects" class="secondary-btn">See Builds</a>
          </div>

          <p class="hero-note">
            <strong>Security-first:</strong> device identity, secure transport, least-privilege access, and no data sharing.
            We build IoT systems to be dependable and defensible — not brittle.
          </p>
        </div>
      </Card>
    </div>

    <aside class="data-column">
      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Common Hardware We Use</h2>
          <p class="mini-text">
            ESP32 / ESP8266 / NodeMCU, single-board computers, sensor breakouts, relay boards,
            cameras, and expansion modules — selected based on uptime and field reliability.
          </p>
        </div>
      </Card>

      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Displays &amp; UX</h2>
          <p class="mini-text">
            TFT screens, on-device menus, status views, charts, and touch-friendly GUIs — styled for your application.
          </p>
        </div>
      </Card>
    </aside>

  </div>

  <!-- ========================= -->
  <!-- CAPABILITIES (CARD GRID)  -->
  <!-- ========================= -->
  <div class="section-header">
    <Card>
      <div class="section-hero">
        <h2 class="section-title">Core IoT Capabilities</h2>
        <p class="section-sub">
          Practical systems that collect signals, trigger actions, and give you visibility — locally and remotely.
          We build the firmware, the network path, the UI, and the backend as one cohesive system.
        </p>
      </div>
    </Card>
  </div>

  <div class="card-grid">

    <Card>
      <h2>Sensor Nodes &amp; Telemetry</h2>
      <p>
        We build sensor units that read, filter, and report data reliably — with configurable sampling, thresholds,
        and event-based alerts. Designed for stability, low power, and long-term maintenance.
      </p>
      <ul class="bullets">
        <li>Environmental: temp, humidity, air quality, pressure</li>
        <li>Facility: motion, door/window, vibration, water leak</li>
        <li>Operational: equipment state, uptime, cycle counts</li>
        <li>Custom sensors as needed</li>
      </ul>
    </Card>

    <Card>
      <h2>Single-Board Computers &amp; Edge Systems</h2>
      <p>
        For on-site control, aggregation, and secure local processing, we deploy SBC-based edge systems.
        These can run local dashboards, store data safely, and bridge devices to the cloud (or stay fully local).
      </p>
      <ul class="bullets">
        <li>Local-only networks when required</li>
        <li>Edge logging and buffering during outages</li>
        <li>Gateway bridging for device fleets</li>
        <li>On-prem dashboards and admin tools</li>
      </ul>
    </Card>

    <Card>
      <h2>TFT Screens, GUIs &amp; On-Device Control</h2>
      <p>
        We build clean, readable interfaces for devices: status screens, menus, charts, and touch-friendly controls.
        Everything is customizable — layout, colors, typography, branding, and interaction flow.
      </p>
      <p class="muted">
        Perfect for kiosks, equipment panels, “at-a-glance” monitoring, and offline-capable control systems.
      </p>
    </Card>

    <Card>
      <h2>Alerts, Automation &amp; Integrations</h2>
      <p>
        Trigger actions when conditions change — not after you notice it’s too late. We implement rules engines,
        notifications, and integrations that match how your team actually operates.
      </p>
      <ul class="bullets">
        <li>Threshold alerts, anomaly flags, scheduled checks</li>
        <li>Relays, actuators, lock controls, and safety interlocks</li>
        <li>Email/SMS/push integrations (where applicable)</li>
        <li>Camera + motion + alert chaining</li>
      </ul>
    </Card>

    <Card>
      <h2>Custom Firmware &amp; Device Management</h2>
      <p>
        We write and maintain the firmware: connectivity, sensor drivers, reliability logic, and secure update strategy.
        Your devices stay stable, and improvements roll out safely over time.
      </p>
      <p class="muted">
        Includes: device identity, configuration profiles, versioning, and support for future expansion.
      </p>
    </Card>

    <Card>
      <h2>Enclosures, Assembly &amp; Deployment</h2>
      <p>
        We assemble hardware in-house — soldering, wiring, and field-ready packaging — plus custom 3D printed enclosures
        built for your installation environment.
      </p>
      <ul class="bullets">
        <li>Prototype → production-ready iterations</li>
        <li>Mounting options and cable management</li>
        <li>Environmental considerations (where needed)</li>
        <li>Deployment and long-term maintenance</li>
      </ul>
    </Card>

  </div>

  <!-- ========================= -->
  <!-- EXAMPLES (FULL WIDTH)     -->
  <!-- ========================= -->
  <div class="full-width">
    <Card>
      <div class="full-content">
        <h2 class="full-title">Example IoT Builds</h2>
        <p class="full-text">
          Here are common system patterns we deliver (each can be tailored to your environment, sensors, UI style, and workflow):
        </p>

        <div class="example-grid">
          <div class="example">
            <h3 class="example-title">Environmental Monitoring</h3>
            <p class="example-text">
              Temperature/humidity/air-quality nodes with alert thresholds, trend charts, and a dashboard view.
              Optional on-device TFT display for local readout.
            </p>
          </div>

          <div class="example">
            <h3 class="example-title">Asset Tracking + Status</h3>
            <p class="example-text">
              Tag or device-based tracking with check-in/out workflows, location/zone monitoring,
              and operational dashboards for small teams.
            </p>
          </div>

          <div class="example">
            <h3 class="example-title">Security + Motion + Alerts</h3>
            <p class="example-text">
              Motion sensors tied to alert rules, camera triggers, and event logs —
              built for practical small business security.
            </p>
          </div>

          <div class="example">
            <h3 class="example-title">Equipment Telemetry</h3>
            <p class="example-text">
              Track equipment state, usage cycles, and downtime events. Create simple “green/yellow/red” views
              and alerts when patterns drift.
            </p>
          </div>
        </div>

      </div>
    </Card>
  </div>

  <!-- ========================= -->
  <!-- CTA (FULL WIDTH)          -->
  <!-- ========================= -->
  <div class="full-width">
    <Card>
      <div class="cta-row">
        <div class="cta-text">
          <h2 class="cta-title">Want a custom IoT system scoped?</h2>
          <p class="cta-sub">
            Tell us what you want to monitor, what actions you want to trigger, and where it needs to run (local, cloud, or hybrid).
            We’ll reply with a practical plan and clear next steps.
          </p>
        </div>

        <div class="cta-actions">
          <a href="/contacts" class="primary-btn">Start a Conversation</a>
          <a href="/projects" class="secondary-btn">Browse Examples</a>
        </div>
      </div>
    </Card>
  </div>

</div>

<style>
.page-layout {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ========================= */
/* BANNER                    */
/* ========================= */

.banner-row {
  width: 100%;
}

/* ========================= */
/* HERO + SIDE PANELS        */
/* ========================= */

.top-row {
  display: grid;
  gap: 2rem;
}

@media (min-width: 1100px) {
  .top-row {
    grid-template-columns: 1.4fr 0.8fr;
    align-items: stretch;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.hero-sub {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.8);
  max-width: 900px;
  line-height: 1.6;
  margin: 0;
}

.hero-note {
  margin: 0;
  color: rgba(255,255,255,0.75);
  line-height: 1.6;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.6rem;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.03);
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.primary-btn {
  background: #ffffff;
  color: #111;
  padding: 0.75rem 1.5rem;
  border-radius: 0.6rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255,255,255,0.15);
}

.secondary-btn {
  border: 1px solid rgba(255,255,255,0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  color: #eee;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.secondary-btn:hover {
  border-color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.05);
}

.data-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mini-panel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mini-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.mini-text {
  margin: 0;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
}

/* ========================= */
/* SECTION HEADER CARD       */
/* ========================= */

.section-hero {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-title {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
}

.section-sub {
  margin: 0;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  max-width: 950px;
}

/* ========================= */
/* CARD GRID                 */
/* ========================= */

.card-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 900px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.muted {
  color: rgba(255,255,255,0.75);
  margin-top: 0.75rem;
  line-height: 1.6;
}

.bullets {
  margin: 0.75rem 0 0 1.1rem;
  padding: 0;
  display: grid;
  gap: 0.4rem;
  color: rgba(255,255,255,0.85);
}

/* ========================= */
/* FULL WIDTH                */
/* ========================= */

.full-width {
  width: 100%;
}

.full-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.full-title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
}

.full-text {
  margin: 0;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  max-width: 1000px;
}

/* Example blocks inside full-width card */
.example-grid {
  margin-top: 0.75rem;
  display: grid;
  gap: 1rem;
}

@media (min-width: 900px) {
  .example-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

.example {
  border: 1px solid rgba(255,255,255,0.10);
  border-radius: 0.8rem;
  padding: 1rem 1.1rem;
  background: rgba(255,255,255,0.03);
}

.example-title {
  margin: 0 0 0.35rem 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.example-text {
  margin: 0;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
}

/* ========================= */
/* CTA ROW                   */
/* ========================= */

.cta-row {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .cta-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

.cta-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cta-title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.2;
}

.cta-sub {
  margin: 0;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  max-width: 900px;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>