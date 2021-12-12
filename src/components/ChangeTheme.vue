<script setup>
import { onMounted, ref } from "@vue/runtime-core";
const bodyClass = document.body.classList;
const themeValue = ref("");

const savedTheme = (theme) => {
  if (bodyClass.contains(theme + "-theme")) {
    localStorage.setItem("theme", theme);
    themeValue.value = theme;
  } else {
    localStorage.setItem("theme", "");
    themeValue.value = theme === "dark" ? "white" : "dark";
  }
};

const changeTheme = () => {
  // si la media query es true, cambiar el tema
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    bodyClass.toggle("white-theme");
    // si se cambia el tema guardarlo en localStorage
    savedTheme("white");
  } else {
    bodyClass.toggle("dark-theme");
    // si se cambia el tema guardarlo en localStorage
    savedTheme("dark");
  }
};
onMounted(() => {
  // si el tema esta guardado en el localStorage, cambiar el tema
  const theme = localStorage.getItem("theme");
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  if (theme === "dark") {
    bodyClass.add("dark-theme");
    savedTheme(theme);
    return;
  }
  if (theme === "white") {
    bodyClass.add("white-theme");
    savedTheme(theme);
    return;
  }
  if (preference.matches) {
    savedTheme("white");
    return;
  }
  savedTheme("dark");
});
</script>

<template>
  <button @click.prevent="changeTheme" class="change-theme">
    <i class="bx" :class="[themeValue === 'dark' ? 'bxs-sun' : 'bxs-moon']"></i>
  </button>
</template>

<style scoped>
.change-theme {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.59);
  color: white;
  font-size: 1.5rem;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: none;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;
}
.change-theme:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
