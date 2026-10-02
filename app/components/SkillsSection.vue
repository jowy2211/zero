<script setup lang="ts">
import { skills } from '~/data/profile'
</script>

<template>
  <section id="skills" class="flex flex-col border-y-2 border-ink sm:flex-row" aria-labelledby="skills-title">
    <h2 id="skills-title" class="flex items-center gap-2 border-b-2 border-ink bg-violet px-6 py-5 font-display text-lg uppercase text-white sm:w-48 sm:shrink-0 sm:border-b-0 sm:border-r-2">
      Skills <Icon name="lucide:arrow-right" size="16" aria-hidden="true" />
    </h2>
    <ul class="grid flex-1 grid-cols-3 gap-y-6 bg-paper px-4 py-6 sm:grid-cols-6">
      <li v-for="s in skills" :key="s.name" class="flex flex-col items-center gap-2 text-[11px] font-bold">
        <Icon :name="s.icon" size="32" aria-hidden="true" />
        {{ s.name }}
      </li>
    </ul>
  </section>
</template>
