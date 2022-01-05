<script setup>
import { inject, ref, watch } from "@vue/runtime-core";
// import vue-route
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const modalInfo = inject("modalInfo");

const modalClose = ref(true);

const info = ref({});

const closeModal = () => {
  modalClose.value = true;
  router.push({
    hash: "",
  });
};

const openModal = () => {
  modalClose.value = false;
  info.value = modalInfo[route.hash.slice(1)];
};

if (route.hash) {
  openModal();
}

watch(
  () => route.hash,
  () => {
    if (route.hash) {
      openModal();
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
      <h2 v-if="info.title">{{ info.title }}</h2>

      <div v-if="info.description">
        <h4>Descripción:</h4>
        <p>{{ info.description }}</p>
      </div>

      <div>
        <img :src="info.image" alt="" />
      </div>

      <div v-if="info.items">
        <h4>Tecnologias usadas:</h4>
        <ul>
          <li v-for="(item, index) in info.items" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
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
  margin: 0px 8px;
  background: var(--color-bg-modal);
  border-radius: 5px;
  border: 1px solid var(--border-color);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 730px;
  height: auto;
  max-height: 85vh;
  overflow-y: auto;
  padding: 20px;
  transition: all 0.2s ease-in-out;
}

.modal h2 {
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.modal div img {
  width: 100%;
  height: auto;
  margin: auto;
}

.modal ul {
  list-style: square;
  padding-left: 20px;
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
