<script setup>
import { computed, reactive } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

// validad formData.email
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidEmail = computed(() => {
  if (formData.email.length > 5) {
    return !validateEmail(formData.email);
  }
});

const sendEmail = async () => {
  if ((formData.name.length > 0 && formData.email.length > 0 && formData.message.length > 0) && validateEmail(formData.email)) {
    try {
      const response = await fetch("https://email-sender-minterger.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.status === 200) {
        formData.name = "";
        formData.email = "";
        formData.message = "";

        alert("Email enviado con exito!");
      }
    } catch (error) {
      console.log(error);

      alert("Error Enviando el email");
    }
  } else {
    alert("Por favor completa el formulario");
  }
};



</script>

<template>
  <form @submit.prevent="sendEmail">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="formData.email" />
      <span class="validEmail" v-if="isValidEmail">Escribe Un Email Valido</span>
    </div>
    <div>
      <label for="">Message</label>
      <textarea name="message" v-model="formData.message"></textarea>
    </div>
    <button-component class="send-button" size="lg" display="block" type="danger">Enviar</button-component>
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

.send-button {
  width: 100%;
}

.validEmail {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

</style>
