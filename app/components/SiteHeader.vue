<script setup lang="ts">
import { primaryNavigation } from '~/data/navigation'

const route = useRoute()
const menuOpen = ref(false)
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink to="/" class="wordmark" aria-label="The MBA Mentor home" @click="menuOpen = false">
        <span class="wordmark__symbol" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="wordmark__text"><span class="wordmark__overline">THE</span><strong>MBA</strong><span class="wordmark__mentor">MENTOR<span class="wordmark__dot">.</span></span></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="item in primaryNavigation" :key="item.to" :to="item.to" :class="{ 'is-active': route.path === item.to || (item.to === '/blog' && route.path.startsWith('/blog/')) }">{{ item.label }}</NuxtLink>
      </nav>
      <NuxtLink to="/contact" class="button button--nav desktop-contact">Let's talk <span aria-hidden="true">↗</span></NuxtLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'" @click="menuOpen = !menuOpen">
        <span :class="{ 'menu-toggle__line--top-open': menuOpen }"></span>
        <span :class="{ 'menu-toggle__line--bottom-open': menuOpen }"></span>
      </button>
    </div>
    <nav id="mobile-navigation" v-show="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <NuxtLink v-for="item in primaryNavigation" :key="item.to" :to="item.to">{{ item.label }} <span aria-hidden="true">↗</span></NuxtLink>
      <NuxtLink class="mobile-nav__contact" to="/contact">Get in touch <span aria-hidden="true">↗</span></NuxtLink>
    </nav>
  </header>
</template>
