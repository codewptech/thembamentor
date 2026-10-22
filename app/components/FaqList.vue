<script setup lang="ts">
interface Question {
  question: string;
  answer: string;
}
defineProps<{ items: Question[] }>();
</script>

<template>
  <div class="faq-list">
    <details
      v-for="(item, index) in items"
      :key="item.question"
      class="faq-item"
    >
      <summary>
        <span class="faq-item__number">0{{ index + 1 }}</span
        ><span>{{ item.question }}</span
        ><span class="faq-item__plus" aria-hidden="true">+</span>
      </summary>
      <p>{{ item.answer }}</p>
    </details>
  </div>
</template>
