<script setup>
import { reactive } from "@vue/reactivity";
import Card from "../components/Card.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import Modal from "../components/Modal.vue";
import { inject, provide } from "@vue/runtime-core";

import { useRouter } from "vue-router";

//import images from "../assets/proyectsImg/";
import PelisLatino from "../assets/proyectsImg/pelislatino.png";
import UploadImg from "../assets/proyectsImg/upload-img.png";

const router = useRouter();

const text = inject("textHeader");

text.value = "Proyectos";


let cards = reactive([
  {
    title: "PelisLatino",
    description:
      "Aplicacion web que permite ver las peliculas mas recientes de la web de pelislatino.ga",
    image: PelisLatino,
    items: ["vue.js", "axios", "vuex", "vue-router", "bootstrap", "boxicons"],
    github: "https://github.com/minterger/app-peliculas-Vue",
    link: "https://pelislatino.ga",
  },
  {
    title: "Upload-Img",
    description:
      "Aplicacion web que permite subir imagenes a clodinary y atravez de una api y te devuelve la url de la imagen",
    image: UploadImg,
    disableImg: false,
    items: ["vue 3", "axios", "tailwind", "boxicons"],
    github: "https://github.com/minterger/upload-img",
    link: "http://upload-img.vercel.app",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
]);

const openModal = (id) => {
  router.push({
    hash: `#${id}`,
  });
};

provide("modalInfo", cards);

let cardAttr = reactive({
  transition: "scale",
  buttonGitType: "secondary",
  buttonOpenModal: "secondary",
});
</script>

<template>
  <div>
    <div class="title-border-bottom">
      <h1>{{ text }}</h1>
    </div>

    <div class="card-container">
      <card
        class="card"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :hoverlink="true"
        transition="scale"
        v-for="(card, index) in cards"
        :key="index"
      >
        <template v-slot:footer>
          <button-component :link="card.link"
            ><i class="bx bx-link-external"></i
          ></button-component>
          <button-component :link="card.github" :type="cardAttr.buttonGitType"
            ><i class="bx bxl-github"></i
          ></button-component>
          <button-component
            :type="cardAttr.buttonOpenModal"
            @click="openModal(index)"
          >
            <i class="bx bx-plus"></i>
          </button-component>
        </template>
      </card>
    </div>
    <modal />
  </div>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
