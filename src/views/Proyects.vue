<script setup>
import { reactive } from "@vue/reactivity";
import Card from "../components/Card.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

let card = reactive({
  title: "Card Title",
  description:
    "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?",
  image: "",
  link: "#",
});
</script>

<template>
  <h1>Proyects</h1>
  <div class="card-container">
    <card class="card" :title="card.title" :description="card.description">
      <template v-slot:footer>
        <button-component :type="'secondary'" @click="card.title = 'New Title'"
          ><i class="bx bxl-github"></i
        ></button-component>
        <button-component :link="card.link"
          ><i class="bx bx-link-external"></i
        ></button-component>
      </template>
    </card>

    <card class="card" :title="card.title" :description="card.description">
      <template v-slot:footer>
        <button-component :type="'secondary'" @click="card.title = 'New Title'"
          ><i class="bx bxl-github"></i
        ></button-component>
        <button-component :link="card.link"
          ><i class="bx bx-link-external"></i
        ></button-component>
      </template>
    </card>
  </div>
</template>


<style scoped>
.card-container {
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 960px;
  gap: 15px;
}
</style>