<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import Card from '$lib/components/Card.svelte';

  const homeSlides = [
    {
      src: "/images/carousel/home-1.webp",
      alt: "Operations dashboard",
      title: "CharlottesNexus Control Plane",
      caption: "IoT telemetry + security-first visibility."
    },
    {
      src: "/images/carousel/home-2.webp",
      alt: "IoT sensors and hardware",
      title: "Real-Time Device Signals",
      caption: "Capture readings, chart trends, spot anomalies."
    },
    {
      src: "/images/carousel/home-3.webp",
      alt: "Network security visualization",
      title: "Security Built In",
      caption: "Practical controls designed for small businesses."
    }
  ];
</script>

<div class="page-layout">

  <!-- ========================= -->
  <!-- TOP BANNER (CAROUSEL)     -->
  <!-- ========================= -->
  <div class="banner-row">
    <Carousel slides={homeSlides} interval={8000} />
  </div>

  <!-- ========================= -->
  <!-- ABOUT / WHAT WE DO (HERO) -->
  <!-- ========================= -->
  <div class="top-row">
    <div class="hero-column">
      <Card>
        <div class="hero-content">
          <h1 class="hero-title">
            About CharlottesNexusByNNS
          </h1>

          <p class="hero-sub">
            Founded in 2026 in Montana, <strong>CharlottesNexusByNNS</strong> is a locally owned micro-technology
            company built on a simple principle: powerful technology should be practical, secure, and accessible
            to small businesses.
          </p>

          <p class="hero-sub">
            We specialize in full-stack IoT and system development — designing, building, deploying, and maintaining
            complete technology ecosystems tailored to your needs. From custom asset tracking systems and
            environmental monitoring solutions to security integrations with cameras, motion sensors, and real-time
            alerts, we build solutions that work in the real world — not just on paper.
          </p>

          <div class="hero-cta">
            <a href="/contacts" class="primary-btn">Talk to Us</a>
            <a href="/projects" class="secondary-btn">View Projects</a>
          </div>
        </div>
      </Card>
    </div>

    <aside class="data-column">
      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Local • Secure • Built End-to-End</h2>
          <p class="mini-text">
            We don’t outsource critical pieces. We design the system, build the hardware,
            write the software, deploy the infrastructure, and maintain it over time.
          </p>
        </div>
      </Card>

      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Strict Confidentiality</h2>
          <p class="mini-text">
            Zero data sharing. Strong security practices. Your business data stays yours — always.
          </p>
        </div>
      </Card>
    </aside>
  </div>

  <!-- ========================= -->
  <!-- WHAT WE DO (CARD GRID)    -->
  <!-- ========================= -->
  <div class="section-header">
    <Card>
      <div class="section-hero">
        <h2 class="section-title">What We Do</h2>
        <p class="section-sub">
          We design and engineer complete technology ecosystems — not just apps, not just hardware,
          but fully integrated systems that work together securely and reliably.
        </p>
      </div>
    </Card>
  </div>

  <div class="card-grid">

    <Card>
      <h2>IoT Device Development &amp; Sensor Engineering</h2>
      <p>
        We develop custom IoT devices tailored to your operational needs. From environmental monitoring
        (temperature, humidity, air quality) to asset tracking, motion detection, and real-time alert
        systems, every device is engineered for durability, reliability, and long-term performance.
      </p>
      <p class="muted">
        Sensor logic, communication protocols, and secure data transmission are designed from the ground
        up to ensure consistent operation in real-world conditions.
      </p>
    </Card>

    <Card>
      <h2>Custom System Architecture &amp; Infrastructure</h2>
      <p>
        Technology is only as strong as the system behind it. We design secure, scalable backend
        architecture that supports growth, uptime, and performance — from APIs and databases to servers
        and deployment strategy.
      </p>
      <ul class="bullets">
        <li>Database + API design</li>
        <li>Cloud or localized server deployments</li>
        <li>Performance optimization &amp; uptime planning</li>
        <li>Maintainable, future-proof structure</li>
      </ul>
    </Card>

    <Card>
      <h2>Full-Stack Web &amp; Application Development</h2>
      <p>
        We create dashboards, monitoring platforms, admin portals, and workflow systems that make your
        technology easy to use — clean interfaces powered by solid backend logic.
      </p>
      <p class="muted">
        Applications can be built for iOS, Android, web-based platforms, or localized systems with integrated
        TFT GUI screens — depending on your environment and workflow.
      </p>
    </Card>

    <Card>
      <h2>Deployment, Monitoring &amp; Maintenance</h2>
      <p>
        We don’t hand you a system and disappear. We deploy securely, monitor reliability, and maintain systems
        over time — updates, fixes, firmware improvements, scaling, and security patching included.
      </p>
      <ul class="bullets">
        <li>Secure production deployment</li>
        <li>Ongoing monitoring &amp; health checks</li>
        <li>Firmware and system updates</li>
        <li>Security patching &amp; performance tuning</li>
      </ul>
    </Card>

    <Card>
      <h2>Hardware Assembly &amp; Custom Fabrication</h2>
      <p>
        Unlike many development firms, we don’t outsource hardware. We physically assemble boards, solder components,
        configure microcontrollers, and 3D print custom enclosures in-house.
      </p>
      <p class="muted">
        From prototype to deployment-ready hardware, we manage the entire process with tight quality control and fast iteration.
      </p>
    </Card>

    <Card>
      <h2>Integrated Business Solutions</h2>
      <p>
        Our systems are built around your workflow, not the other way around — integrated sensors, dashboards, alerts, and
        security into a single dependable system that reduces overhead and increases operational clarity.
      </p>
      <ul class="bullets">
        <li>Asset tracking systems</li>
        <li>Environmental monitoring platforms</li>
        <li>Camera, motion &amp; alert integrations</li>
        <li>Custom automation workflows</li>
      </ul>
    </Card>

  </div>

  <!-- ========================= -->
  <!-- SECURITY (FULL-WIDTH)     -->
  <!-- ========================= -->
  <div class="full-width">
    <Card>
      <div class="full-content">
        <h2 class="full-title">Security-Focused by Design</h2>
        <p class="full-text">
          With certifications in Cybersecurity (Google &amp; CompTIA), Front- and Back-End Development and Web Design
          (Microsoft Certified), and secure deployment practices, we prioritize protection at every level — from device
          firmware and network traffic to authentication and data storage.
        </p>
        <p class="full-text">
          We operate under strict confidentiality policies with zero data sharing. Your systems and your business data remain
          yours — always.
        </p>
      </div>
    </Card>
  </div>

  <!-- ========================= -->
  <!-- LOCAL / CTA (FULL-WIDTH)  -->
  <!-- ========================= -->
  <div class="full-width">
    <Card>
      <div class="cta-row">
        <div class="cta-text">
          <h2 class="full-title">Local. Personal. Built for Montana Businesses.</h2>
          <p class="full-text">
            As a Montana-owned and operated company, we keep communication direct and timelines clear. You won’t be routed
            through sales layers or outsourced support — you’ll work with the people building your system and maintaining it long-term.
          </p>
          <p class="full-text">
            Whether you need a custom monitoring system, a secure internal platform, or a fully integrated IoT solution designed
            from the ground up, CharlottesNexusByNNS delivers dependable technology with a personal touch.
          </p>
        </div>

        <div class="cta-actions">
          <a href="/contacts" class="primary-btn">Modernize My Business</a>
          <a href="/dashboard" class="secondary-btn">See What’s Possible</a>
        </div>
      </div>
    </Card>
  </div>

</div>

<style>
.page-layout {
  /* matches your baseline layout */
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
  max-width: 850px;
  line-height: 1.6;
  margin: 0;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
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
  max-width: 900px;
}

/* ========================= */
/* LOWER CARD GRID           */
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
/* FULL-WIDTH ROWS           */
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

/* CTA row inside card */
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
  gap: 0.75rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>