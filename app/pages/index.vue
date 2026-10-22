<script setup lang="ts">
import { articles } from "~/data/articles";

usePageSeo(
  "MBA & PGDM Admission Guidance",
  "Explore MBA and PGDM opportunities with independent guidance on college shortlisting, application planning and informed admission decisions.",
  "/",
);

const services = [
  {
    number: "01",
    icon: "◎",
    title: "Find the right direction",
    text: "Clarify what you want from management education before diving into college lists and application forms.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Compare with confidence",
    text: "Look beyond labels and headlines. Evaluate programs, practical considerations and institutional information.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Plan the next step",
    text: "Understand the admission journey and prepare for applications, requirements and important decisions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your story",
    text: "Share your education, interests, goals and the kind of MBA or PGDM experience you are exploring.",
  },
  {
    number: "02",
    title: "Explore your options",
    text: "Talk through relevant factors, questions and possible directions without getting overwhelmed by the noise.",
  },
  {
    number: "03",
    title: "Move with clarity",
    text: "Build a more considered shortlist and plan the steps needed for your preferred programs.",
  },
];
</script>

<template>
  <div>
    <section class="home-hero" aria-labelledby="home-hero-title">
      <div class="container home-hero__grid">
        <div class="home-hero__copy">
          <div class="hero-kicker">
            <span class="hero-kicker__spark">✳</span> INDEPENDENT MBA &amp; PGDM
            ADMISSION GUIDANCE
          </div>
          <h1 id="home-hero-title">
            Your future is worth <em>a better question.</em>
          </h1>
          <p class="home-hero__lead">
            Choosing a management program is a big decision. We help you explore
            your options, ask the right questions and take your next step with
            clarity.
          </p>
          <div class="home-hero__actions">
            <NuxtLink to="/contact" class="button button--lime"
              >Let's discuss your plans
              <span aria-hidden="true">↗</span></NuxtLink
            >
            <NuxtLink
              to="/admission-guidance"
              class="text-link text-link--light"
              >Explore our guidance <span aria-hidden="true">↗</span></NuxtLink
            >
          </div>
          <div class="home-hero__foot">
            <span class="home-hero__foot-line"></span> YOUR DECISION. YOUR
            DIRECTION.
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-visual__circle hero-visual__circle--one"></div>
          <div class="hero-visual__circle hero-visual__circle--two"></div>
          <div class="hero-visual__halo"></div>
          <div class="decision-card">
            <div class="decision-card__top">
              <span>THE DECISION EDITION</span><span>01 / 03</span>
            </div>
            <div class="decision-card__graphic">
              <span class="decision-card__spark">✳</span
              ><span class="decision-card__arc"></span>
            </div>
            <div class="decision-card__label">
              It's not just about<br />where you study.<br /><em
                >It's about where<br />you want to go.</em
              >
            </div>
            <div class="decision-card__bottom">
              <span>THE MBA MENTOR</span><span>↗</span>
            </div>
          </div>
          <div class="hero-visual__side-note">
            THINK BEYOND THE BROCHURE — THINK AHEAD
          </div>
        </div>
      </div>
    </section>

    <section class="statement-strip" aria-label="Our approach">
      <div class="container statement-strip__inner">
        <span>Explore possibilities.</span><span aria-hidden="true">✳</span
        ><span>Find perspective.</span><span aria-hidden="true">✳</span
        ><span>Choose deliberately.</span>
      </div>
    </section>

    <section class="section section--intro">
      <div class="container two-column-heading">
        <div>
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> THE WAY WE SEE IT</span
          >
          <h2 class="display-heading">
            More than a college list. <em>A clearer direction.</em>
          </h2>
        </div>
        <div class="two-column-heading__aside">
          <p>
            There is no single MBA or PGDM path that fits everyone. Your
            background, aspirations, budget and priorities all matter.
          </p>
          <p>
            Our role is to help you make sense of the options and approach
            decisions thoughtfully.
          </p>
          <NuxtLink to="/about" class="text-link"
            >Get to know us <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
      </div>
    </section>

    <section
      class="section section--services"
      aria-labelledby="services-heading"
    >
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow"
              ><span class="eyebrow__line"></span> HOW WE CAN HELP</span
            >
            <h2 id="services-heading" class="display-heading">
              Guidance for <em>what matters.</em>
            </h2>
          </div>
          <NuxtLink class="text-link" to="/admission-guidance"
            >View guidance <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <div class="service-grid">
          <article
            v-for="service in services"
            :key="service.number"
            class="service-card"
          >
            <div class="service-card__top">
              <span class="service-card__number">{{ service.number }} / 03</span
              ><span class="service-card__icon" aria-hidden="true">{{
                service.icon
              }}</span>
            </div>
            <div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
            </div>
            <NuxtLink
              class="service-card__link"
              to="/admission-guidance"
              :aria-label="`Learn about ${service.title}`"
              >Discover more <span aria-hidden="true">↗</span></NuxtLink
            >
          </article>
        </div>
      </div>
    </section>

    <section class="section section--process" aria-labelledby="process-heading">
      <div class="container process-layout">
        <div class="process-layout__intro">
          <span class="eyebrow eyebrow--light"
            ><span class="eyebrow__line"></span> A SIMPLER WAY FORWARD</span
          >
          <h2 id="process-heading" class="display-heading">
            Less confusion.<br /><em>More intention.</em>
          </h2>
          <p>
            We believe a useful conversation starts with you—not a predetermined
            college list.
          </p>
          <NuxtLink to="/contact" class="button button--outline-light"
            >Start a conversation <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <div class="process-steps">
          <article
            v-for="step in steps"
            :key="step.number"
            class="process-step"
          >
            <span class="process-step__number">{{ step.number }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
            <span class="process-step__arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--journal" aria-labelledby="journal-heading">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow"
              ><span class="eyebrow__line"></span> NOTES FROM THE MENTOR</span
            >
            <h2 id="journal-heading" class="display-heading">
              Good decisions start <em>with good information.</em>
            </h2>
          </div>
          <NuxtLink to="/blog" class="text-link"
            >Visit all insights <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <div class="article-grid article-grid--home">
          <ArticleCard
            v-for="article in articles.slice(0, 2)"
            :key="article.slug"
            :article="article"
          />
        </div>
      </div>
    </section>

    <CtaBand />
  </div>
</template>
