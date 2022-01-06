<script setup>
import { inject } from "@vue/runtime-core";
import HomeComponent from "../components/HomeComponent.vue";

const text = inject("textHeader");

text.value = "Home";
</script>

<template>
  <div>
    <div class="title-border-bottom">
      <h1>{{ text }}</h1>
    </div>

    <home-component />
  </div>
</template>
