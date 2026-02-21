<script lang="ts">
  const year = new Date().getFullYear();

  // Boilerplate: you can wire this to a real endpoint later
  let email = "";
  let status: "idle" | "ok" | "error" = "idle";

  function submitNewsletter(e: Event) {
    e.preventDefault();

    // Placeholder behavior so it feels real in the UI:
    // - If empty -> error
    // - Otherwise -> ok and clear
    if (!email.trim()) {
      status = "error";
      return;
    }

    status = "ok";
    email = "";
    setTimeout(() => (status = "idle"), 2500);
  }
</script>

<!-- CHANGE: forward any attributes (including class) from parent -->
<footer class="footer" {...$$restProps}>
  <!-- glow + circuit layers (safe, non-fixed) -->
  <div class="fx fx-circuit" aria-hidden="true"></div>
  <div class="fx fx-glow" aria-hidden="true"></div>

  <div class="footer-inner">
    <!-- Brand / About -->
    <div class="footer-section brand">
      <div class="brand-top">
        <div class="logo">CharlottesNexus</div>

        <div class="status" title="Service status">
          <span class="dot" aria-hidden="true"></span>
          <span class="status-text">System Online</span>
        </div>
      </div>

      <p class="muted">
        Modern IoT, security-first systems, and SaaS-ready development built for small businesses scaling into connected operations.
      </p>

      <div class="badges">
        <span class="badge">
          <span class="material-icons">bolt</span>
          Edge-first
        </span>
        <span class="badge">
          <span class="material-icons">security</span>
          Security-minded
        </span>
        <span class="badge">
          <span class="material-icons">dashboard</span>
          Product-grade UI
        </span>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="footer-section newsletter">
      <h4>Newsletter</h4>
      <p class="muted small">
        Product updates, build notes, and new features. (No spam — just signal.)
      </p>

      <form class="newsletter-form" on:submit={submitNewsletter}>
        <input
          type="email"
          placeholder="you@company.com"
          bind:value={email}
          aria-label="Email address"
          autocomplete="email"
        />
        <button type="submit">Subscribe</button>
      </form>

      {#if status === "ok"}
        <div class="form-msg ok">
          <span class="material-icons">check_circle</span>
          Subscribed (placeholder).
        </div>
      {:else if status === "error"}
        <div class="form-msg err">
          <span class="material-icons">error</span>
          Please enter an email.
        </div>
      {/if}

      <div class="hint">
        <span class="material-icons">lock</span>
        Your email stays private.
      </div>
    </div>

    <!-- Company -->
    <div class="footer-section">
      <h4>Company</h4>
      <ul>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/saas">SaaS Development</a></li>
        <li><a href="/iot">IoT</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <!-- Legal -->
    <div class="footer-section">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Security</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© {year} CharlottesNexus. All rights reserved.</span>
    <span class="made">Built with VSC/GITHUB/CLOUDFLARE</span>
  </div>
</footer>

<style>
  .footer {
    position: relative;
    margin-top: 3rem;
    border-top: 1px solid rgba(255,255,255,0.06);
    background: rgba(10,10,10,0.72);
    backdrop-filter: blur(8px);
    overflow: hidden;
  }

  /* FX layers */
  .fx {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle circuit overlay (uses your existing tile) */
  .fx-circuit {
    background-image: url("/images/circuit-traces.webp");
    background-repeat: repeat;
    background-size: 720px;
    opacity: 0.08;
    filter: contrast(1.05);
    mix-blend-mode: screen;
  }

  /* Soft glow wash (purple + cyan) */
  .fx-glow {
    background:
      radial-gradient(900px 600px at 15% 15%, var(--glow-a), transparent 65%),
      radial-gradient(1100px 800px at 85% 70%, var(--glow-b), transparent 70%);
    opacity: 0.85;
  }

  .footer-inner {
    position: relative;
    z-index: 1;

    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 2rem 1.75rem;
    display: grid;
    grid-template-columns: 2fr 1.3fr 1fr 1fr;
    gap: 2rem;
  }

  .footer-section h4 {
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: color 0.15s ease;
  }
  .footer-section a:hover {
    color: var(--color-primary);
  }

  /* Brand */
  .brand-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  .logo {
    font-weight: 900;
    font-size: 1.1rem;
    letter-spacing: 0.02em;
    color: rgba(255,255,255,0.92);
  }

  .muted {
    color: rgba(255,255,255,0.55);
    line-height: 1.5;
    font-size: 0.92rem;
    margin: 0;
  }
  .muted.small {
    font-size: 0.88rem;
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(0,0,0,0.22);
    color: rgba(255,255,255,0.72);
    font-size: 0.82rem;
    white-space: nowrap;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(80, 255, 160, 0.85);
    box-shadow: 0 0 10px rgba(80, 255, 160, 0.35);
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 0.85rem;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(0,0,0,0.20);
    color: rgba(255,255,255,0.72);
    font-size: 0.82rem;
  }

  .badge :global(.material-icons) {
    font-size: 16px;
    color: rgba(161,58,170,0.95);
    filter: drop-shadow(0 0 8px rgba(161,58,170,0.25));
  }

  /* Newsletter */
  .newsletter-form {
    display: flex;
    gap: 0.6rem;
    margin-top: 0.75rem;
  }

  .newsletter-form input {
    flex: 1;
    background: rgba(0,0,0,0.28);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 12px;
    padding: 0.55rem 0.75rem;
    color: rgba(255,255,255,0.9);
    outline: none;
    min-width: 0;
  }

  .newsletter-form input:focus {
    border-color: rgba(161,58,170,0.45);
    box-shadow: 0 0 0 1px rgba(161,58,170,0.14);
  }

  .newsletter-form button {
    padding: 0.55rem 0.85rem;
    border-radius: 12px;
    font-weight: 800;
  }

  .form-msg {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: 0.65rem;
    font-size: 0.88rem;
  }
  .form-msg.ok {
    color: rgba(120, 255, 180, 0.75);
  }
  .form-msg.err {
    color: rgba(255, 120, 120, 0.75);
  }

  .form-msg :global(.material-icons) {
    font-size: 18px;
  }

  .hint {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.65rem;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.48);
  }
  .hint :global(.material-icons) {
    font-size: 16px;
    opacity: 0.85;
  }

  /* Bottom bar */
  .footer-bottom {
    position: relative;
    z-index: 1;

    border-top: 1px solid rgba(255,255,255,0.05);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.5);
    gap: 0.75rem;
  }

  .made {
    opacity: 0.7;
  }

  @media (max-width: 980px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }
    .brand-top {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 640px) {
    .footer-inner {
      grid-template-columns: 1fr;
      padding: 1.75rem 1.25rem 1.25rem;
    }
    .footer-bottom {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
      padding: 1rem 1.25rem;
    }
    .newsletter-form {
      flex-direction: column;
    }
  }
</style>