<script setup>
defineProps({
  ratio: {
    type: String,
    default: '16/9',
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="placeholder-image">
    <span v-if="label" class="placeholder-image__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.placeholder-image {
  width: 100%;
  aspect-ratio: v-bind(ratio);
  background-color: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}
.placeholder-image__label {
  font-size: 0.75rem;
  color: #64748b;
  font-family: Inter, sans-serif;
}
</style>
