<script setup lang="ts">
import BrandMark from '@/components/BrandMark.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import PortfolioPreview from '@/components/PortfolioPreview.vue'
import PortalCard from '@/components/PortalCard.vue'

const features = [
  {
    number: '01',
    title: 'Borrower-first records',
    description: 'Agreements, schedules, balances, and payment history stay connected.',
  },
  {
    number: '02',
    title: 'Payments you can trust',
    description: 'Review every GCash report before it changes your official ledger.',
  },
  {
    number: '03',
    title: 'Field-ready collections',
    description: 'Give collectors a focused view of assigned accounts and next steps.',
  },
]

const portals = [
  {
    number: '01',
    eyebrow: 'Full operations',
    title: 'Administrator',
    description: 'Manage loans, borrowers, collections, and investor shares.',
    tone: 'lime' as const,
  },
  {
    number: '02',
    eyebrow: 'Field visibility',
    title: 'Collector',
    description: 'Review assigned accounts and know exactly who needs a follow-up.',
    tone: 'orange' as const,
  },
  {
    number: '03',
    eyebrow: 'Self-service',
    title: 'Borrower',
    description: 'Track loan progress and report GCash payments in a few taps.',
    tone: 'blue' as const,
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="landing-page bg-background">
    <div class="landing-page__grid" aria-hidden="true"></div>
    <header class="site-header">
      <v-container class="site-header__nav" aria-label="Primary navigation">
        <a class="site-header__logo" href="#top" aria-label="Fundora home"><BrandMark /></a>
        <div class="site-header__links d-none d-sm-flex">
          <v-btn variant="text" size="small" @click="scrollTo('features')">Platform</v-btn>
          <v-btn variant="text" size="small" @click="scrollTo('portals')">Portals</v-btn>
        </div>
        <v-btn color="secondary" class="site-header__cta" elevation="2" @click="scrollTo('portals')"
          >Open demo <span>↗</span></v-btn
        >
      </v-container>
    </header>

    <main id="top">
      <v-container class="hero">
        <div class="hero__copy">
          <p class="kicker"><span></span> Lending clarity for Philippine teams</p>
          <h1>Every loan.<em>One clear story.</em></h1>
          <p class="hero__description">
            Run your lending business with less guesswork. From borrower onboarding to GCash
            verification, Fundora keeps every peso and every promise in view.
          </p>
          <div class="hero__actions">
            <v-btn color="primary" size="large" @click="scrollTo('portals')"
              >Explore the workspace <span>→</span></v-btn
            >
            <v-btn variant="outlined" color="secondary" size="large" @click="scrollTo('features')"
              >See how it works</v-btn
            >
          </div>
          <div class="hero__proof">
            <span>✓</span><span>Diminishing balance</span><span>✓</span
            ><span>GCash verification</span><span>✓</span><span>Flexible schedules</span>
          </div>
        </div>
        <PortfolioPreview />
      </v-container>

      <section id="features" class="feature-band">
        <v-container
          ><v-row class="feature-grid"
            ><v-col v-for="feature in features" :key="feature.number" cols="12" md="4"
              ><FeatureCard v-bind="feature" /></v-col></v-row
        ></v-container>
      </section>

      <v-container id="portals" class="portal-section">
        <div class="portal-section__heading">
          <div>
            <p class="kicker">Three views, one source of truth</p>
            <h2>Enter the workspace built for your role.</h2>
          </div>
          <p>This demo opens instantly, so you can explore each experience without credentials.</p>
        </div>
        <v-row class="portal-grid"
          ><v-col v-for="portal in portals" :key="portal.number" cols="12" md="4"
            ><PortalCard v-bind="portal" @enter="scrollTo('top')" /></v-col
        ></v-row>
      </v-container>
    </main>

    <footer class="site-footer">
      <v-container class="site-footer__inner">
        <BrandMark /><span>Philippine lending management, made clear.</span
        ><small>10% monthly · Diminishing balance · GCash + Cash</small>
      </v-container>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');
:root {
  --ink: #18312a;
  --ink-soft: #345048;
  --muted: #71827c;
  --muted-strong: #526760;
  --paper: #f4f7f0;
  --surface: #fff;
  --line: #dce6dc;
  --line-strong: #b9cbbb;
  --lime: #b9e96b;
  --lime-dark: #6a9631;
  --lime-soft: #eff9dc;
  --orange: #e88950;
  --orange-soft: #fdf0e7;
  --blue: #5d8bd2;
  --blue-soft: #eaf0fb;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  min-width: 320px;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Manrope', sans-serif;
}
.landing-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: var(--paper);
}
.landing-page__grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.55;
  background-image:
    linear-gradient(rgb(188 204 190 / 20%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(188 204 190 / 20%) 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: linear-gradient(to bottom, black, transparent 70%);
}
.site-header {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid rgb(220 230 220 / 75%);
  background: rgb(244 247 240 / 75%);
  backdrop-filter: blur(1rem);
}
.site-header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
}
.site-header__logo {
  color: inherit;
  text-decoration: none;
}
.site-header__links {
  display: flex;
  gap: 2rem;
  margin-left: auto;
  margin-right: 2.5rem;
}
.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
  align-items: center;
  gap: clamp(3rem, 8vw, 7rem);
  min-height: 39rem;
  padding-top: 6rem;
  padding-bottom: 7rem;
}
.hero__copy {
  animation: rise 0.7s ease both;
}
.kicker {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0;
  color: var(--lime-dark);
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
.kicker span {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--lime-dark);
  box-shadow: 0 0 0 0.3rem var(--lime-soft);
}
.hero h1 {
  max-width: 38rem;
  margin: 1.7rem 0 0;
  font-size: clamp(3.8rem, 7vw, 6.8rem);
  font-weight: 800;
  letter-spacing: -0.095em;
  line-height: 0.92;
}
.hero h1 em {
  display: block;
  color: var(--lime-dark);
  font-style: normal;
}
.hero__description {
  max-width: 31rem;
  margin: 1.8rem 0 0;
  color: var(--muted-strong);
  font-size: 1rem;
  line-height: 1.8;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2rem;
}
.hero__proof {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
  margin-top: 2.2rem;
  color: var(--muted);
  font-family: 'DM Mono', monospace;
  font-size: 0.63rem;
}
.hero__proof span:nth-child(odd) {
  display: grid;
  width: 1.25rem;
  height: 1.25rem;
  place-items: center;
  border-radius: 50%;
  background: var(--lime-soft);
  color: var(--lime-dark);
}
.hero__proof span:nth-child(even) {
  margin-right: 0.5rem;
}
.feature-band {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgb(255 255 255 / 38%);
}
.portal-section {
  padding-top: 7rem;
  padding-bottom: 8rem;
}
.portal-section__heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
}
.portal-section h2 {
  max-width: 38rem;
  margin: 1rem 0 0;
  font-size: clamp(2.2rem, 4vw, 3.7rem);
  letter-spacing: -0.08em;
  line-height: 0.98;
}
.portal-section__heading > p {
  max-width: 19rem;
  margin: 0 0 0.2rem;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.7;
}
.site-footer {
  border-top: 1px solid var(--line);
  background: rgb(255 255 255 / 35%);
}
.site-footer__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 5.5rem;
  color: var(--muted);
  font-size: 0.72rem;
}
.site-footer__inner .brand {
  margin-right: 0.4rem;
}
.site-footer__inner small {
  margin-left: auto;
  font-family: 'DM Mono', monospace;
  font-size: 0.63rem;
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 5rem;
  }
  .hero__copy {
    max-width: 40rem;
  }
  .hero h1 {
    font-size: clamp(3.7rem, 15vw, 6rem);
  }
  .portal-section__heading {
    align-items: flex-start;
    flex-direction: column;
  }
}
@media (max-width: 640px) {
  .site-header__cta {
    min-height: 2.5rem;
    padding-inline: 0.8rem;
    font-size: 0.7rem;
  }
  .hero {
    gap: 4rem;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }
  .hero__description {
    font-size: 0.9rem;
  }
  .portal-section {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
  .site-footer__inner {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding-block: 1.5rem;
  }
  .site-footer__inner small {
    margin-left: 0;
  }
}
</style>
