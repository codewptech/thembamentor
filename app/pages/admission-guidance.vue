<script setup lang="ts">
usePageSeo(
  "Admission Guidance",
  "Independent guidance for MBA and PGDM college exploration, program comparisons, admission requirements and application planning.",
  "/admission-guidance",
);
const areas = [
  {
    number: "01",
    title: "Profile and priorities",
    text: "Discuss your academic background, interests, preferred locations, financial considerations and the direction you are considering.",
  },
  {
    number: "02",
    title: "College and program exploration",
    text: "Understand factors such as program focus, eligibility, academic experience, career relevance and institutional information.",
  },
  {
    number: "03",
    title: "Shortlisting with purpose",
    text: "Identify the questions to ask when comparing MBA and PGDM options, so your shortlist reflects your circumstances.",
  },
  {
    number: "04",
    title: "Application planning",
    text: "Make sense of timelines, documents, entrance-test requirements and application stages relevant to your preferred programs.",
  },
  {
    number: "05",
    title: "Selection-stage readiness",
    text: "Think through your profile, motivation and the kinds of conversations or interviews you may encounter when applicable.",
  },
  {
    number: "06",
    title: "Decision-stage clarity",
    text: "Review the practical factors and details worth verifying before accepting an offer or making a financial commitment.",
  },
];
const faqs = [
  {
    question: "Can you help me explore both MBA and PGDM programs?",
    answer:
      "Yes. Our focus is management education, especially MBA and PGDM options. We can help you identify useful comparison points for the programs you are considering.",
  },
  {
    question: "Do I need to have a shortlist already?",
    answer:
      "Not necessarily. You can begin by sharing your background, interests and questions. A shortlist can be developed as you understand the options better.",
  },
  {
    question: "Can you guarantee admission to a college?",
    answer:
      "No. Admission decisions, eligibility requirements, deadlines and available seats are determined by the respective institutions. We do not promise or guarantee an offer.",
  },
  {
    question: "How do I start the conversation?",
    answer:
      "Visit our contact page or email info.thembamentor@gmail.com with a brief introduction and what you would like guidance on.",
  },
];
</script>

<template>
  <div>
    <section class="page-hero page-hero--dark">
      <div class="container page-hero__inner">
        <div class="page-hero__text">
          <span class="eyebrow eyebrow--light"
            ><span class="eyebrow__line"></span> ADMISSION GUIDANCE</span
          >
          <h1>From possibilities to <em>purposeful decisions.</em></h1>
          <p>
            Thoughtful support as you explore MBA and PGDM programs, understand
            the admission journey and plan your next steps.
          </p>
          <NuxtLink to="/contact" class="button button--lime"
            >Discuss your plans <span aria-hidden="true">↗</span></NuxtLink
          >
        </div>
        <div class="guidance-symbol" aria-hidden="true">
          <span class="guidance-symbol__outer"></span
          ><span class="guidance-symbol__inner">↗</span
          ><span class="guidance-symbol__orbit"
            >MAKE IT COUNT / MAKE IT YOURS</span
          >
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <span class="eyebrow"
              ><span class="eyebrow__line"></span> WHAT WE EXPLORE
              TOGETHER</span
            >
            <h2 class="display-heading">
              Support for the <em>whole decision.</em>
            </h2>
          </div>
          <p class="section-heading-row__aside">
            The conversation can begin wherever you are in your journey. These
            are some of the areas we can help you think through.
          </p>
        </div>
        <div class="guidance-grid">
          <article
            v-for="area in areas"
            :key="area.number"
            class="guidance-item"
          >
            <span class="guidance-item__number">{{ area.number }} / 06</span>
            <h3>{{ area.title }}</h3>
            <p>{{ area.text }}</p>
            <span class="guidance-item__corner" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--checklist">
      <div class="container checklist-grid">
        <div>
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> BEFORE YOU BEGIN</span
          >
          <h2 class="display-heading">
            You don't need <em>all the answers.</em>
          </h2>
          <p class="body-copy">
            If possible, keep a few basics ready to help make the discussion
            more focused. It is fine if you are still exploring.
          </p>
        </div>
        <div class="checklist-card">
          <h3>A useful starting point</h3>
          <ul>
            <li>Your current qualification or academic stage</li>
            <li>Entrance exams taken or planned, if any</li>
            <li>Preferred locations and approximate budget</li>
            <li>Career interests or questions about specialisations</li>
            <li>Any colleges or programs already on your mind</li>
          </ul>
          <span class="checklist-card__note"
            >No perfect profile or final shortlist required.</span
          >
        </div>
      </div>
    </section>

    <section class="section section--faq">
      <div class="container faq-layout">
        <div>
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> GOOD TO KNOW</span
          >
          <h2 class="display-heading">Frequently asked <em>questions.</em></h2>
        </div>
        <div>
          <FaqList :items="faqs" />
          <p class="fine-print">
            The MBA Mentor is an independent education consultancy, not an
            official admissions department. Program details, eligibility and
            admission outcomes must be confirmed with the relevant institution.
          </p>
        </div>
      </div>
    </section>
    <CtaBand />
  </div>
</template>
