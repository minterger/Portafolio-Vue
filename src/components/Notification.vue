<script setup>
import { inject, onBeforeUnmount, onBeforeUpdate, ref } from "vue";

// variables injectadas desde otro componente
let notifications = inject("notifications");

// const con los props
const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
});

// variable que contiene los tipos de notificaciones con su color
const borderLeftColor = {
  success: "green",
  error: "red",
};

// variable de color que se envia a los estilos
let color = ref("");

// revisa que tipo es y elije el color de bordeLeftColor
if (props.notification.type === "success") {
  color.value = borderLeftColor.success;
} else {
  color.value = borderLeftColor.error;
}

/**
 * Función para remover la notificación
 */
const removeNotification = () => {
  notifications.value = notifications.value.filter(
    (notification) => notification.id !== props.notification.id
  );
};

// timeout para eliminar la notificación
let timeout = setTimeout(removeNotification, 5000);

// antes que se desmonte el componente limpiar el timeout
onBeforeUnmount(() => {
  clearTimeout(timeout);
});
</script>

<template>
  <div class="notification">
    <div class="notification-content">
      <div class="notification-message">
        {{ props.notification.message }}
      </div>
    </div>
    <div class="notification-close" @click="removeNotification()">
      <i class="bx bx-x"></i>
    </div>
  </div>
</template>

<style scoped>
.notification {
  margin-top: 10px;
  background: var(--color-bg);
  border-radius: 4px;
  border: 1px solid var(--border-color);
  border-left: 5px solid v-bind(color);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
}

.notification-content {
  padding: 10px;
}

.notification-close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  cursor: pointer;
  font-size: 30px;
}
</style>
