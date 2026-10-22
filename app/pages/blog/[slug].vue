<script setup lang="ts">
import { articles, findArticle } from "~/data/articles";

const route = useRoute();
const article = findArticle(String(route.params.slug));
if (!article) {
  throw createError({ statusCode: 404, statusMessage: "Article not found" });
}

usePageSeo(article.title, article.description, `/blog/${article.slug}`);
const config = useRuntimeConfig();
const base = String(config.public.siteUrl).replace(/\/$/, "");
useSeoMeta({
  ogType: "article",
  articlePublishedTime: `${article.date}T12:00:00+05:30`,
  articleAuthor: "The MBA Mentor",
});
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: "The MBA Mentor" },
        publisher: {
          "@type": "Organization",
          name: "The MBA Mentor",
          url: base,
        },
        mainEntityOfPage: `${base}/blog/${article.slug}`,
        image: `${base}/og-image.png`,
      }),
    },
  ],
});
const related = articles
  .filter((item) => item.slug !== article.slug)
  .slice(0, 2);
</script>

<template>
  <div>
    <section class="article-hero">
      <div class="container article-hero__inner">
        <NuxtLink class="back-link" to="/blog"
          ><span aria-hidden="true">←</span> Back to insights</NuxtLink
        >
        <div class="article-hero__header">
          <div class="article-meta article-meta--hero">
            <span>{{ article.category }}</span
            ><span class="article-meta__dot">•</span
            ><span>{{ article.readingTime }} min read</span>
          </div>
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <div class="article-hero__byline">
            <span>BY THE MBA MENTOR</span><span>{{ article.displayDate }}</span>
          </div>
        </div>
      </div>
    </section>
    <div
      class="article-cover"
      :class="`article-cover--${article.accent}`"
      aria-hidden="true"
    >
      <div class="container article-cover__inner">
        <span>THINK / QUESTION / DECIDE</span
        ><strong>{{ article.artNumber }}</strong
        ><span>THE MBA MENTOR <span>↗</span></span>
      </div>
    </div>
    <section class="article-content-section">
      <div class="container article-content-layout">
        <aside class="article-side">
          <span>THE MBA MENTOR</span><span class="article-side__rule"></span
          ><span>IDEAS FOR YOUR NEXT CHAPTER</span
          ><NuxtLink to="/contact">Ask us a question ↗</NuxtLink>
        </aside>
        <article class="article-content">
          <div class="article-intro">
            <p v-for="paragraph in article.intro" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <section
            v-for="section in article.sections"
            :key="section.heading"
            class="article-section"
          >
            <h2>{{ section.heading }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
            <ul v-if="section.bullets">
              <li v-for="bullet in section.bullets" :key="bullet">
                {{ bullet }}
              </li>
            </ul>
          </section>
          <div class="article-conclusion">
            <strong>The takeaway</strong>
            <p>{{ article.conclusion }}</p>
          </div>
          <div class="article-disclaimer">
            Information is general in nature. Check current program and
            admission details directly with the relevant institution and
            official sources.
          </div>
          <div class="article-share">
            <span>CONTINUE EXPLORING</span
            ><NuxtLink to="/blog"
              >All articles <span aria-hidden="true">↗</span></NuxtLink
            >
          </div>
        </article>
      </div>
    </section>
    <section class="section section--related">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow"
              ><span class="eyebrow__line"></span> KEEP READING</span
            >
            <h2 class="display-heading">More to <em>think about.</em></h2>
          </div>
          <NuxtLink to="/blog" class="text-link"
            >All insights <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <div class="article-grid article-grid--home">
          <ArticleCard
            v-for="item in related"
            :key="item.slug"
            :article="item"
          />
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
