<script setup>
import { inject } from "@vue/runtime-core";

const text = inject("textHeader");

text.value = "Contact Me";
</script>

<template>
  <div>
    <h1>Contact Me</h1>
  </div>
</template>

<style scoped>

</style>