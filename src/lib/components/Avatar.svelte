<script>
  export let src = '';           // URL of the avatar image
  export let name = '';          // Full name, used for initials if no image
  export let size = '48px';      // Size of the avatar
  export let alt = 'Avatar';     // Alt text
  export let rounded = true;     // Fully rounded or slightly rounded
</script>

<div
  class="avatar"
  style="width: {size}; height: {size}; border-radius: {rounded ? '50%' : '8px'};"
  title={name || alt}
>
  {#if src}
    <img src={src} alt={alt} />
  {:else if name}
    <span class="initials">{name.split(' ').map(n => n[0]).join('').toUpperCase()}</span>
  {:else}
    <span class="fallback">👤</span>
  {/if}
</div>

<style>
  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-color, #333); /* follows your theme */
    color: var(--text-color, #eee);
    font-weight: bold;
    font-size: calc({size} / 2);
    overflow: hidden;
    user-select: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .initials, .fallback {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
