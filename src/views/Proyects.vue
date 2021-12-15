<script setup>
import { reactive } from '@vue/reactivity'
import Card from '../components/Card.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

let card = reactive({
    title: 'Card Title',
    description: '  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, quibusdam cum omnis explicabo est, labore veniam sit sunt consectetur doloribus dolor commodi molestiae cumque placeat, adipisci maiores rerum. Debitis, accusantium?',
    image: '',
    link: '',
})

</script>

<template>
  <h1> Proyects </h1>
  <card :title="card.title" :description="card.description">
    <template v-slot:footer>
      <button-component @click="card.title = 'New Title'">Change Title</button-component>
    </template>
  </card>
</template>