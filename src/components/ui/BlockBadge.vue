<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="block-badge"
    :title="label"
  >
    <!-- Flowbite leaf-like logo mark -->
    <svg class="block-badge__icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
    <span class="block-badge__label">{{ label }}</span>
    <!-- External link icon -->
    <svg class="block-badge__ext" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
    </svg>
  </a>
</template>

<style scoped>
.block-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 9px 4px 6px;
  background-color: rgba(17, 24, 39, 0.78);
  backdrop-filter: blur(4px);
  border-radius: 999px;
  color: #fff;
  font-family: ui-monospace, 'Cascadia Code', monospace;
  font-size: 0.68rem;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.15s;
  pointer-events: auto;
}

.block-badge:hover {
  background-color: rgba(17, 24, 39, 0.95);
}

.block-badge__icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  color: #38bdf8;
}

.block-badge__label {
  line-height: 1;
}

.block-badge__ext {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  opacity: 0.6;
}
</style>
