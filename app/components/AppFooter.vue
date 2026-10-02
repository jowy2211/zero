<script setup lang="ts">
import { profile } from '~/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="flex flex-col items-stretch border-t-2 border-ink sm:flex-row">
    <div class="flex items-center gap-2 border-b-2 border-ink bg-lime px-6 py-4 text-xs font-bold sm:border-b-0 sm:border-r-2">
      <Icon name="lucide:code-xml" size="16" aria-hidden="true" />
      {{ profile.handle }}
    </div>
    <p class="flex flex-1 items-center justify-center px-4 py-4 text-center text-[11px]">
      &copy; {{ year }} {{ profile.fullName }}. All rights reserved.
    </p>
    <SocialLinks class="border-t-2 border-ink px-6 py-3 sm:border-l-2 sm:border-t-0" />
  </footer>
</template>
