<template>
  <div class="min-h-screen p-3 sm:p-6">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-lime focus:p-3 focus:border-2 focus:border-ink"
    >
      Skip to content
    </a>
    <div class="mx-auto max-w-6xl min-w-0 border-2 border-ink bg-white shadow-brutal-lg">
      <AppHeader />
      <main id="main">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
