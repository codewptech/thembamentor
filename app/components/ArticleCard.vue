<script setup lang="ts">
import type { Article } from "~/data/articles";
defineProps<{ article: Article; featured?: boolean }>();
</script>

<template>
  <article class="article-card" :class="{ 'article-card--featured': featured }">
    <NuxtLink
      :to="`/blog/${article.slug}`"
      class="article-card__link"
      :aria-label="`Read ${article.title}`"
    >
      <div
        class="article-card__art"
        :class="`article-card__art--${article.accent}`"
        aria-hidden="true"
      >
        <span class="article-card__ornament">{{ article.artNumber }}</span>
        <span class="article-card__art-label">THE MBA MENTOR / INSIGHTS</span>
        <span class="article-card__art-arrow">↗</span>
      </div>
      <div class="article-card__body">
        <div class="article-meta">
          <span>{{ article.category }}</span
          ><span class="article-meta__dot">•</span
          ><span>{{ article.readingTime }} min read</span>
        </div>
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <div class="article-card__end">
          <span>Read the article</span
          ><span class="round-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
