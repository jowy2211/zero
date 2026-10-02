<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <ul class="flex items-center gap-3" aria-label="Social links">
    <li v-for="s in profile.socials" :key="s.label">
      <a
        :href="s.href"
        :aria-label="s.label"
        :target="s.href.startsWith('http') ? '_blank' : undefined"
        rel="noopener noreferrer me"
        class="flex size-9 items-center justify-center border-2 border-ink bg-white shadow-brutal-sm transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-lime hover:shadow-none"
      >
        <Icon :name="s.icon" size="16" aria-hidden="true" />
      </a>
    </li>
  </ul>
</template>
