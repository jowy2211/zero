<script setup lang="ts">
defineProps<{ art: 'cloud' | 'burst' | 'grid' }>()
</script>

<template>
  <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" class="size-full" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
    <rect width="600" height="260" fill="#f4f2ee" />
    <g v-if="art === 'cloud'" stroke="#0a0a0a" stroke-width="8" stroke-linejoin="round">
      <path d="M0 130 90 40l50 0-80 90z" fill="#f08a24" />
      <path d="M110 200c-30-5-40-45-10-60 5-35 50-45 80-25 15-30 70-30 85 5 40-5 65 25 50 50 10 15 0 30-20 30z" fill="#69a9d6" />
      <text x="330" y="280" font-family="Archivo Black, Arial Black, sans-serif" font-size="150" fill="#0a0a0a" stroke="none">24°C</text>
    </g>
    <g v-else-if="art === 'burst'" stroke="#0a0a0a" stroke-width="8" stroke-linejoin="round">
      <path d="m300 20 35 60 65-30 5 70 70 5-30 60 60 40-65 30 20 65H300l-120 0 20-65-65-30 60-40-30-60 70-5 5-70 65 30z" fill="#ff5a2c" transform="translate(0 -10) scale(1 .95)" />
      <circle cx="300" cy="135" r="48" fill="#c4f14d" />
    </g>
    <g v-else stroke="#0a0a0a" stroke-width="8" stroke-linejoin="round">
      <rect x="70" y="40" width="130" height="180" fill="#ffdb58" />
      <rect x="235" y="40" width="130" height="85" fill="#7ee8f5" />
      <rect x="235" y="135" width="130" height="85" fill="#ff7a9c" />
      <rect x="400" y="40" width="130" height="180" fill="#c4f14d" />
    </g>
  </svg>
</template>
