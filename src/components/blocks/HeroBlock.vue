<script setup>
import PlaceholderImage from '../ui/PlaceholderImage.vue'
import BlockBadge from '../ui/BlockBadge.vue'
</script>

<template>
  <!-- Based on: https://flowbite.com/blocks/marketing/hero/#visual-heading
       Adapted: text col-span swapped (5 text / 7 image), no subtitle/CTA,
       eyebrow label added, full-bleed image column. -->
  <section class="hero">
    <BlockBadge
      url="https://flowbite.com/blocks/marketing/hero/#visual-heading"
      label="flowbite · hero/#visual-heading"
    />
    <div class="hero__inner">

      <!-- Left: text -->
      <div class="hero__text-col">
        <p class="hero__eyebrow">LA TOSSE TI TORMENTA?</p>
        <h1 class="hero__heading">
          Puoi ritrovare<br>
          l'armonia<br>
          con Velpin
        </h1>
      </div>

      <!-- Right: image — full-height, flush to top/right/bottom edges -->
      <div class="hero__image-col">
        <PlaceholderImage ratio="3/2" label="Personas yoga" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to right, #b6ddf0 0%, #cce9f6 35%, #e4f4fb 70%, #f0f9fd 100%);
}

.hero__inner {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 7fr;
  min-height: 390px;
}

/* ── Text column ──────────────────────────────────────────────── */
.hero__text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem 3rem 2.5rem;
}

.hero__eyebrow {
  font-family: Inter, sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #009cde;
  text-transform: uppercase;
  margin-bottom: 0.65rem;
}

.hero__heading {
  font-family: Inter, sans-serif;
  font-size: 2.65rem;
  font-weight: 800;
  line-height: 1.1;
  color: #003087;
}

/* ── Image column ─────────────────────────────────────────────── */
.hero__image-col {
  /* stretch to section edges — no padding */
  align-self: stretch;
}

/* Override PlaceholderImage to fill full height of the column */
.hero__image-col :deep(.placeholder-image) {
  width: 100%;
  height: 100%;
  aspect-ratio: unset;
  border-radius: 0;
  background-color: #b0d8ed;
  /* subtle yoga-mat stripe at the bottom */
  background-image: linear-gradient(
    to bottom,
    #c4e5f5 0%,
    #c4e5f5 78%,
    #9abfd4 78%,
    #9abfd4 100%
  );
}
</style>
