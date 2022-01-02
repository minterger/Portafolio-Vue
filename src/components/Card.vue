<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const props = defineProps({
  image: {
    type: String,
    default: "https://picsum.photos/200",
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
  id: {
    type: String,
    default: "",
  },
});

const openModal = () => {
  // asignar el id del proyecto al route hash
  if (props.hoverlink)
  // router puth to hash
    router.push({
      hash: '#' + props.id,
    });
};
</script>

<template>
  <div
    class="card"
    :class="[props.transition, props.transition !== '' ? 'transition' : '']"
  >
    <div v-if="props.image" :class="{ open: props.hoverlink, overlay: props.hoverlink }" @click="openModal">
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

.overlay {
  position: relative;
  overflow: hidden;
}

/* img overlay */
.overlay::after {
  content: "Ver más";
  font-size: 1.1rem;
  color: #fff;
  position: absolute;
  display: grid;
  inset: 0;
  bottom: 4px;
  place-items: center;
  background: rgba(33, 49, 92, 0.5);
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

.overlay:hover::after {
  transform: translateY(0);
}

.open {
  cursor: pointer;
}
</style>
