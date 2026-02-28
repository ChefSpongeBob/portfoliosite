<!-- src/routes/contacts/+page.svelte -->
<script lang="ts">
  import Card from '$lib/components/Card.svelte';
</script>

<div class="page-layout">

  <!-- ========================= -->
  <!-- CONTACT HERO              -->
  <!-- ========================= -->
  <div class="top-row">
    <div class="hero-column">
      <Card>
        <div class="hero-content">
          <h1 class="hero-title">Get in Touch</h1>

          <p class="hero-sub">
            Want to modernize your business with secure, practical tech that actually works together?
            Send a message and we’ll respond with next steps — clear, local, and no pressure.
          </p>

          <div class="hero-cta">
            <a href="mailto:hello@cnexus.example" class="primary-btn">Email Us</a>
            <a href="/projects" class="secondary-btn">View Projects</a>
          </div>

          <p class="hero-note">
            <strong>Note:</strong> For confidentiality, avoid sending sensitive credentials.
            If we need secure access details, we’ll provide a safe method after initial contact.
          </p>
        </div>
      </Card>
    </div>

    <aside class="data-column">
      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Typical Response Time</h2>
          <p class="mini-text">
            1–2 business days for new inquiries. Existing clients get priority support.
          </p>
        </div>
      </Card>

      <Card>
        <div class="mini-panel">
          <h2 class="mini-title">Montana Owned &amp; Operated</h2>
          <p class="mini-text">
            Local faces, direct communication, and systems built for real business operations.
          </p>
        </div>
      </Card>
    </aside>
  </div>

  <!-- ========================= -->
  <!-- CONTACT OPTIONS GRID      -->
  <!-- ========================= -->
  <div class="card-grid">

    <Card>
      <h2>Sales</h2>
      <p>
        Need a quote or want to discuss a new build? We’ll help scope your project, clarify requirements,
        and recommend the most practical approach.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:sales@cnexus.example">Email Sales</a>
      </div>
      <p class="muted">Good for: new systems, expansions, upgrades, and consultations.</p>
    </Card>

    <Card>
      <h2>Inquiries</h2>
      <p>
        Not sure where to start? Send your goals, constraints, and timeline. We’ll point you in the right direction
        and suggest options that fit your business.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:inquiries@cnexus.example">General Inquiry</a>
      </div>
      <p class="muted">Good for: “can you build this?” questions, feasibility, quick guidance.</p>
    </Card>

    <Card>
      <h2>Pricing</h2>
      <p>
        We keep pricing transparent and project-based. After a quick scope, we’ll provide a clear estimate
        with deliverables, milestones, and support options.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:pricing@cnexus.example">Ask About Pricing</a>
      </div>
      <p class="muted">Includes: build cost, deployment options, and ongoing maintenance tiers.</p>
    </Card>

    <Card>
      <h2>Support</h2>
      <p>
        Existing client? We provide ongoing monitoring, maintenance, firmware updates, and secure troubleshooting.
        If something’s down, we treat it like it matters — because it does.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:support@cnexus.example">Contact Support</a>
      </div>
      <p class="muted">Tip: include system name, what changed, and any error details.</p>
    </Card>

    <Card>
      <h2>FAQs</h2>
      <p>
        Answers to common questions about what we build, how deployments work, typical timelines, and what support
        looks like after launch.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="/faq">View FAQs</a>
      </div>
      <p class="muted">If you don’t see it listed, message us — we’ll clarify fast.</p>
    </Card>

    <Card>
      <h2>Resources</h2>
      <p>
        Documentation, onboarding notes, and helpful guides for clients — including how-to steps for dashboards,
        device maintenance, and secure access best practices.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="/resources">Open Resources</a>
      </div>
      <p class="muted">Optional: link to a client portal if you have one.</p>
    </Card>

    <Card>
      <h2>Service &amp; Maintenance</h2>
      <p>
        Prefer a “set it and forget it” plan? We offer monitoring, patching, backups, performance tuning,
        and proactive improvements to keep systems stable over time.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:services@cnexus.example">Maintenance Plans</a>
      </div>
      <p class="muted">Ideal for: IoT fleets, dashboards, security systems, and business-critical apps.</p>
    </Card>

    <Card>
      <h2>Security &amp; Confidentiality</h2>
      <p>
        We operate with strict confidentiality policies and zero data sharing. If you need a security-first build
        (network segmentation, hardened deployments, audit trails), we can scope that from day one.
      </p>
      <div class="card-actions">
        <a class="secondary-btn" href="mailto:security@cnexus.example">Security Inquiry</a>
      </div>
      <p class="muted">We’ll recommend controls appropriate for your risk level and budget.</p>
    </Card>

  </div>

  <!-- ========================= -->
  <!-- BOTTOM CTA                -->
  <!-- ========================= -->
  <div class="full-width">
    <Card>
      <div class="cta-row">
        <div class="cta-text">
          <h2 class="cta-title">Ready to talk scope?</h2>
          <p class="cta-sub">
            Send a quick message with what you’re trying to solve. We’ll reply with questions,
            next steps, and a practical plan.
          </p>
        </div>
        <div class="cta-actions">
          <a href="mailto:hello@cnexus.example" class="primary-btn">Email Us</a>
          <a href="/dashboard" class="secondary-btn">See What’s Possible</a>
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
/* HERO ROW                  */
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

.card-actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* ========================= */
/* BOTTOM CTA                */
/* ========================= */

.full-width {
  width: 100%;
}

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