<script setup>

import { inject, ref } from 'vue';

let notifications = inject("notifications")

const props = defineProps({
  notification: {
    type: Object,
    required: true,
  }
});

const borderColor = {
  success: 'green',
  error: 'red',
};

let color = ref('');

if (props.notification.type === 'success') {
  color.value = borderColor.success;
} else {
  color.value = borderColor.error;
}

const removeNotification = () => {
  const index = notifications.value.indexOf(props.notification);
  notifications.value.splice(index, 1);
};

setTimeout(removeNotification, 5000);

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
    display: flex;
    flex-direction: row;
    animation: show .3s ease-in-out;
  }

  @keyframes show {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    50% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0px);
    }
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