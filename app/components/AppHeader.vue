<script setup lang="ts">
import { navLinks, profile } from '~/data/profile'

const open = ref(false)
const close = () => (open.value = false)
</script>

<template>
  <header class="sticky top-0 z-40 border-b-2 border-ink bg-white">
    <div class="flex items-stretch">
      <a
        href="#top"
        class="flex items-center gap-2 border-r-2 border-ink bg-lime px-4 py-3 text-xs font-bold sm:px-6"
        :aria-label="`${profile.name} - home`"
        @click="close"
      >
        <Icon name="lucide:code-xml" size="16" aria-hidden="true" />
        {{ profile.handle }}
      </a>

      <nav class="hidden flex-1 items-center justify-center gap-6 px-4 text-[11px] font-bold uppercase md:flex lg:gap-10" aria-label="Primary">
        <a v-for="l in navLinks" :key="l.href" :href="l.href" class="py-1 hover:underline hover:decoration-2 hover:underline-offset-4">
          {{ l.label }}
        </a>
      </nav>
      <div class="flex-1 md:hidden" />

      <button
        type="button"
        class="border-l-2 border-ink px-4 md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" size="20" aria-hidden="true" />
      </button>

      <a
        href="#contact"
        class="flex items-center gap-2 border-l-2 border-ink bg-violet px-4 text-[11px] font-bold uppercase text-white hover:bg-ink sm:px-6"
      >
        Contact me <Icon name="lucide:arrow-right" size="14" aria-hidden="true" />
      </a>
    </div>

    <nav v-show="open" id="mobile-nav" class="border-t-2 border-ink md:hidden" aria-label="Mobile">
      <a
        v-for="l in navLinks"
        :key="l.href"
        :href="l.href"
        class="block border-b-2 border-ink px-5 py-3 text-xs font-bold uppercase last:border-b-0 hover:bg-lime"
        @click="close"
      >
        {{ l.label }}
      </a>
    </nav>
  </header>
</template>
