<script setup>
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style scoped>
.button {
  display: inline;
  background: var(--button-primary-bg);
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
</style>