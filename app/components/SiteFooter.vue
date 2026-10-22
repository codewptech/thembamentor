<script setup lang="ts">
import { primaryNavigation } from '~/data/navigation'
const config = useRuntimeConfig()
const email = computed(() => String(config.public.contactEmail))
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-brand__name">The MBA Mentor<span>.</span></NuxtLink>
          <p>Clear thinking for your next chapter in management education.</p>
        </div>
        <div class="footer-col">
          <h2>Explore</h2>
          <NuxtLink v-for="item in primaryNavigation" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
        <div class="footer-col footer-col--reach">
          <h2>Start a conversation</h2>
          <a :href="`mailto:${email}`">{{ email }} <span aria-hidden="true">↗</span></a>
          <p>Tell us what you're exploring. We'll take it from there.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} The MBA Mentor. All rights reserved.</span>
        <span>Independent MBA &amp; PGDM admission guidance.</span>
        <NuxtLink to="/privacy">Privacy &amp; transparency</NuxtLink>
      </div>
    </div>
  </footer>
</template>
