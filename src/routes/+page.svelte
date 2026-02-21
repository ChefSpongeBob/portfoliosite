<!-- src/routes/+page.svelte -->
<script lang="ts">
  import Graph from '$lib/components/Graph.svelte';
  import Gauge from '$lib/components/Gauge.svelte';
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
  <!-- TOP BANNER (CAROUSEL)    -->
  <!-- ========================= -->
  <div class="banner-row">
    <Carousel slides={homeSlides} interval={8000} />
  </div>

  <!-- ========================= -->
  <!-- HERO + LIVE DATA ROW     -->
  <!-- ========================= -->
  <div class="top-row">

    <!-- HERO -->
    <div class="hero-column">
      <Card>
        <div class="hero-content">
          <h1 class="hero-title">
            Your Business Should Run Like It’s 2026 — Not 2006.
          </h1>

          <p class="hero-sub">
            CharlottesNexus (Cnexus) designs and deploys secure, integrated
            technology systems for small businesses ready to modernize —
            IoT monitoring, cybersecurity, physical security, custom hardware,
            websites, and full-stack applications built to work together.
          </p>

          <div class="hero-cta">
            <a href="/contacts" class="primary-btn">Modernize My Business</a>
            <a href="/dashboard" class="secondary-btn">See What’s Possible</a>
          </div>
        </div>
      </Card>
    </div>

    <!-- LIVE DATA -->
    <aside class="data-column">
      <Graph />
      <Gauge />
    </aside>

  </div>

  <!-- ========================= -->
  <!-- LOWER CONTENT CARDS       -->
  <!-- ========================= -->
  <div class="card-grid">

    <Card>
      <h2>Dashboard</h2>
      <p>
        Real-time operational visibility, reporting systems, and centralized
        control interfaces built specifically for your business.
      </p>
    </Card>

    <Card>
      <h2>IoT Systems</h2>
      <p>
        Weather monitoring, environmental sensors, facility telemetry,
        equipment tracking — securely connected and intelligently deployed.
      </p>
    </Card>

    <Card>
      <h2>Projects</h2>
      <p>
        Custom hardware, integrated security systems, web platforms,
        and full-stack applications engineered from concept to deployment.
      </p>
    </Card>

    <Card>
      <h2>Contact</h2>
      <p>
        Ready to modernize? Let’s design a system that actually works
        together — securely, efficiently, and built for scale.
      </p>
    </Card>

  </div>

</div>

<style>
.page-layout {
  /* EDIT: removed per-page margin-left hack that conflicts with the 72px rail */
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
/* HERO + DATA               */
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
  gap: 1.5rem;
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
  max-width: 700px;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
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
</style>