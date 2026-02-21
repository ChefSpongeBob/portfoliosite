<script lang="ts">
  import Carousel from "$lib/components/Carousel.svelte";
  import Card from "$lib/components/Card.svelte";

  const saasSlides = [
    {
      src: "/images/saas/saas-1.webp",
      alt: "SaaS dashboard UI preview",
      title: "SaaS Dashboard",
      caption: "Reusable UI primitives + consistent patterns."
    },
    {
      src: "/images/saas/saas-2.webp",
      alt: "Team and analytics concept",
      title: "Teams + Analytics",
      caption: "Built to scale from a single admin to full teams."
    },
    {
      src: "/images/saas/saas-3.webp",
      alt: "Automation and integrations concept",
      title: "Automation & Integrations",
      caption: "Workflows that connect devices, alerts, and ops."
    }
  ];
</script>

<section class="saas-page">
  <!-- Top row: copy card (left) + carousel (right) -->
  <div class="top-grid">
    <Card>
      <div class="kicker">SaaS Development</div>
      <h1 class="title">Build the platform layer</h1>

      <p class="lead">
        This section tracks SaaS-focused development for CharlottesNexus—UI systems, multi-tenant readiness,
        user workflows, billing-ready structure, and product-grade polish.
      </p>

      <div class="bullets">
        <div class="bullet">
          <span class="material-icons">verified_user</span>
          <div>
            <div class="bullet-title">Account & Roles</div>
            <div class="bullet-text">Prepare for auth, roles, and permissioned views.</div>
          </div>
        </div>

        <div class="bullet">
          <span class="material-icons">dashboard</span>
          <div>
            <div class="bullet-title">Dashboard Patterns</div>
            <div class="bullet-text">Consistent cards, KPIs, layouts, and navigation flows.</div>
          </div>
        </div>

        <div class="bullet">
          <span class="material-icons">bolt</span>
          <div>
            <div class="bullet-title">Automation Hooks</div>
            <div class="bullet-text">Events + integrations layer for alerts and workflows.</div>
          </div>
        </div>
      </div>

      <div class="cta-row">
        <a class="cta primary" href="/iot">View IoT Dashboard</a>
        <a class="cta secondary" href="/contact">Talk to Us</a>
      </div>

      <div class="note">
        <span class="material-icons">info</span>
        <span>Boilerplate content for now — we’ll replace with real milestones as features land.</span>
      </div>
    </Card>

    <div class="carousel-wrap">
      <Carousel slides={saasSlides} interval={8000} />
    </div>
  </div>

  <!-- App Building card -->
  <Card title="App Building">
    <p class="muted">
      We build simple, ready-to-deploy applications custom tailored to enterprise operations — from kitchen efficiency
      software to security and hardware-enabled tooling.
    </p>

    <div class="app-grid">
      <div class="app-item">
        <span class="material-icons">restaurant</span>
        <div>
          <div class="app-title">Kitchen Efficiency Software</div>
          <div class="app-text">
            Staff workflows, prep tracking, timing, inventory touchpoints, and operational clarity — built to run fast and
            stay out of the way.
          </div>
        </div>
      </div>

      <div class="app-item">
        <span class="material-icons">shield</span>
        <div>
          <div class="app-title">Security + Hardware Apps</div>
          <div class="app-text">
            Dashboards and utilities that pair with devices: monitoring, alerts, visibility panels, and control surfaces
            designed for real operations.
          </div>
        </div>
      </div>

      <div class="app-item">
        <span class="material-icons">business</span>
        <div>
          <div class="app-title">Enterprise-Ready Deployments</div>
          <div class="app-text">
            Clean UI, role-friendly layouts, and maintainable foundations — so you can deploy quickly and extend safely
            over time.
          </div>
        </div>
      </div>
    </div>
  </Card>

  <!-- Bottom row: large info section -->
  <Card>
    <div class="detail-header">
      <h2>What “SaaS Development” covers</h2>
      <p class="muted">
        This is the productization track: taking the platform from “works” to “shippable,” including UX, structure,
        and future readiness (auth, billing, multi-tenant, audit logs, etc.).
      </p>
    </div>

    <div class="detail-grid">
      <div class="detail-block">
        <h3>Near-term focus</h3>
        <ul>
          <li>Homepage + feature pages with consistent components</li>
          <li>Design tokens and theme refinement</li>
          <li>Navigation + information architecture</li>
          <li>Reusable patterns (tables, empty states, alerts)</li>
        </ul>
      </div>

      <div class="detail-block">
        <h3>Platform readiness</h3>
        <ul>
          <li>Auth scaffolding (routes + protected layouts)</li>
          <li>Roles/permissions model (admin/operator/viewer)</li>
          <li>Tenant structure (orgs, sites, devices)</li>
          <li>Audit logs and activity feed design</li>
        </ul>
      </div>

      <div class="detail-block">
        <h3>Operational polish</h3>
        <ul>
          <li>Performance + caching strategy</li>
          <li>Error handling & user-safe messages</li>
          <li>Telemetry and observability hooks</li>
          <li>Deployment sanity checks</li>
        </ul>
      </div>
    </div>

    <div class="image-row">
      <figure class="shot">
        <img src="/images/saas/detail-1.webp" alt="SaaS detail visual 1" loading="lazy" decoding="async" />
        <figcaption>Example: dashboard layout + KPI tiles.</figcaption>
      </figure>

      <figure class="shot">
        <img src="/images/saas/detail-2.webp" alt="SaaS detail visual 2" loading="lazy" decoding="async" />
        <figcaption>Example: workflows + integrations overview.</figcaption>
      </figure>
    </div>
  </Card>
</section>

<style>
  .saas-page {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .top-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 1.25rem;
    align-items: stretch;
  }

  /* Make Carousel card align flush (your Card component should NOT have margin) */
  .carousel-wrap :global(.card) {
    margin: 0;
  }

  .kicker {
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.78rem;
  }

  .title {
    margin: 0.35rem 0 0.75rem 0;
    font-size: 1.65rem;
    letter-spacing: 0.01em;
  }

  .lead {
    margin: 0 0 1rem 0;
    color: rgba(255,255,255,0.78);
    line-height: 1.55;
  }

  .bullets {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1rem 0 1.1rem;
  }

  .bullet {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.75rem;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.18);
  }

  .bullet :global(.material-icons) {
    opacity: 0.9;
    color: rgba(161,58,170,0.95);
    font-size: 22px;
    margin-top: 2px;
  }

  .bullet-title {
    font-weight: 800;
    color: rgba(255,255,255,0.92);
  }

  .bullet-text {
    margin-top: 0.2rem;
    color: rgba(255,255,255,0.65);
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .cta-row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-top: 0.75rem;
  }

  .cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.55rem 0.9rem;
    border-radius: 12px;
    font-weight: 800;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(18,18,18,0.75);
    color: rgba(255,255,255,0.9);
    transition: transform 140ms ease, border-color 140ms ease, background-color 140ms ease;
  }

  .cta:hover {
    transform: translateY(-1px);
    border-color: rgba(161,58,170,0.45);
    background: rgba(26,26,26,0.85);
  }

  .cta.primary {
    border-color: rgba(161,58,170,0.35);
    box-shadow: 0 0 0 1px rgba(161,58,170,0.12);
  }

  .cta.secondary {
    opacity: 0.9;
  }

  .note {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 1rem;
    color: rgba(255,255,255,0.55);
    font-size: 0.92rem;
  }

  .note :global(.material-icons) {
    font-size: 18px;
    opacity: 0.85;
  }

  .muted {
    margin: 0;
    color: rgba(255,255,255,0.62);
    line-height: 1.55;
  }

  .app-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;
  }

  .app-item {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.85rem;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.18);
  }

  .app-item :global(.material-icons) {
    color: rgba(161,58,170,0.95);
    font-size: 22px;
    margin-top: 2px;
    filter: drop-shadow(0 0 10px rgba(161,58,170,0.18));
  }

  .app-title {
    font-weight: 900;
    color: rgba(255,255,255,0.92);
  }

  .app-text {
    margin-top: 0.2rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.45;
    font-size: 0.95rem;
  }

  .detail-header h2 {
    margin: 0 0 0.4rem 0;
    font-size: 1.25rem;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1.15rem;
  }

  .detail-block {
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.18);
    border-radius: 14px;
    padding: 1rem;
  }

  .detail-block h3 {
    margin: 0 0 0.6rem 0;
    font-size: 1.05rem;
  }

  .detail-block ul {
    margin: 0;
    padding-left: 1.1rem;
    color: rgba(255,255,255,0.7);
    line-height: 1.6;
  }

  .image-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1.15rem;
  }

  .shot {
    margin: 0;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(0,0,0,0.22);
  }

  .shot img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    filter: saturate(1.05) contrast(1.05);
  }

  .shot figcaption {
    padding: 0.75rem 0.85rem;
    color: rgba(255,255,255,0.62);
    font-size: 0.92rem;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  @media (max-width: 980px) {
    .top-grid {
      grid-template-columns: 1fr;
    }

    .app-grid {
      grid-template-columns: 1fr;
    }

    .detail-grid {
      grid-template-columns: 1fr;
    }

    .image-row {
      grid-template-columns: 1fr;
    }

    .shot img {
      height: 220px;
    }
  }
</style>