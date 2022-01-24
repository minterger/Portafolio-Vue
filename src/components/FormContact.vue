<script setup>
import { computed, inject, reactive } from "vue";
import { useI18n } from "vue-i18n";
import ButtonComponent from "./ButtonComponent.vue";

// variables injectadas desde otro componente
// funcion para crear una nueva notificacion
const newNotification = inject("newNotification");

const { t } = useI18n();

// constante con los datos del formulario
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

/**
 * función para limpiar de elementos html
 * @param {string} str string a limpiar de tags html
 */
const limpiarhtml = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};

// computed con la variable formData.name limpia de tags html
let nameLimpio = computed(() => {
  return limpiarhtml(formData.name);
});

// computed con la variable formData.message limpia de tags html
let messageLimpio = computed(() => {
  return limpiarhtml(formData.message);
});

/**
 * valida que el email tenga un formato correcto
 * @param {string} email email a validar
 */
const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// computed que retorna true si el email es valido
const isNoValidEmail = computed(() => {
  if (formData.email.length > 5) {
    return !validateEmail(formData.email);
  }
});

/**
 * función para enviar el formulario
 */
const sendEmail = async () => {
  if (
    formData.name.length > 0 &&
    formData.email.length > 0 &&
    formData.message.length > 0 &&
    validateEmail(formData.email)
  ) {
    try {
      const response = await fetch(
        "https://email-sender-minterger.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameLimpio.value,
            email: formData.email,
            message: messageLimpio.value,
          }),
        }
      );
      if (response.status === 200) {
        formData.name = "";
        formData.email = "";
        formData.message = "";

        // crea una notificación de éxito
        newNotification(t('formTexts.success'), "success");
      }
    } catch (error) {
      console.log(error);

      // crea una notificación de error al enviar el formulario
      newNotification(t('fotmTexts.error'), "error");
    }
  } else {
    // crea una notificación de error porque no se llenaron todos los campos
    newNotification(t('formTexts.cleanError'), "error");
  }
};
</script>

<template>
  <form @submit.prevent="sendEmail">
    <div>
      <label for="name">{{$t('formTexts.name')}}</label>
      <input type="text" name="name" id="name" v-model="formData.name" />
    </div>
    <div>
      <label for="email">{{$t('formTexts.email')}}</label>
      <input type="email" id="email" name="email" v-model="formData.email" />
      <span class="validEmail" v-if="isNoValidEmail"
        >{{$t('formTexts.validEmail')}}</span
      >
    </div>
    <div>
      <label for="">{{$t('formTexts.message')}}</label>
      <textarea name="message" v-model="formData.message"></textarea>
    </div>
    <button-component
      class="send-button"
      size="lg"
      display="block"
      type="danger"
      >{{$t('formTexts.send')}}</button-component
    >
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
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
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
