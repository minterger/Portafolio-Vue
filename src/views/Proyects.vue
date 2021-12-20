<script setup>
import { reactive } from "@vue/reactivity";
import Card from "../components/Card.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

let cards = reactive([
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
  {
    title: "Card Title",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
    image: "https://webdenutris.com/wp-content/uploads/partes-navegador.jpg",
    link: "#",
  },
]);

let cardAttr = reactive({
  transition: "scale",
  buttonGitType: "secondary",
});
</script>

<template>
  <div>
    <h1>Proyects</h1>
    <div class="card-container">
      <card
        class="card"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        transition="scale"
        v-for="(card, index) in cards"
        :key="index"
      >
        <template v-slot:footer>
          <button-component
            :type="cardAttr.buttonGitType"
            @click="card.title = 'New Title'"
            ><i class="bx bxl-github"></i
          ></button-component>
          <button-component :link="card.link"
            ><i class="bx bx-link-external"></i
          ></button-component>
        </template>
      </card>
    </div>
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
