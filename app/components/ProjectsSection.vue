<script setup lang="ts">
import { projects } from '~/data/profile'

const track = ref<HTMLElement | null>(null)
const active = ref(0)

const colors = { pink: 'bg-pink', lime: 'bg-lime', violet: 'bg-violet' } as const

function go(i: number) {
  const el = track.value
  if (!el) return
  const index = (i + projects.length) % projects.length
  el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' })
}

function onScroll() {
  const el = track.value
  if (el) active.value = Math.round(el.scrollLeft / el.clientWidth)
}
</script>

<template>
  <section id="projects" class="min-w-0 p-6 sm:p-8" aria-labelledby="projects-title">
    <div class="mb-6 flex items-start justify-between gap-4">
      <div class="flex flex-col gap-4">
        <h2 id="projects-title" class="font-display text-xl uppercase">Featured projects</h2>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="brutal-btn w-fit bg-white">
          View all projects <Icon name="lucide:arrow-right" size="14" aria-hidden="true" />
        </a>
      </div>
      <div class="flex gap-3">
        <button type="button" class="brutal-btn bg-pink !p-2" aria-label="Previous project" @click="go(active - 1)">
          <Icon name="lucide:chevron-left" size="16" aria-hidden="true" />
        </button>
        <button type="button" class="brutal-btn bg-pink !p-2" aria-label="Next project" @click="go(active + 1)">
          <Icon name="lucide:chevron-right" size="16" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      ref="track"
      class="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      tabindex="0"
      @scroll.passive="onScroll"
    >
      <article
        v-for="(p, i) in projects"
        :key="p.title"
        class="w-full shrink-0 snap-center pb-2 pr-2"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${projects.length}`"
      >
        <div class="border-2 border-ink bg-white shadow-brutal">
          <div class="h-48 border-b-2 border-ink p-4 sm:h-64" :class="colors[p.color]">
            <div class="size-full border-2 border-ink">
              <ProjectArt :art="p.art" />
            </div>
          </div>
          <div class="flex flex-col gap-3 p-5">
            <h3 class="font-display text-lg uppercase">{{ p.title }}</h3>
            <p class="text-xs leading-relaxed">{{ p.description }}</p>
            <ul class="flex flex-wrap gap-2">
              <li v-for="t in p.tags" :key="t" class="border-2 border-ink px-2 py-0.5 text-[10px] font-bold">{{ t }}</li>
            </ul>
            <a :href="p.href" class="brutal-btn mt-1 w-fit bg-white">
              View details <Icon name="lucide:arrow-right" size="14" aria-hidden="true" />
              <span class="sr-only"> of {{ p.title }}</span>
            </a>
          </div>
        </div>
      </article>
    </div>

    <ul class="mt-5 flex justify-center gap-2" aria-label="Choose project">
      <li v-for="(p, i) in projects" :key="p.title">
        <button
          type="button"
          class="size-3 rounded-full border-2 border-ink"
          :class="active === i ? 'bg-ink' : 'bg-white'"
          :aria-label="`Go to ${p.title}`"
          :aria-current="active === i"
          @click="go(i)"
        />
      </li>
    </ul>
  </section>
</template>
