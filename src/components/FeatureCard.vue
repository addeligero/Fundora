<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>

<template>
  <v-card class="feature-card" variant="text" rounded="0">
    <span class="feature-card__number">{{ number }}</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </v-card>
</template>

<style scoped>
.feature-card {
  padding: 2.3rem 2rem;
}
.feature-card:first-child {
  padding-left: 0;
}
.feature-card__number {
  color: var(--lime-dark);
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
}
.feature-card h3 {
  margin: 1rem 0 0.7rem;
  font-size: 1.35rem;
  letter-spacing: -0.04em;
}
.feature-card p {
  max-width: 18rem;
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.7;
}
@media (max-width: 767px) {
  .feature-card,
  .feature-card:first-child {
    padding: 2rem 0;
  }
}
</style>
