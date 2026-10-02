<script setup lang="ts">
import { education } from '~/data/profile'

const shades = ['bg-[#eeeeee]', 'bg-[#dcdcdc]', 'bg-[#c8c8c8]']
</script>

<template>
  <section id="education" class="flex min-w-0 flex-col gap-5 bg-lime p-6 sm:p-8" aria-labelledby="edu-title">
    <h2 id="edu-title" class="font-display text-xl uppercase">Education</h2>
    <ul class="flex flex-col gap-5">
      <li
        v-for="(e, i) in education"
        :key="e.title"
        class="brutal-card flex flex-col gap-1 p-5"
        :class="shades[i % shades.length]"
      >
        <h3 class="text-sm font-bold leading-snug">{{ e.title }}</h3>
        <p class="text-[11px] leading-relaxed">{{ e.program }}</p>
        <p class="mt-1 text-[11px] font-bold">{{ e.period }}</p>
      </li>
    </ul>
  </section>
</template>
