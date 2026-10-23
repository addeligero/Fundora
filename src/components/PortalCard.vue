<script setup lang="ts">
defineProps<{
  number: string
  eyebrow: string
  title: string
  description: string
  tone: 'lime' | 'orange' | 'blue'
}>()

defineEmits<{ enter: [] }>()
</script>

<template>
  <button class="portal-card" :class="`portal-card--${tone}`" type="button" @click="$emit('enter')">
    <div class="portal-card__top">
      <span class="portal-card__icon" aria-hidden="true"
        ><span v-if="tone === 'lime'">⌘</span><span v-else-if="tone === 'orange'">↗</span
        ><span v-else>◌</span></span
      ><span class="portal-card__number">{{ number }}</span>
    </div>
    <span class="portal-card__eyebrow">{{ eyebrow }}</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span class="portal-card__action">Enter portal <b>→</b></span>
  </button>
</template>

<style scoped>
.portal-card {
  display: block;
  width: 100%;
  padding: 1.6rem;
  border: 1px solid var(--line);
  border-radius: 1rem;
  background: var(--surface);
  color: var(--ink);
  text-align: left;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.portal-card:hover {
  transform: translateY(-0.35rem);
  border-color: var(--line-strong);
  box-shadow: 0 1.5rem 3rem rgb(16 29 26 / 9%);
}
.portal-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.6rem;
}
.portal-card__icon {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border-radius: 0.75rem;
  font-size: 1.35rem;
}
.portal-card--lime .portal-card__icon {
  background: var(--lime-soft);
  color: var(--lime-dark);
}
.portal-card--orange .portal-card__icon {
  background: var(--orange-soft);
  color: var(--orange);
}
.portal-card--blue .portal-card__icon {
  background: var(--blue-soft);
  color: var(--blue);
}
.portal-card__number,
.portal-card__eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.65rem;
}
.portal-card__number {
  color: var(--muted);
}
.portal-card__eyebrow {
  color: var(--lime-dark);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.portal-card--orange .portal-card__eyebrow {
  color: var(--orange);
}
.portal-card--blue .portal-card__eyebrow {
  color: var(--blue);
}
.portal-card h3 {
  margin: 0.5rem 0 0.7rem;
  font-size: 1.5rem;
  letter-spacing: -0.05em;
}
.portal-card p {
  min-height: 3rem;
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.65;
}
.portal-card__action {
  display: inline-flex;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--muted-strong);
  font-size: 0.82rem;
  font-weight: 700;
}
.portal-card__action b {
  transition: transform 0.2s ease;
}
.portal-card:hover .portal-card__action b {
  transform: translateX(0.25rem);
}
</style>
