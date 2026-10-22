<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    heading?: string;
    description?: string;
  }>(),
  {
    eyebrow: "YOUR NEXT STEP",
    heading: "Better decisions begin with a conversation.",
    description:
      "Share where you are in your MBA or PGDM journey. We’ll help you think through what comes next.",
  },
);
</script>

<template>
  <section class="cta-band" aria-labelledby="cta-band-heading">
    <div class="container cta-band__inner">
      <div>
        <span class="eyebrow eyebrow--light"
          ><span class="eyebrow__line"></span>{{ eyebrow }}</span
        >
        <h2 id="cta-band-heading">{{ heading }}</h2>
        <p>{{ description }}</p>
      </div>
      <NuxtLink to="/contact" class="button button--lime"
        >Start a conversation <span aria-hidden="true">↗</span></NuxtLink
      >
    </div>
  </section>
</template>
