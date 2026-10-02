<script setup lang="ts">
import { experience } from '~/data/profile'
</script>

<template>
  <section id="experience" class="min-w-0 grid sm:grid-cols-[12rem_1fr]" aria-labelledby="exp-title">
    <h2 id="exp-title" class="flex items-center gap-2 border-b-2 border-ink bg-pink px-6 py-5 font-display text-lg uppercase sm:border-b-0 sm:border-r-2">
      Experience <Icon name="lucide:arrow-right" size="16" aria-hidden="true" />
    </h2>
    <div class="p-6 sm:p-8">
      <ol class="relative flex flex-col gap-8 border-l-4 border-ink pl-6">
        <li v-for="e in experience" :key="e.role + e.company" class="relative">
          <span class="absolute -left-[2.15rem] top-1.5 size-3 rounded-full bg-ink" aria-hidden="true" />
          <div class="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 class="text-xs font-bold uppercase">
              {{ e.role }} <span class="text-violet" aria-hidden="true">&bull;</span> {{ e.company }}
            </h3>
            <p class="text-[11px] font-bold">{{ e.period }}</p>
          </div>
          <ul class="mt-2 flex list-disc flex-col gap-1.5 pl-4 text-xs leading-relaxed marker:text-violet">
            <li v-for="pt in e.points" :key="pt">{{ pt }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
