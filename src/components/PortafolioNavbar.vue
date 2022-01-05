<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();

let ToggleMenu = ref(false);

const toggleMenu = () => {
  ToggleMenu.value = !ToggleMenu.value;
};

// observar route si canvia revisar si el menu esta abierto y cerrarlo

watch(
  () => route.path,
  () => {
    if (ToggleMenu.value) {
      ToggleMenu.value = false;
    }
  }
);
</script>

<template>
  <div id="nav">
    <div class="nav-contain">
      <router-link class="nav-brand" to="/">Portafolio</router-link>
      <ul class="nav-navbar" :class="{ show: ToggleMenu }">
        <li class="nav-items">
          <router-link class="nav-links" to="/">Home</router-link>
        </li>
        <li class="nav-items">
          <router-link class="nav-links" to="/proyects">Proyectos</router-link>
        </li>
        <li class="nav-items">
          <router-link class="nav-links" to="/contact">Contactar</router-link>
        </li>
        <li class="nav-items">
          <a class="nav-links important" target="_blank" href="/Curriculum.pdf">
            Curriculum
          </a>
        </li>
      </ul>
      <button @click="toggleMenu" class="nav-toggle">
        <i class="bx bx-menu"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
#nav {
  background: var(--color-bg-navbar);
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  box-sizing: border-box;
  transition: background 0.2s ease-in-out;
}

.nav-contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
}

.nav-brand {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.nav-navbar {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-items {
  margin-right: 0.8em;
}
.nav-items:last-child {
  margin-right: 0;
}

.nav-links {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.9em;
  padding: 0.5em 0.7em;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
}

.nav-links:hover {
  color: var(--color-text-hover);
  background-color: var(--color-bg-hover);
}

.important {
  color: var(--button-secondary-text);
  background-color: var(--button-secondary-bg);
}

.important:hover {
  color: var(--button-secondary-text-hover);
  background-color: var(--button-secondary-bg-hover);
}

.nav-toggle {
  background: none;
  display: none;
  font-size: 1.5em;
  color: var(--color-text);
  cursor: pointer;
  border: none;
  width: 50px;
  height: 50px;
  font-size: 2rem;
}

@media (max-width: 568px) {
  #nav {
    height: 50px;
  }

  .nav-links {
    font-size: 1.1rem;
    padding: 0.8em 0em;
    display: block;
    text-align: center;
  }

  .nav-brand {
    font-size: 1.5em;
  }

  .nav-navbar {
    display: flex;
    position: fixed;
    background: var(--color-bg-navbar);
    top: 40px;
    right: 0px;
    width: 100vw;
    height: 0;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .nav-navbar.show {
    height: calc(100vh - 40px);
    transition: all 0.3s ease;
  }

  .nav-items:last-child {
    margin: 10px 2px;
  }

  .nav-items {
    margin: 10px 2px;
  }

  .nav-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
