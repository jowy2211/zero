<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="top" class="grid lg:grid-cols-[1.1fr_1fr]" aria-labelledby="hero-title">
    <div class="grid-paper flex flex-col justify-center gap-6 border-b-2 border-ink p-6 sm:p-10 lg:border-b-0 lg:border-r-2">
      <p class="w-fit bg-violet px-3 py-1.5 text-[11px] font-bold uppercase text-white">
        {{ profile.greeting }} <span aria-hidden="true">👋</span>
      </p>
      <h1 id="hero-title" class="font-display text-5xl uppercase leading-[0.95] sm:text-7xl">
        Software<br />Developer
      </h1>
      <p class="max-w-md text-sm leading-relaxed">{{ profile.tagline }}</p>
      <div class="flex flex-wrap gap-4">
        <a href="#projects" class="brutal-btn bg-lime">
          View my work <Icon name="lucide:arrow-up-right" size="14" aria-hidden="true" />
        </a>
        <a :href="`mailto:${profile.email}`" class="brutal-btn bg-white">
          Email me <Icon name="lucide:mail" size="14" aria-hidden="true" />
        </a>
      </div>
      <ul class="flex flex-wrap gap-2" aria-label="Personality">
        <li v-for="t in profile.personality" :key="t" class="border-2 border-ink bg-white px-2 py-0.5 text-[10px] font-bold">{{ t }}</li>
      </ul>
      <div>
        <p class="mb-2 text-[10px] font-bold uppercase">Connect with me</p>
        <SocialLinks />
      </div>
    </div>

    <div class="relative flex min-h-[26rem] items-center justify-center overflow-hidden bg-pink p-8 sm:p-12">
      <div class="relative w-full max-w-sm">
        <div class="absolute -right-4 -top-4 size-full border-2 border-ink bg-lime" aria-hidden="true" />
        <div class="relative aspect-[361/497] overflow-hidden border-2 border-ink bg-violet-soft shadow-brutal">
          <img
            v-if="profile.photo"
            :src="profile.photo"
            :alt="`Portrait of ${profile.fullName}`"
            width="361"
            height="497"
            fetchpriority="high"
            decoding="async"
            class="size-full object-cover"
          />
          <HeroIllustration v-else class="size-full" />
        </div>
        <div
          class="absolute -bottom-6 -right-2 border-2 border-ink bg-violet p-4 text-[11px] leading-5 text-white shadow-brutal sm:-right-6"
          role="img"
          aria-label="Developer profile snippet"
        >
          <p class="text-white/70">&gt; const developer = {</p>
          <p v-for="[k, v] in profile.codeSnippet" :key="k" class="pl-4">
            <span class="text-violet-soft">{{ k }}:</span> <span class="text-pink">'{{ v }}'</span>,
          </p>
          <p class="text-white/70">}</p>
        </div>
      </div>
    </div>
  </section>
</template>
