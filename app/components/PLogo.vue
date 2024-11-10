<template>
  <svg role="img" viewBox="0 0 100 60" aria-hidden="true">
    <defs>
      <linearGradient id="gradient" x1="16.15" y1="10.45" x2="83.85" y2="49.55" gradientUnits="userSpaceOnUse">
        <stop class="logo--gradient1" offset=".1" />
        <stop class="logo--gradient2" offset=".9" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gradient)"
      d="M100 7.42v.08C100 36.49 76.49 60 47.5 60V45c18.11 0 33.26-12.9 36.75-30H60.5V0h31.94C96.56 0 100 3.3 100 7.42M52.5 23c-10.41 0-19.82 5.52-25.09 14H47.5c10.41 0 19.82-5.52 25.09-14zM7.56 60H39.5V45H15.75c3.49-17.1 18.64-30 36.75-30V0C23.51 0 0 23.51 0 52.5v.08C0 56.7 3.44 60 7.56 60"
    />
  </svg>
</template>

<style lang="scss">
.logo {
  &--gradient1 {
    stop-color: var(--c-primary-alt);
  }

  &--gradient2 {
    stop-color: var(--c-primary);
  }
}
</style>
