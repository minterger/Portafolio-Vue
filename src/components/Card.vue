<script setup>
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  image: {
    type: String,
    // default: "https://picsum.photos/400/225",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  transition: {
    type: String,
    default: "",
  },
  hoverlink: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="card"
    :class="[props.transition, props.transition !== '' ? 'transition' : '']"
  >
    <div v-if="props.image" @click="openModal">
      <img :src="props.image" alt="" />
    </div>
    <div class="content" v-if="props.title || props.description">
      <h3>{{ props.title }}</h3>
      <p class="description">{{ props.description }}</p>
    </div>
    <div class="footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.transition {
  transition: transform 0.3s ease-in-out;
}

.translate-y-5:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease-in-out;
}

.scale:hover {
  transform: scale(1.03);
}

.content {
  padding: 0px 10px;
}
.content p {
  /* limitar cantidad de caracteres */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

img {
  border-radius: 4px 4px 0 0;
  width: 100%;
}

.footer {
  display: flex;
  justify-content: end;
  border-top: 1px solid var(--border-color);
  gap: 10px;
  padding: 10px 10px;
}
</style>
