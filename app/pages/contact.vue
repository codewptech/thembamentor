<script setup lang="ts">
usePageSeo(
  "Contact Us",
  "Contact The MBA Mentor to discuss MBA and PGDM admission guidance. Reach us at info.thembamentor@gmail.com.",
  "/contact",
);
const config = useRuntimeConfig();
const email = computed(() => String(config.public.contactEmail));
const form = reactive({
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
});
const notice = ref("");

function openEmailApp() {
  const subject = `MBA / PGDM enquiry — ${form.name.trim()}`;
  const body = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Phone: ${form.phone.trim() || "Not provided"}`,
    `Interested in: ${form.interest || "Not specified"}`,
    "",
    "My enquiry:",
    form.message.trim(),
  ].join("\n");

  notice.value =
    "Your email application should open with a prepared message. Please review it and press Send there. No enquiry has been submitted by this website.";
  if (import.meta.client) {
    window.location.href = `mailto:${email.value}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
</script>

<template>
  <div>
    <section class="contact-hero">
      <div class="container contact-hero__top">
        <div>
          <span class="eyebrow eyebrow--light"
            ><span class="eyebrow__line"></span> GET IN TOUCH</span
          >
          <h1>Let's talk about <em>what's next.</em></h1>
        </div>
        <p>
          Your plans, your questions, your next step. Start with a short
          introduction and tell us what you would like to explore.
        </p>
      </div>
    </section>
    <section class="contact-section">
      <div class="container contact-grid">
        <div class="contact-info">
          <span class="eyebrow"
            ><span class="eyebrow__line"></span> REACH THE MBA MENTOR</span
          >
          <h2>Every journey starts <em>somewhere.</em></h2>
          <p>
            Whether you have a detailed shortlist or you're beginning with
            questions, you're welcome to get in touch.
          </p>
          <div class="contact-email">
            <span>EMAIL US DIRECTLY</span
            ><a :href="`mailto:${email}`"
              >{{ email }} <span aria-hidden="true">↗</span></a
            >
          </div>
          <div class="contact-note">
            <span aria-hidden="true">✳</span>
            <p>
              Independent MBA &amp; PGDM guidance. Official eligibility,
              admission decisions and program information remain with the
              respective institutions.
            </p>
          </div>
        </div>
        <div class="enquiry-card">
          <span class="enquiry-card__eyebrow"
            >A GOOD PLACE TO BEGIN <span aria-hidden="true">↗</span></span
          >
          <h2>Write your enquiry.</h2>
          <p>
            Complete the details below to prepare an email on your device.
            You'll review and send it from your own email application.
          </p>
          <form class="enquiry-form" @submit.prevent="openEmailApp">
            <div class="field-row">
              <div class="field">
                <label for="enquiry-name"
                  >Your name <span aria-hidden="true">*</span></label
                ><input
                  id="enquiry-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  placeholder="Your full name"
                  minlength="2"
                  maxlength="90"
                  required
                />
              </div>
              <div class="field">
                <label for="enquiry-email"
                  >Email address <span aria-hidden="true">*</span></label
                ><input
                  id="enquiry-email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  maxlength="140"
                  required
                />
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="enquiry-phone"
                  >Phone <span class="optional">(optional)</span></label
                ><input
                  id="enquiry-phone"
                  v-model="form.phone"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  placeholder="Your contact number"
                  maxlength="24"
                />
              </div>
              <div class="field">
                <label for="enquiry-interest">I want to explore</label
                ><select
                  id="enquiry-interest"
                  v-model="form.interest"
                  name="interest"
                >
                  <option value="">Select an option</option>
                  <option>MBA programs</option>
                  <option>PGDM programs</option>
                  <option>Both MBA and PGDM</option>
                  <option>I'm still deciding</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label for="enquiry-message"
                >Tell us a little about your plans
                <span aria-hidden="true">*</span></label
              ><textarea
                id="enquiry-message"
                v-model="form.message"
                name="message"
                rows="5"
                placeholder="Your background, questions, preferred locations or anything you'd like to discuss…"
                minlength="10"
                maxlength="2000"
                required
              ></textarea>
            </div>
            <button type="submit" class="button button--dark button--wide">
              Prepare my email <span aria-hidden="true">↗</span>
            </button>
            <p v-if="notice" class="form-notice" role="status">{{ notice }}</p>
            <p class="form-privacy">
              This website does not transmit or store these form entries. The
              button opens your email app; you must send the email yourself. If
              nothing opens, email us directly at
              <a :href="`mailto:${email}`">{{ email }}</a
              >. Read our
              <NuxtLink to="/privacy">privacy information</NuxtLink>.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
