<script setup lang="ts">
import { certifications } from '~/data/profile'

const shades = ['bg-[#eeeeee]', 'bg-[#dcdcdc]', 'bg-[#c8c8c8]']
</script>

<template>
  <section id="certifications" class="min-w-0 flex flex-col gap-5 bg-lime p-6 sm:p-8" aria-labelledby="cert-title">
    <h2 id="cert-title" class="font-display text-xl uppercase">Certifications</h2>
    <ul class="flex flex-col gap-5">
      <li v-for="(c, i) in certifications" :key="c.title">
        <a :href="c.href" class="brutal-card flex min-h-28 flex-col justify-center gap-1 p-5 transition-[transform,box-shadow] hover:translate-x-1 hover:translate-y-1 hover:shadow-none" :class="shades[i % shades.length]">
          <span class="font-display text-xl leading-tight">{{ c.title }}</span>
          <span class="text-[11px]">{{ c.issuer }} &middot; {{ c.year }}</span>
        </a>
      </li>
    </ul>
    <a href="#" class="brutal-btn w-full justify-between bg-white">
      View all certifications <Icon name="lucide:arrow-right" size="14" aria-hidden="true" />
    </a>
  </section>
</template>
