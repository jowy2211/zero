<script setup lang="ts">
import { profile } from '~/data/profile'

const { public: { siteUrl } } = useRuntimeConfig()
const title = `${profile.fullName} | ${profile.role} Portfolio`
const image = `${siteUrl}/og-image.png`

useSeoMeta({
  title,
  description: profile.description,
  ogTitle: title,
  ogDescription: profile.description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: image,
  ogSiteName: profile.fullName,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: profile.description,
  twitterImage: image,
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: profile.fullName,
            jobTitle: profile.role,
            url: siteUrl,
            email: `mailto:${profile.email}`,
            sameAs: profile.socials.filter((s) => s.href.startsWith('http')).map((s) => s.href),
          },
          { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: title, inLanguage: 'en' },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <SkillsSection />
    <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <ProjectsSection class="lg:border-r-2 lg:border-ink" />
      <CertificationsSection />
    </div>
    <div class="grid grid-cols-1 border-t-2 border-ink lg:grid-cols-[minmax(0,1fr)_20rem]">
      <ExperienceSection class="lg:border-r-2 lg:border-ink" />
      <ContactSection class="border-t-2 border-ink lg:border-t-0" />
    </div>
  </div>
</template>
