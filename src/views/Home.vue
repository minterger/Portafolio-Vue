<script setup>
import { inject } from "@vue/runtime-core";
import HelloWorld from '../components/HelloWorld.vue';

const text = inject('textHeader');

text.value = 'Home';

</script>

<template>
  <hello-world />
</template>