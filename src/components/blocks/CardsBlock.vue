<script setup>
import PlaceholderImage from '../ui/PlaceholderImage.vue'
import BlockBadge from '../ui/BlockBadge.vue'

const cards = [
  {
    name: 'Velpin',
    desc: 'Sciroppo, granulato e aerosol, una linea per la tosse canina con catarro',
  },
  {
    name: 'Velfluid',
    desc: 'Supposte e aerosol, una linea ad azione mucolitica per le affezioni respiratorie acute e croniche',
  },
  {
    name: 'Velfri',
    desc: 'Sciroppo per la tosse cattiva senza zucchero e senza alcool',
  },
]
</script>

<template>
  <!--
    Left column: marketing/hero/#visual-heading (col-span-5, text + product cluster)
    Right column: no matching free block — custom card list with Flowbite card component patterns
    https://flowbite.com/blocks/marketing/hero/#visual-heading
  -->
  <section class="cards-block">
    <BlockBadge
      url="https://flowbite.com/blocks/marketing/hero/#visual-heading"
      label="flowbite · hero/#visual-heading"
    />

    <!-- Whirlpool: concentric rings via radial-gradient -->
    <div class="whirlpool" aria-hidden="true"></div>

    <div class="cards-block__inner">

      <!-- Left: heading + staggered product cluster -->
      <div class="cards-block__left">
        <div class="cards-block__heading">
          <span class="cards-block__pre">PER LA</span>
          <h2 class="cards-block__title">TOSSE<br>INFAME</h2>
        </div>

        <div class="product-cluster" aria-hidden="true">
          <div class="product-cluster__item product-cluster__item--a">
            <PlaceholderImage ratio="3/4" label="Velfri" />
          </div>
          <div class="product-cluster__item product-cluster__item--b">
            <PlaceholderImage ratio="3/4" label="Velpin" />
          </div>
          <div class="product-cluster__item product-cluster__item--c">
            <PlaceholderImage ratio="3/4" label="Velfluid" />
          </div>
        </div>
      </div>

      <!-- Right: frosted-glass card list -->
      <div class="cards-block__right">
        <a
          v-for="card in cards"
          :key="card.name"
          href="#"
          class="card"
        >
          <div class="card__thumb">
            <PlaceholderImage ratio="1/1" :label="card.name" />
          </div>
          <div class="card__body">
            <h3 class="card__name">{{ card.name }}</h3>
            <p class="card__desc">{{ card.desc }}</p>
          </div>
          <svg class="card__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Section ──────────────────────────────────────────────────────── */
.cards-block {
  position: relative;
  overflow: hidden;
  background-color: #009cde;
  width: 100%;
}

/* ── Whirlpool ────────────────────────────────────────────────────── */
.whirlpool {
  position: absolute;
  left: 24%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 560px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 15%,
    rgba(255, 255, 255, 0.10) 16%, rgba(255, 255, 255, 0.10) 18%,
    transparent 19%, transparent 28%,
    rgba(255, 255, 255, 0.08) 29%, rgba(255, 255, 255, 0.08) 31%,
    transparent 32%, transparent 41%,
    rgba(255, 255, 255, 0.06) 42%, rgba(255, 255, 255, 0.06) 44%,
    transparent 45%, transparent 55%,
    rgba(255, 255, 255, 0.04) 56%, rgba(255, 255, 255, 0.04) 58%,
    transparent 59%, transparent 69%,
    rgba(255, 255, 255, 0.03) 70%, rgba(255, 255, 255, 0.03) 72%,
    transparent 73%
  );
}

/* ── Inner grid ───────────────────────────────────────────────────── */
.cards-block__inner {
  position: relative;
  /* no z-index — avoids creating a stacking context that breaks backdrop-filter */
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.75rem 2rem;
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 2.5rem;
  align-items: center;
  min-height: 380px;
}

/* ── Left column ──────────────────────────────────────────────────── */
.cards-block__left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
}

.cards-block__pre {
  display: block;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.02em;
  margin-bottom: 0.1rem;
}

.cards-block__title {
  font-family: Inter, sans-serif;
  font-size: 4.2rem;
  font-weight: 900;
  color: #fff;
  line-height: 0.93;
  margin: 0;
  letter-spacing: -1.5px;
  text-transform: uppercase;
}

/* ── Product cluster ──────────────────────────────────────────────── */
.product-cluster {
  position: relative;
  height: 195px;
}

.product-cluster__item {
  position: absolute;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
}

/* Back-left box — smaller, rotated left */
.product-cluster__item--a {
  width: 88px;
  left: 0;
  top: 40px;
  transform: rotate(-7deg);
  z-index: 1;
}

/* Back-right box — mid size, slight right tilt */
.product-cluster__item--b {
  width: 100px;
  left: 72px;
  top: 12px;
  transform: rotate(4deg);
  z-index: 2;
}

/* Front box — largest, nearly upright */
.product-cluster__item--c {
  width: 110px;
  left: 158px;
  top: 48px;
  transform: rotate(-2deg);
  z-index: 3;
}

/* ── Right column ─────────────────────────────────────────────────── */
.cards-block__right {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

/* ── Card ─────────────────────────────────────────────────────────── */
.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem 0.85rem 0.9rem;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.60);
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.88);
  transform: translateX(5px);
  box-shadow: 0 4px 20px rgba(0, 80, 160, 0.25);
}

.card__thumb {
  width: 68px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
}

.card__body {
  flex: 1;
  min-width: 0;
}

.card__name {
  font-family: Inter, sans-serif;
  font-size: 0.93rem;
  font-weight: 700;
  color: #003087;
  margin: 0 0 0.2rem;
  line-height: 1.2;
}

.card__desc {
  font-family: Inter, sans-serif;
  font-size: 0.76rem;
  font-weight: 400;
  color: #1f2937;
  line-height: 1.45;
  margin: 0;
}

.card__arrow {
  width: 1.15rem;
  height: 1.15rem;
  color: #009cde;
  flex-shrink: 0;
  opacity: 0.8;
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.card:hover .card__arrow {
  opacity: 1;
  transform: translateX(2px);
}
</style>
