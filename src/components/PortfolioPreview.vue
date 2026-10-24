<script setup lang="ts">
const bars = [34, 44, 39, 58, 51, 69, 63, 82, 75, 94]
const stats = [
  { label: 'Active loans', value: '86' },
  { label: 'Collection rate', value: '94.2%', accent: true },
  { label: 'For review', value: '12', warning: true },
]
</script>

<template>
  <div class="preview-shell">
    <v-card class="preview-window" variant="outlined">
      <div class="preview-window__topline">
        <div class="preview-window__dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span>Live portfolio view</span>
      </div>
      <v-card-text class="preview-window__body">
        <div class="preview-window__heading">
          <div>
            <p class="eyebrow">Outstanding portfolio</p>
            <strong>₱1,284,500</strong>
          </div>
          <span class="growth">+8.4%</span>
        </div>
        <div class="bar-chart" aria-label="Portfolio growth chart">
          <span v-for="(bar, index) in bars" :key="bar" class="bar-chart__item"
            ><i
              :class="{ 'bar-chart__item--current': index === bars.length - 1 }"
              :style="{ height: `${bar}%` }"
            ></i
          ></span>
        </div>
        <div class="preview-stats">
          <div v-for="stat in stats" :key="stat.label" class="preview-stat">
            <span>{{ stat.label }}</span
            ><strong :class="{ 'is-accent': stat.accent, 'is-warning': stat.warning }">{{
              stat.value
            }}</strong>
          </div>
        </div>
        <v-card class="verified-payment" variant="tonal">
          <v-avatar class="verified-payment__icon" rounded="lg" size="36">✓</v-avatar>
          <div>
            <strong>GCash payment verified</strong><span>Juan dela Cruz · Ref. 482019771</span>
          </div>
          <b>₱1,480</b>
        </v-card>
      </v-card-text>
    </v-card>
    <div class="preview-note">
      <span>↗</span>
      <div><small>Interest calculation</small><strong>Recalculated monthly</strong></div>
    </div>
  </div>
</template>

<style scoped>
.preview-shell {
  position: relative;
}
.preview-shell::before {
  position: absolute;
  inset: 1.5rem -1.5rem -1.5rem 1.5rem;
  z-index: -1;
  border-radius: 2rem;
  background: var(--lime);
  content: '';
  opacity: 0.18;
  filter: blur(2rem);
}
.preview-window {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  background: var(--surface);
  box-shadow: 0 2rem 5rem rgb(16 29 26 / 12%);
}
.preview-window__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
  font-family: 'DM Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.preview-window__dots {
  display: flex;
  gap: 0.35rem;
}
.preview-window__dots span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--line-strong);
}
.preview-window__dots span:last-child {
  background: var(--lime-dark);
}
.preview-window__body {
  padding: clamp(1.25rem, 4vw, 2rem);
}
.preview-window__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--muted);
  font-size: 0.72rem;
}
.preview-window__heading strong {
  font-family: 'DM Mono', monospace;
  font-size: clamp(1.65rem, 4vw, 2.25rem);
  letter-spacing: -0.08em;
}
.growth {
  padding: 0.45rem 0.65rem;
  border-radius: 0.5rem;
  background: var(--lime-soft);
  color: var(--lime-dark);
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
}
.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  height: 8rem;
  margin: 2rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--line);
}
.bar-chart__item {
  display: flex;
  align-items: flex-end;
  height: 100%;
  flex: 1;
}
.bar-chart__item i {
  width: 100%;
  border-radius: 0.2rem 0.2rem 0 0;
  background: var(--line-strong);
  transition: background 0.2s ease;
}
.bar-chart__item:hover i,
.bar-chart__item--current {
  background: var(--lime-dark) !important;
}
.preview-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}
.preview-stat {
  padding: 0.8rem;
  border: 1px solid var(--line);
  border-radius: 0.7rem;
  background: var(--paper);
}
.preview-stat span,
.preview-stat strong {
  display: block;
}
.preview-stat span {
  color: var(--muted);
  font-size: 0.65rem;
}
.preview-stat strong {
  margin-top: 0.5rem;
  font-family: 'DM Mono', monospace;
  font-size: 1.1rem;
}
.preview-stat .is-accent {
  color: var(--lime-dark);
}
.preview-stat .is-warning {
  color: var(--orange);
}
.verified-payment {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border: 1px solid rgb(159 212 74 / 35%);
  border-radius: 0.7rem;
  background: var(--lime-soft);
}
.verified-payment__icon {
  flex: 0 0 auto;
  background: var(--lime);
  color: var(--ink);
  font-weight: 800;
}
.verified-payment div {
  min-width: 0;
  flex: 1;
}
.verified-payment strong,
.verified-payment div span {
  display: block;
}
.verified-payment strong {
  font-size: 0.78rem;
}
.verified-payment div span {
  margin-top: 0.2rem;
  overflow: hidden;
  color: var(--muted);
  font-size: 0.65rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.verified-payment b {
  color: var(--lime-dark);
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
}
.preview-note {
  position: absolute;
  right: -1rem;
  bottom: -1.2rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 0.8rem;
  background: var(--surface);
  box-shadow: 0 1rem 2rem rgb(16 29 26 / 10%);
}
.preview-note > span {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 0.5rem;
  background: var(--orange-soft);
  color: var(--orange);
  font-size: 1.1rem;
}
.preview-note small,
.preview-note strong {
  display: block;
}
.preview-note small {
  color: var(--muted);
  font-size: 0.6rem;
}
.preview-note strong {
  margin-top: 0.15rem;
  font-size: 0.68rem;
}
@media (max-width: 640px) {
  .preview-note {
    right: 0.5rem;
  }
}
</style>
