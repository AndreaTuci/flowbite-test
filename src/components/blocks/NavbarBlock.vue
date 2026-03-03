<script setup>
import BlockBadge from '../ui/BlockBadge.vue'
</script>

<template>
  <div class="navbar-block-wrapper">
    <BlockBadge
      url="https://flowbite.com/docs/components/navbar/"
      label="flowbite · navbar component"
    />

    <!-- Top utility bar -->
    <div class="topbar">
      <div class="topbar__inner">
        <a href="#" class="topbar__item">
          <svg class="topbar__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9h18M9 9V21M15 9V21M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 3h6v6H9V3z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Farmaci Etici</span>
        </a>
        <a href="#" class="topbar__item">
          <svg class="topbar__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Che tosse hai?</span>
        </a>
        <a href="#" class="topbar__item">
          <svg class="topbar__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>
          </svg>
          <span>FAQ</span>
        </a>
      </div>
    </div>

    <!-- Main navbar -->
    <nav class="navbar">
      <div class="navbar__inner">

        <!-- Logo -->
        <a href="#" class="navbar__logo">
          <svg class="navbar__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="18" r="18" fill="#009cde"/>
            <path d="M10 24 C12 14, 20 10, 26 14 C22 16, 16 20, 14 28 C12 26, 10 24, 10 24Z" fill="#ffffff"/>
            <path d="M18 26 C18 20, 22 16, 26 14" stroke="#003087" stroke-width="1.5" stroke-linecap="round" fill="none"/>
          </svg>
          <span class="navbar__logo-text">Velari</span>
        </a>

        <!-- Centre nav links -->
        <ul class="navbar__links">
          <li>
            <a href="#" class="navbar__link">
              Linea Classica
              <svg class="navbar__chevron" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="navbar__link">
              Linea Natura
              <svg class="navbar__chevron" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="navbar__link">
              Approfondimenti
              <svg class="navbar__chevron" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" class="navbar__link">Velarolo</a>
          </li>
        </ul>

        <!-- Right actions -->
        <div class="navbar__actions">
          <a href="#" class="navbar__cart" aria-label="Carrello">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <a href="#" class="navbar__pharmacy">
            <span class="navbar__pharmacy-icon" aria-hidden="true">+</span>
            <span class="navbar__pharmacy-label">
              Trova in farmacia<br>e parafarmacia
            </span>
          </a>
        </div>

      </div>
    </nav>
  </div>
</template>

<style scoped>
/* Wrapper — needed for badge absolute positioning */
.navbar-block-wrapper {
  position: relative;
}

/* Top bar */
.topbar {
  background-color: #009cde;
  width: 100%;
}

.topbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.75rem;
}

.topbar__item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 500;
  font-family: Inter, sans-serif;
  text-decoration: none;
  white-space: nowrap;
}

.topbar__item:hover {
  opacity: 0.85;
}

.topbar__icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  color: #fff;
}

/* Main navbar */
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  width: 100%;
}

.navbar__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

/* Logo */
.navbar__logo {
  text-decoration: none;
  flex-shrink: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.navbar__logo-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.navbar__logo-text {
  font-family: Inter, sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #003087;
  line-height: 1;
  border-bottom: 4px solid #009cde;
  padding-bottom: 2px;
  letter-spacing: -0.5px;
}

/* Nav links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
}

.navbar__link {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.4rem 0.75rem;
  font-family: Inter, sans-serif;
  font-size: 0.92rem;
  font-weight: 500;
  color: #009cde;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  transition: background-color 0.15s;
}

.navbar__link:hover {
  background-color: #f0f9ff;
}

.navbar__chevron {
  width: 0.9rem;
  height: 0.9rem;
  flex-shrink: 0;
  color: #009cde;
}

/* Right actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

/* Cart circle */
.navbar__cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 2px solid #009cde;
  border-radius: 50%;
  color: #009cde;
  text-decoration: none;
  transition: background-color 0.15s;
  flex-shrink: 0;
}

.navbar__cart:hover {
  background-color: #f0f9ff;
}

.navbar__cart svg {
  width: 1.2rem;
  height: 1.2rem;
}

/* Find pharmacy */
.navbar__pharmacy {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.navbar__pharmacy-icon {
  font-size: 1.6rem;
  font-weight: 300;
  color: #00a651;
  line-height: 1;
  flex-shrink: 0;
}

.navbar__pharmacy-label {
  font-family: Inter, sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  color: #009cde;
  line-height: 1.35;
  white-space: nowrap;
}

.navbar__pharmacy:hover .navbar__pharmacy-label {
  text-decoration: underline;
}
</style>
