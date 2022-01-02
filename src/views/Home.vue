<script setup>
import { inject } from "@vue/runtime-core";
import HomeComponent from "../components/HomeComponent.vue";

const text = inject("textHeader");

text.value = "Home";
</script>

<template>
  <div>
    <h1>{{text}}</h1>

    <hr />

    <home-component />
  </div>
</template>