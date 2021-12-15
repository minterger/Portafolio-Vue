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
    <div class="img">
      <img :src="img" alt="" />
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5px;
  border: 1px solid #212d46;
  width: 200px;
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
  border-radius: 5px 5px 0 0;
}

.footer {
  border-top: 1px solid #212d46;
}
</style>
