<script setup>
import { reactive } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

const formData = reactive({
  name: "",
  email: "",
  message: "",
});
</script>

<template>
  <form action="">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="formData.email" />
    </div>
    <div>
      <label for="">Message</label>
      <textarea name="message" v-model="formData.message"></textarea>
    </div>
    <button-component type="danger">Enviar</button-component>
  </form>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

div input,
div textarea {
  margin-top: 0.5rem;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  color: var(--form-input-text);
  border: 1px solid var(--form-input-border);
  border-radius: 4px;
  background-color: var(--form-input-bg);
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
</style>
