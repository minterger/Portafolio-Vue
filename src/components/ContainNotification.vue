<script setup>
import { inject } from "@vue/runtime-core";
import { computed } from "vue";
import Notification from "./Notification.vue";

let notifications = inject("notifications");

</script>

<template>
  <div class="contain-notification">
    <transition-group name="notification">
      <notification
        v-for="(notification) of notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition-group>
  </div>
</template>

<style scoped>
.contain-notification {
  position: fixed;
  top: 42px;
  right: 0;
  width: 100%;
  max-width: 250px;
  padding: 0 10px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.notification-enter-active {
  animation: show 0.5s;
}
.notification-leave-active {
  animation: hide 0.5s;
}
@keyframes show {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  50% {
    transform: translateX(-15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes hide {
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}


@media (max-width: 568px) {
  .contain-notification {
    top: 50px;
  }
}
</style>
