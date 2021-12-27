<script setup>
import { ref } from "@vue/reactivity"

const props = defineProps({
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
  display: {
    type: String,
    default: 'inline-block'
  },
})

const ButtonDisplay = ref(props.display)
</script>

<template>
  <a v-if="props.link" class="button" :class="[props.size, props.disabled === true ? 'disabled' : '', props.type]" :href="props.link">
    <slot></slot>
  </a>
  <button v-else class="button" :class="[props.size, props.disabled === true ? 'disabled' : '', props.type]">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  display: v-bind(ButtonDisplay);
  border: 1px solid;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.sm {
  padding: 3px 5px;
  } 

.md {
  padding: 5px 10px;
}

.lg {
  padding: 10px 20px;
}

.primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  border-color: var(--button-primary-border);
}

.primary:hover {
  background: var(--button-primary-bg-hover);
  color: var(--button-primary-text-hover);
  border-color: var(--button-primary-border);
}

.secondary {
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border-color: var(--button-secondary-border);
}

.secondary:hover {
  background: var(--button-secondary-bg-hover);
  color: var(--button-secondary-text-hover);
  border-color: var(--button-secondary-border);
}

.success {
  background: var(--button-success-bg);
  color: var(--button-success-text);
  border-color: var(--button-success-border);
}

.success:hover {
  background: var(--button-success-bg-hover);
  color: var(--button-success-text-hover);
  border-color: var(--button-success-border);
}

.danger {
  background: var(--button-danger-bg);
  color: var(--button-danger-text);
  border-color: var(--button-danger-border);
}

.danger:hover {
  background: var(--button-danger-bg-hover);
  color: var(--button-danger-text-hover);
  border-color: var(--button-danger-border);
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