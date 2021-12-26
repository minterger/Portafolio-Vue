<script setup>
import { inject } from "@vue/runtime-core";
import HelloWorld from '../components/HelloWorld.vue';

const text = inject('textHeader');

text.value = 'Home';

</script>

<template>
  <div>
    <h1>Home</h1>

    <hr />
    
    <hello-world></hello-world>
  <hello-world />
  </div>
</template>