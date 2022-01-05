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
        ><i class='bx bx-x'></i></span>
      <h2 v-if="info.title">{{ info.title }}</h2>

      <div v-if="info.description">
        <h4>Descripción:</h4>
        <p>{{ info.description }}</p>
      </div>

      <div v-if="(!info.disableImg && info.image)">
        <h4>Imagen:</h4>
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
  font-weight: bold;
  text-align: center;
}

.modal h4 {
  color: var(--color-text-secondary);
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
  transform: translateY(-5vh);
}

.close {
  position: absolute;
  font-size: 30px;
  top: 10px;
  right: 10px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  border-radius: 50px;
  background: red;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in-out;
}

.close:hover {
  background: rgb(247, 52, 52);
  transition: background 0.2s ease-in-out, scale 0.2s ease-in-out;

}

.close:active {
  scale: 0.9;
  transition: scale 0.2s ease-in-out;
}
</style>
