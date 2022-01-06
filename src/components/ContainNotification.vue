<script setup>
import { inject } from "@vue/runtime-core";
import { computed } from "vue";
import Notification from "./Notification.vue";

let notifications = inject("notifications");

// crear showNotifications si notifications.value.length > 0
const showNotifications = computed(() => {
  return notifications.value.length > 0;
}); 

</script>

<template>
  <div class="contain-notification" v-show="showNotifications">
    <notification
      v-for="(notification) of notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<style scoped>
.contain-notification {
  position: fixed;
  top: 42px;
  right: 0;
  width: 100%;
  max-width: 250px;
  height: auto;
  max-height: 100vh;
  overflow: hidden;
  padding: 0 10px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 568px) {
  .contain-notification {
    top: 50px;
  }
}
</style>
