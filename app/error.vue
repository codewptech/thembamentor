<script setup lang="ts">
const props = defineProps<{
  error: { statusCode?: number; statusMessage?: string };
}>();
function returnHome() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <div class="error-page">
    <div class="container error-page__inner">
      <div class="error-page__code">
        {{ props.error.statusCode || "Oops" }}<span>.</span>
      </div>
      <span class="eyebrow"
        ><span class="eyebrow__line"></span> A SMALL DETOUR</span
      >
      <h1>Not the page<br /><em>you were looking for.</em></h1>
      <p>
        This address may have moved or may not exist. You can always start again
        from our homepage.
      </p>
      <button type="button" class="button button--dark" @click="returnHome">
        Back to homepage <span aria-hidden="true">↗</span>
      </button>
    </div>
  </div>
</template>
