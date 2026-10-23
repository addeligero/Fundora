<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>

<template>
  <div class="brand" :class="{ 'brand--compact': compact }">
    <span class="brand__mark" aria-hidden="true">
      <span class="brand__bar brand__bar--one"></span>
      <span class="brand__bar brand__bar--two"></span>
      <span class="brand__bar brand__bar--three"></span>
    </span>
    <span v-if="!compact" class="brand__name">fundora</span>
  </div>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--ink);
}
.brand__mark {
  display: inline-flex;
  align-items: flex-end;
  gap: 0.18rem;
  width: 2rem;
  height: 2rem;
  padding: 0.38rem;
  border-radius: 0.7rem;
  background: var(--lime);
}
.brand__bar {
  display: block;
  width: 0.27rem;
  border-radius: 99px;
  background: var(--ink);
}
.brand__bar--one {
  height: 0.52rem;
}
.brand__bar--two {
  height: 0.86rem;
}
.brand__bar--three {
  height: 1.2rem;
}
.brand__name {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.07em;
}
</style>
