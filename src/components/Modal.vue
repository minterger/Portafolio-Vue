<script setup>
import { inject, ref, watch } from "@vue/runtime-core";
// import vue-route
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const proyects = inject("proyects");

const modalClose = ref(true);

const proyectInfo = ref({});

const closeModal = () => {
  modalClose.value = true;
  router.push({
    hash: "",
  });
};

const openModal = () => {
  modalClose.value = false;
  proyectInfo.value = proyects[route.hash.slice(1)];
};

if (route.hash) {
  openModal()
}

watch(
  () => route.hash,
  () => {
    if (route.hash) {
      openModal()
    }
  }
);
</script>

<template>
  <div class="container-modal" :class="{ show: !modalClose }">
    <div class="modal" :class="{ 'modal-close': modalClose }">
      <span class="close" @click.prevent="closeModal"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="5 5 14 14"
          style="fill: #fff; msfilter: "
        >
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
          ></path></svg
      ></span>
      <h3>{{ proyectInfo.title }}</h3>

      <p>{{ proyectInfo.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container-modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.modal {
  position: relative;
  margin: 0 8px;
  background: var(--color-bg-modal);
  border-radius: 5px;
  border: 1px solid var(--border-color);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 960px;
  height: auto;
  max-height: 90vh;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.show {
  opacity: 1;
  visibility: visible;
}

.modal-close {
  transform: translateY(-100vh);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-weight: bold;
  color: var(--color-text-primary);
  padding: 10px;
  border-radius: 50px;
  background: red;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
