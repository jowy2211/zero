<script setup lang="ts">
import { alsoWorkedWith, skillGroups } from '~/data/profile'

const barColor = (level: number) => (level >= 90 ? 'bg-violet' : level >= 65 ? 'bg-lime' : 'bg-pink')
</script>

<template>
  <section id="skills" class="flex flex-col border-y-2 border-ink sm:flex-row" aria-labelledby="skills-title">
    <h2
      id="skills-title"
      class="flex items-center gap-2 border-b-2 border-ink bg-violet px-6 py-5 font-display text-lg uppercase text-white sm:w-48 sm:shrink-0 sm:border-b-0 sm:border-r-2"
    >
      Skills <Icon name="lucide:arrow-right" size="16" aria-hidden="true" />
    </h2>
    <div class="grid min-w-0 flex-1 gap-8 bg-paper p-6 sm:p-8 lg:grid-cols-2">
      <div v-for="g in skillGroups" :key="g.title">
        <h3 class="mb-4 text-xs font-bold uppercase">{{ g.title }}</h3>
        <ul class="flex flex-col gap-4">
          <li v-for="s in g.items" :key="s.name">
            <div class="mb-1 flex items-center justify-between gap-2 text-[11px] font-bold">
              <span class="flex items-center gap-2">
                <Icon :name="s.icon" size="18" aria-hidden="true" /> {{ s.name }}
              </span>
              <span>{{ s.level }}%</span>
            </div>
            <div
              class="h-4 border-2 border-ink bg-white"
              role="meter"
              :aria-label="`${s.name} proficiency`"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-valuenow="s.level"
            >
              <div class="h-full border-r-2 border-ink" :class="barColor(s.level)" :style="{ width: `${s.level}%` }" />
            </div>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h3 class="mb-3 text-xs font-bold uppercase">Also worked with</h3>
        <ul class="flex flex-wrap gap-2">
          <li v-for="t in alsoWorkedWith" :key="t" class="border-2 border-ink bg-white px-2 py-0.5 text-[11px] font-bold shadow-brutal-sm">{{ t }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
