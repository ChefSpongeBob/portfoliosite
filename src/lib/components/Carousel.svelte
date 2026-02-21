<script>
  import { onMount, onDestroy } from "svelte";

  /**
   * slides can be:
   *  - string (image src)
   *  - object: { src, alt, title?, caption? }
   *  - Svelte content (component/markup)
   */
  export let slides = [];
  export let interval = 0; // ms, 0 disables autoplay

  let current = 0;
  let timer;

  let startX = 0;
  let moveX = 0;
  let isDragging = false;

  const clampIndex = (i) => {
    const n = slides?.length ?? 0;
    if (n === 0) return 0;
    return (i + n) % n;
  };

  const next = () => (current = clampIndex(current + 1));
  const prev = () => (current = clampIndex(current - 1));
  const goTo = (index) => (current = clampIndex(index));

  const stopAutoplay = () => {
    if (timer) clearInterval(timer);
    timer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if ((slides?.length ?? 0) > 1 && interval > 0) {
      timer = setInterval(next, interval);
    }
  };

  const beginDrag = (clientX) => {
    if ((slides?.length ?? 0) <= 1) return;
    startX = clientX;
    moveX = 0;
    isDragging = true;
    stopAutoplay();
  };

  const dragMove = (clientX) => {
    if (!isDragging) return;
    moveX = clientX - startX;
  };

  const endDrag = () => {
    if (!isDragging) return;

    if (moveX < -50) next();
    else if (moveX > 50) prev();

    isDragging = false;
    moveX = 0;
    startAutoplay();
  };

  // Touch
  const handleTouchStart = (e) => beginDrag(e.touches[0].clientX);
  const handleTouchMove = (e) => dragMove(e.touches[0].clientX);
  const handleTouchEnd = () => endDrag();

  // Mouse / pointer (desktop)
  const handleMouseDown = (e) => {
    // left click only
    if (e.button !== 0) return;
    beginDrag(e.clientX);
  };
  const handleMouseMove = (e) => dragMove(e.clientX);
  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => endDrag();

  // Keep current index valid if slides change
  $: {
    const n = slides?.length ?? 0;
    if (n === 0) current = 0;
    else if (current >= n) current = n - 1;
  }

  onMount(() => {
    startAutoplay();
  });

  onDestroy(() => stopAutoplay());

  const isImageObject = (slide) =>
    slide && typeof slide === "object" && typeof slide.src === "string";
</script>

<div
  class="carousel card"
  aria-roledescription="carousel"
  on:mouseenter={stopAutoplay}
  on:mouseleave={startAutoplay}
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
  on:mousedown={handleMouseDown}
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
  on:mouseleave={handleMouseLeave}
>
  {#if (slides?.length ?? 0) === 0}
    <div class="empty">No slides configured.</div>
  {:else}
    <div
      class="slides"
      style="
        transform: translateX(calc(-{current * 100}% + {moveX}px));
        transition: {isDragging ? 'none' : 'transform 0.45s ease'};
      "
    >
      {#each slides as slide, i (i)}
        <div class="slide" aria-hidden={i !== current}>
          {#if typeof slide === "string"}
            <div class="media">
              <img src={slide} alt={`Slide ${i + 1}`} loading="lazy" decoding="async" />
            </div>

          {:else if isImageObject(slide)}
            <div class="media">
              <img src={slide.src} alt={slide.alt ?? `Slide ${i + 1}`} loading="lazy" decoding="async" />
              {#if slide.title || slide.caption}
                <div class="overlay">
                  {#if slide.title}<div class="title">{slide.title}</div>{/if}
                  {#if slide.caption}<div class="caption">{slide.caption}</div>{/if}
                </div>
              {/if}
            </div>

          {:else}
            <div class="slot-slide">
              {slide}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    {#if slides.length > 1}
      <button class="prev" type="button" on:click={prev} aria-label="Previous slide">
        <span class="material-icons">chevron_left</span>
      </button>
      <button class="next" type="button" on:click={next} aria-label="Next slide">
        <span class="material-icons">chevron_right</span>
      </button>

      <div class="dots" aria-label="Slide navigation">
        {#each slides as _, i (i)}
          <button
            type="button"
            class="dot"
            class:active={i === current}
            on:click={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        {/each}
      </div>
    {/if}
  {/if}
</div>

<style>
  /* Uses your global .card, but we want edge-to-edge media */
  .carousel {
    position: relative;
    overflow: hidden;
    max-width: 900px;
    margin: 0 auto;
    padding: 0; /* override .card padding */
    border-radius: 14px;
    background: rgba(18,18,18,0.75);
    border: 1px solid rgba(255,255,255,0.08);
  }

  .slides {
    display: flex;
    will-change: transform;
  }

  .slide {
    min-width: 100%;
    user-select: none;
  }

  .media {
    position: relative;
    height: 340px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    /* subtle "cinematic" polish */
    filter: saturate(1.05) contrast(1.06);
  }

  .overlay {
    position: absolute;
    inset: auto 0 0 0;
    padding: 1rem 1.1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0));
  }

  .title {
    font-weight: 800;
    letter-spacing: 0.02em;
    color: rgba(255,255,255,0.95);
  }

  .caption {
    margin-top: 0.25rem;
    color: rgba(255,255,255,0.70);
    font-size: 0.95rem;
  }

  .slot-slide {
    padding: 1.25rem;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(10,10,10,0.55);
    color: rgba(255,255,255,0.92);
    border: 1px solid rgba(255,255,255,0.10);
    padding: 0.4rem 0.65rem;
    font-size: 1.8rem;
    border-radius: 12px;
    cursor: pointer;
    z-index: 10;
    backdrop-filter: blur(10px);
    transition: transform 140ms ease, border-color 140ms ease, background-color 140ms ease;
  }

  .prev:hover,
  .next:hover {
    background: rgba(20,20,20,0.70);
    border-color: rgba(161,58,170,0.45);
    transform: translateY(-50%) translateY(-1px);
  }

  .prev { left: 10px; }
  .next { right: 10px; }

  .dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 0.85rem 0;
    background: rgba(8,8,8,0.65);
    border-top: 1px solid rgba(255,255,255,0.06);
    backdrop-filter: blur(10px);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.06);
    cursor: pointer;
    padding: 0;
    box-shadow: none;
  }

  .dot.active {
    background: rgba(161,58,170,0.65);
    border-color: rgba(161,58,170,0.85);
  }

  .empty {
    padding: 1rem;
    color: rgba(255,255,255,0.65);
  }

  @media (max-width: 767px) {
    .media { height: 260px; }
  }
</style>