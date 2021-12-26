<script setup>
import FormContact from "../components/FormContact.vue";
import { inject } from "@vue/runtime-core";

const text = inject("textHeader");

text.value = "Contact Me";
</script>

<template>
  <div>
    <h1>Contact Me</h1>

    <hr />

    <h3>Escribime a travez de este formulario</h3>

    <form-contact></form-contact>

    <h3>O escribeme a travez de mis redes sociales</h3>

    <div class="social-media">
      <a href="https://www.facebook.com/leonelmenci" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
      </a>
      <a href="https://www.instagram.com/leo_skateboard/" target="_blank">
        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
      </a>
      <a
        href="https://www.linkedin.com/in/leonel-menci/"
        target="_blank"
      >
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
