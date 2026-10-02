<script setup lang="ts">
defineProps<{ art: 'grid' | 'burst' | 'circles' | 'stripes' }>()
</script>

<template>
  <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="size-full" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
    <rect width="600" height="260" fill="#f4f2ee" />
    <g stroke="#0a0a0a" stroke-width="8" stroke-linejoin="round">
      <template v-if="art === 'grid'">
        <rect x="70" y="40" width="130" height="180" fill="#ffdb58" />
        <rect x="235" y="40" width="130" height="85" fill="#7ee8f5" />
        <rect x="235" y="135" width="130" height="85" fill="#ff7a9c" />
        <rect x="400" y="40" width="130" height="180" fill="#c4f14d" />
      </template>
      <template v-else-if="art === 'burst'">
        <path d="m300 15 38 62 68-32 6 72 72 6-32 62 62 40-68 30 22 68H300H170l22-68-68-30 62-40-32-62 72-6 6-72 68 32z" fill="#ff5a2c" transform="translate(0 0) scale(1 .92)" />
        <circle cx="300" cy="125" r="46" fill="#c4f14d" />
      </template>
      <template v-else-if="art === 'circles'">
        <circle cx="170" cy="130" r="80" fill="#c4a1ff" />
        <circle cx="300" cy="130" r="80" fill="#ffdb58" />
        <circle cx="430" cy="130" r="80" fill="#7ee8f5" />
      </template>
      <template v-else>
        <path d="M0 60h600v40H0z" fill="#ff7a9c" />
        <path d="M0 120h600v40H0z" fill="#6c4cf5" />
        <path d="M0 180h600v40H0z" fill="#c4f14d" />
        <path d="m80 40 70 180h-60z" fill="#ffdb58" />
      </template>
    </g>
  </svg>
</template>
