<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <section id="contact" class="grid-paper-dark relative flex min-w-0 flex-col justify-center gap-6 overflow-hidden p-6 sm:p-8" aria-labelledby="contact-title">
    <h2 id="contact-title" class="font-display text-2xl uppercase leading-tight text-white">
      Let's build something amazing together.
    </h2>
    <a :href="`mailto:${profile.email}`" class="brutal-btn w-fit bg-white">
      Get in touch <Icon name="lucide:arrow-right" size="14" aria-hidden="true" />
    </a>
    <address class="flex flex-col gap-2 text-[11px] not-italic leading-relaxed text-white">
      <a :href="`mailto:${profile.email}`" class="break-all underline underline-offset-2">{{ profile.email }}</a>
      <a :href="profile.phoneHref" class="underline underline-offset-2">{{ profile.phone }}</a>
      <p>
        {{ profile.address.street }}<br />{{ profile.address.area }},<br />{{ profile.address.city }} {{ profile.address.postalCode }}
      </p>
    </address>
    <svg class="pointer-events-none absolute -bottom-8 -right-8 size-28" viewBox="0 0 100 100" aria-hidden="true">
      <path d="m50 4 10 24 24-12-6 26 26 4-22 14 18 18-26 0 4 26-22-16-22 16 4-26-26 0 18-18L2 42l26-4-6-26 24 12z" fill="#ff5a2c" stroke="#0a0a0a" stroke-width="3" stroke-linejoin="round" />
    </svg>
  </section>
</template>
