<script setup>
import { reactive } from "@vue/reactivity";
import Card from "../components/Card.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import Modal from "../components/Modal.vue";
import { inject, provide } from "@vue/runtime-core";

import pelislatino from "../assets/proyectsImg/pelislatino.png";

const text = inject("textHeader");

text.value = "Proyectos";

let cards = reactive([
  {
    title: "PelisLatino",
    description:
      "Aplicacion web que permite ver las peliculas mas recientes de la web de pelislatino.ga",
    image: pelislatino,
    github: "https://github.com/minterger/app-peliculas-Vue",
    link: "https://pelislatino.ga",
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
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    github: "#",
    link: "#",
  },
]);

provide("proyects", cards);

let cardAttr = reactive({
  transition: "scale",
  buttonGitType: "secondary",
});
</script>

<template>
  <div>
    <h1>{{text}}</h1>

    <hr />

    <div class="card-container">
      <card
        class="card"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :id="index"
        :hoverlink="true"
        transition="scale"
        v-for="(card, index) in cards"
        :key="index"
      >
        <template v-slot:footer>
          <button-component :link="card.github" :type="cardAttr.buttonGitType"
            ><i class="bx bxl-github"></i
          ></button-component>
          <button-component :link="card.link"
            ><i class="bx bx-link-external"></i
          ></button-component>
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
