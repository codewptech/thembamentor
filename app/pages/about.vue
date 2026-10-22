<script setup lang="ts">
usePageSeo(
  "About Us",
  "Learn about The MBA Mentor, an independent consultancy focused on thoughtful MBA and PGDM admission guidance.",
  "/about",
);
const principles = [
  {
    number: "01",
    title: "Start with the person",
    text: "Your situation matters. A useful discussion begins with your goals, educational background, questions and constraints.",
  },
  {
    number: "02",
    title: "Value substance over noise",
    text: "We favour meaningful comparisons and verified details over sweeping promises, unsupported claims or overwhelming lists.",
  },
  {
    number: "03",
    title: "Keep choices in your hands",
    text: "Our purpose is to help you navigate decisions with more understanding. The final decision remains yours.",
  },
];
</script>

<template>
  <div>
    <section class="page-hero page-hero--light">
      <div class="container page-hero__inner">
        <div class="page-hero__text">
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> ABOUT THE MBA MENTOR</span
          >
          <h1>Guidance shaped around <em>your ambitions.</em></h1>
          <p>
            We believe a management education decision deserves more than a
            quick recommendation. It deserves perspective, clarity and
            thoughtful consideration.
          </p>
        </div>
        <div class="page-hero__mark" aria-hidden="true">M<span>.</span></div>
      </div>
    </section>

    <section class="section">
      <div class="container story-grid">
        <div>
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> WHO WE ARE</span
          >
          <h2 class="display-heading">
            A thoughtful approach to <em>admission guidance.</em>
          </h2>
        </div>
        <div class="prose-lead">
          <p>
            The MBA Mentor is an independent education consultancy focused
            primarily on MBA and PGDM admissions.
          </p>
          <p>
            We assist prospective management students in understanding their
            options, considering relevant institutions and programs, and
            preparing for the decisions involved in the admission process.
          </p>
          <p>
            Different students bring different aspirations. Our approach is to
            listen first, explore the relevant factors and help make the next
            steps clearer.
          </p>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow"
              ><span class="eyebrow__line"></span> WHAT GUIDES US</span
            >
            <h2 class="display-heading">
              Three principles. <em>One purpose.</em>
            </h2>
          </div>
        </div>
        <div class="values-grid">
          <article
            v-for="value in principles"
            :key="value.number"
            class="value-card"
          >
            <span>{{ value.number }} —</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-feature">
        <div class="split-feature__visual" aria-hidden="true">
          <span class="split-feature__tiny">THE MBA MENTOR / AN OPEN MIND</span
          ><strong>Think clearly.<br /><em>Choose wisely.</em></strong
          ><span class="split-feature__icon">✳</span>
        </div>
        <div class="split-feature__copy">
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> OUR PERSPECTIVE</span
          >
          <h2 class="display-heading">The right fit is <em>personal.</em></h2>
          <p>
            A college might be right for one student and less suitable for
            another. That is why we encourage looking at program structure,
            eligibility, career relevance, cost and your longer-term plans
            together.
          </p>
          <p>
            We help you frame better questions—not chase a one-size-fits-all
            answer.
          </p>
          <NuxtLink to="/admission-guidance" class="text-link"
            >See how we can help <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
      </div>
    </section>
    <CtaBand
      eyebrow="LET'S BEGIN"
      heading="Your journey deserves a considered start."
    />
  </div>
</template>
