<script setup>
import BlockBadge from '../ui/BlockBadge.vue'
</script>

<template>
  <!--
    Based on: https://flowbite.com/blocks/marketing/footer/#sitemap-logo-social-media
    Adapted: dark navy bg, 3-col sitemap (logo+links / article links / legal links),
    legal disclaimer section, bottom copyright bar, no social icons.
  -->
  <footer class="footer">
    <BlockBadge
      url="https://flowbite.com/blocks/marketing/footer/#sitemap-logo-social-media"
      label="flowbite · footer/#sitemap-logo-social-media"
    />

    <!-- ── Sitemap links ──────────────────────────────────────────── -->
    <div class="footer__main">
      <div class="footer__grid">

        <!-- Col 1: Logo + primary nav links -->
        <div class="footer__col">
          <a href="#" class="footer__logo">
            <svg class="footer__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="18" cy="18" r="18" fill="#009cde"/>
              <path d="M10 24 C12 14, 20 10, 26 14 C22 16, 16 20, 14 28 C12 26, 10 24, 10 24Z" fill="#ffffff"/>
              <path d="M18 26 C18 20, 22 16, 26 14" stroke="#003087" stroke-width="1.5" stroke-linecap="round" fill="none"/>
            </svg>
            <span class="footer__logo-text">Velari</span>
          </a>
          <ul class="footer__links">
            <li><a href="#" class="footer__link">L'angolo del respiro</a></li>
            <li><a href="#" class="footer__link">Trova farmacia</a></li>
            <li><a href="#" class="footer__link">Contatti</a></li>
            <li><a href="#" class="footer__link">FAQ</a></li>
          </ul>
        </div>

        <!-- Col 2: Article / topic links -->
        <div class="footer__col">
          <ul class="footer__links footer__links--top">
            <li><a href="#" class="footer__link">Tosse ingorante e tosse infame</a></li>
            <li><a href="#" class="footer__link">Pestilenza e raffreddore</a></li>
            <li><a href="#" class="footer__link">Peste rimedi naturali</a></li>
            <li><a href="#" class="footer__link">Natura e difese Immunitarie</a></li>
            <li><a href="#" class="footer__link">Rimedi naturali per il naso caduto</a></li>
            <li><a href="#" class="footer__link">Velarolo</a></li>
            <li><a href="#" class="footer__link">Che catarro hai?</a></li>
          </ul>
        </div>

        <!-- Col 3: Legal / policy links -->
        <div class="footer__col">
          <ul class="footer__links footer__links--top">
            <li><a href="#" class="footer__link">Segnalare un effetto indesiderato</a></li>
            <li><a href="#" class="footer__link">Termini di servizio</a></li>
            <li><a href="#" class="footer__link">Cookie Policy</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ── Legal disclaimers ─────────────────────────────────────── -->
    <div class="footer__legal">
      <div class="footer__legal-grid">
        <div class="footer__legal-col">
          <p>Velpin Sciroppo, Velpin Granulato, Velfri Sciroppo, sono medicinali a base di Velarolo che possono avere effetti indesiderati anche gravi. Leggere attentamente i foglietti illustrativi. Aut. Min. del xx/04/xxxx</p>
          <p>Velpin Aerosol, Velfluid Supposte Adulti, Velfluid Supposte Bambini, sono medicinali a base di Velarolo senza obbligo di prescrizione (SOP) che possono essere consegnati solo dal farmacista. Ascolta il tuo farmacista. Leggere attentamente i foglietti illustrativi. Aut. Min. del xx/xx/xxxx</p>
          <p>Velpin Natura Nasal Iper è un Dispositivo Medico CE. Leggere attentamente le istruzioni per l'uso. Aut. Min. del 12/02/2024</p>
        </div>
        <div class="footer__legal-col">
          <p>Velfluid Soluzione da Nebulizzare è un medicinale a base di Velarolo che può avere effetti indesiderati anche gravi. Leggere attentamente il foglietto illustrativo. Aut. Min. del 13/04/2023</p>
          <p>Velpin Tosse Influenza Raffreddore è un medicinale a base di paracetamolo, destrometorfano, clorfenamina. Leggere attentamente il foglietto illustrativo e utilizzare sotto parere medico. Aut. Min. del 13/04/2023</p>
          <p>Velfluid RinoNeb è un Dispositivo Medico CE. Leggere attentamente le istruzioni per l'uso. Aut. Min. del 12/02/2024</p>
        </div>
        <div class="footer__legal-col">
          <p>Velpin Natura Caramelle Gola, Velpin Natura Spray Gola sono Dispositivi Medici CE. Leggere attentamente le istruzioni per l'uso. Aut. Min. del 12/02/2024</p>
          <p>Velpin Natura Sciroppo, Velpin Natura Sciroppo Bambini sono Dispositivi Medici CE. Leggere attentamente le istruzioni per l'uso. Aut. Min. del 12/02/2024</p>
        </div>
      </div>
    </div>

    <!-- ── Bottom bar ────────────────────────────────────────────── -->
    <div class="footer__bottom">
      <span>©2011 Tossevera | P.IVA: IT FOOBARSUVVIA</span>
      <span>Made by <strong>Me</strong> for testing</span>
    </div>

  </footer>
</template>

<style scoped>
/* ── Footer shell ─────────────────────────────────────────────────── */
.footer {
  position: relative;
  background-color: #011840;
  overflow: hidden;
  font-family: Inter, sans-serif;
}

/* ── Sitemap section ──────────────────────────────────────────────── */
.footer__main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 2.5rem 2.5rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.8fr 2.2fr 1.8fr;
  gap: 2.5rem;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* Logo */
.footer__logo {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.25rem;
}

.footer__logo-icon {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
}

.footer__logo-text {
  font-size: 1.9rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  border-bottom: 4px solid #009cde;
  padding-bottom: 2px;
  letter-spacing: -0.5px;
}

/* Link lists */
.footer__links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.footer__links--top {
  /* col 2 & 3 have no logo above, align to top of grid */
  padding-top: 0;
}

.footer__link {
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.90);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.15s;
}

.footer__link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* ── Legal disclaimers ────────────────────────────────────────────── */
.footer__legal {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.75rem 2.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.footer__legal-grid {
  display: grid;
  grid-template-columns: 1.8fr 2.2fr 1.8fr;
  gap: 2.5rem;
}

.footer__legal-col {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.footer__legal-col p {
  font-size: 0.68rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.55;
  margin: 0;
}

/* ── Bottom bar ───────────────────────────────────────────────────── */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background-color: #009cde;
  padding: 0.75rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__bottom span {
  font-size: 0.78rem;
  color: #ffffff;
  font-weight: 400;
}

.footer__bottom strong {
  font-weight: 700;
  color: #ffffff;
}
</style>
