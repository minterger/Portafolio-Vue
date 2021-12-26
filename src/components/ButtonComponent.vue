<script setup>
defineProps({
  type: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
  },
})
</script>

<template>
  <a v-if="link" class="button" :class="[size, disabled === true ? 'disabled' : '', type]" :href="link">
    <slot></slot>
  </a>
  <button v-else class="button" :class="[size, disabled === true ? 'disabled' : '', type]">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  display: inline;
  border: 1px solid var(--border-color);
  padding: 5px 10px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
}

.primary:hover {
  background: var(--button-primary-bg-hover);
  color: var(--button-primary-text-hover);
}

.secondary {
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
}

.secondary:hover {
  background: var(--button-secondary-bg-hover);
  color: var(--button-secondary-text-hover);
}

.disabled {
  background: #ccc;
  border: 1px solid var(--border-color);
  cursor: not-allowed;
}

@media screen and (max-width: 568px) {
  .button {
      padding: 8px 12px;
      font-size: 1.5rem;
  }
}

</style>