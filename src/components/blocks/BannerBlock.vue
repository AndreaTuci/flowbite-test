<script setup>
import BlockBadge from '../ui/BlockBadge.vue'
</script>

<template>
  <!-- Based on: https://flowbite.com/blocks/marketing/cta/#heading-with-cta-button
       Adapted: bg → deep royal blue, text → white, button hidden (not in reference),
       text container widened, heading enlarged. -->
  <section class="banner">
    <BlockBadge
      url="https://flowbite.com/blocks/marketing/cta/#heading-with-cta-button"
      label="flowbite · cta/#heading-with-cta-button"
    />
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="banner__content mx-auto text-center">
        <h2 class="banner__heading mb-4 tracking-tight font-extrabold leading-tight">
          Una linea per trattare le forme di tosse brutta, tosse
          ignorante e i sintomi di pestilenza e raffreddore
        </h2>
        <p class="banner__sub mb-6 font-light md:text-lg">
          Velpin, Velfri e Velfluid ti aiutano in caso di tosse con
          catarro, tosse infame persistente e mal di gola o bruciore
        </p>
        <!-- CTA button present in base block — not shown in reference -->
        <a href="#" class="banner__cta">Scopri di più</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  background-color: #0d47a1;
  width: 100%;
}

.banner__content {
  max-width: 860px;
}

.banner__heading {
  font-family: Inter, sans-serif;
  font-size: 2.15rem;
  line-height: 1.2;
  color: #ffffff;
}

.banner__sub {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
}

/* Hidden — not present in reference image */
.banner__cta {
  display: none;
}
</style>
