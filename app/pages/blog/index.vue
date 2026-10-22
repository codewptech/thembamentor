<script setup lang="ts">
import { articles } from '~/data/articles'
usePageSeo('Insights & Guides', 'Helpful guides and practical perspectives on MBA and PGDM admissions, college shortlisting, applications and decision-making.', '/blog')
</script>

<template>
  <div>
    <section class="page-hero page-hero--journal"><div class="container"><span class="eyebrow"><span class="eyebrow__line"></span> THE MBA MENTOR / INSIGHTS</span><div class="journal-hero"><h1>Read more.<br><em>Decide better.</em></h1><div><p>Considered perspectives on choosing management programs, preparing for admission and thinking ahead.</p><span class="journal-hero__stamp">IDEAS FOR THE NEXT CHAPTER <span aria-hidden="true">↗</span></span></div></div></div></section>
    <section class="section journal-listing"><div class="container"><div class="listing-meta"><span>ALL ARTICLES</span><span>{{ String(articles.length).padStart(2, '0') }} GUIDES</span></div><div class="article-grid article-grid--listing"><ArticleCard v-for="(article, index) in articles" :key="article.slug" :article="article" :featured="index === 0" /></div><p class="journal-bottom-note">Our guides are general information, not a substitute for verifying the current requirements of an individual institution.</p></div></section>
    <CtaBand eyebrow="NEED A SECOND PERSPECTIVE?" heading="Questions are a good place to start." />
  </div>
</template>
