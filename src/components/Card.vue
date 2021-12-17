<script setup>
defineProps({
  img: {
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
});
</script>

<template>
  <div class="card">
    <div class="img" v-if="img">
      <img :src="img" alt="" />
    </div>
    <div class="content" v-if="title || description">
      <h3>{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  border: 1px solid var(--border-color);
  width: 200px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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

.img {
  overflow: hidden;
  border-radius: 4px 4px 0 0;
  height: 200px;
  object-fit: cover; 
}

.footer {
  display: flex;
  justify-content: end;
  border-top: 1px solid var(--border-color);
  gap: 10px;
  padding: 10px 10px;
}
</style>
