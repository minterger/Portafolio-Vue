<script setup>
import ChangeTheme from "./components/ChangeTheme.vue";
import PortafolioNavbar from "./components/PortafolioNavbar.vue";
</script>

<template>
  <portafolio-navbar />
  <main class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <change-theme />
</template>

<style>
body {
  --color-bg-navbar: #f0f0f0;
  --color-bg: #fff;
  --color-bg-hover: #1f3cbfe3;
  --color-text: rgb(51, 51, 51);
  --color-text-hover: rgb(255, 255, 255);
  --color-text-primary: #333;

  --border-color: #212d46;

  --button-primary-bg: #f0f0f0;
  --button-primary-bg-hover: #fff;
  --button-primary-text: #333;
  --button-primary-text-hover: #333;

  --button-secondary-bg: #1f3cbf;
  --button-secondary-bg-hover: #2a44ba;
  --button-secondary-text: rgb(238, 238, 238);
  --button-secondary-text-hover: rgb(238, 238, 238);
}

body.dark-theme {
  --color-bg-navbar: #030f12;
  --color-bg: #0d121c;
  --color-bg-hover: #121b2b;
  --color-text: rgb(218, 218, 218);
  --color-text-hover: rgb(255, 255, 255);
  --color-text-primary: white;

  --border-color: #212d46;

  --button-primary-bg: #030f12;
  --button-primary-bg-hover: #121b2b;
  --button-primary-text: white;
  --button-primary-text-hover: white;

  --button-secondary-bg: #1f3cbf;
  --button-secondary-bg-hover: #2a44ba;
  --button-secondary-text: rgb(238, 238, 238);
  --button-secondary-text-hover: rgb(238, 238, 238);
}

@media (prefers-color-scheme: dark) {
  body {
    --color-bg-navbar: #030f12;
    --color-bg: #0d121c;
    --color-bg-hover: #121b2b;
    --color-text: rgb(218, 218, 218);
    --color-text-hover: rgb(255, 255, 255);
    --color-text-primary: white;

    --border-color: #212d46;

    --button-primary-bg: #030f12;
    --button-primary-bg-hover: #121b2b;
    --button-primary-text: white;
    --button-primary-text-hover: white;

    --button-secondary-bg: #1f3cbf;
    --button-secondary-bg-hover: #2a44ba;
    --button-secondary-text: rgb(238, 238, 238);
    --button-secondary-text-hover: rgb(238, 238, 238);
  }

  body.white-theme {
    --color-bg-navbar: #f0f0f0;
    --color-bg: #fff;
    --color-bg-hover: #1f3cbfe3;
    --color-text: rgb(51, 51, 51);
    --color-text-hover: rgb(255, 255, 255);
    --color-text-primary: #333;

    --border-color: #212d46;

    --button-primary-bg: #f0f0f0;
    --button-primary-bg-hover: #fff;
    --button-primary-text: #333;
    --button-primary-text-hover: #333;

    --button-secondary-bg: #1f3cbf;
    --button-secondary-bg-hover: #2a44ba;
    --button-secondary-text: rgb(238, 238, 238);
    --button-secondary-text-hover: rgb(238, 238, 238);
  }
}

body {
  font-family: sans-serif;
  scroll-behavior: smooth;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}

.container {
  max-width: 960px;
  margin: 0px auto;
  padding: 70px 10px 0px 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .2s ease-out;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
