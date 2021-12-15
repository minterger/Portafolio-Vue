<script setup>
import PortafolioContain from "./components/PortafolioContain.vue";
import ChangeTheme from "./components/ChangeTheme.vue";
</script>

<template>
  <portafolio-contain />
  <change-theme />
</template>

<style>
body {
  --color-bg-navbar: #f0f0f0;
  --color-bg: #fff;
  --color-bg-hover: rgba(0, 0, 0, 0.576);
  --color-text: rgb(51, 51, 51);
  --color-text-hover: rgb(255, 255, 255);
  --color-text-primary: #333;
}

body.dark-theme {
  --color-bg-navbar: #030f12;
  --color-bg: #0d121c;
  --color-bg-hover: #121b2b;
  --color-text: rgb(218, 218, 218);
  --color-text-hover: rgb(255, 255, 255);
  --color-text-primary: white;
}

@media (prefers-color-scheme: dark) {
  body {
    --color-bg-navbar: #030f12;
    --color-bg: #0d121c;
    --color-bg-hover: #121b2b;
    --color-text: rgb(218, 218, 218);
    --color-text-hover: rgb(255, 255, 255);
    --color-text-primary: white;

    --button-primary-bg: #030f12;
    --button-primary-bg-hover: #121b2b;
    --button-primary-text: white;
    --button-primary-text-hover: white;

    --button-secondary-bg: #f0f0f0;
    --button-secondary-bg-hover: #e0e0e0;
    --button-secondary-text: #333;
    --button-secondary-text-hover: #333;
  }

  body.white-theme {
    --color-bg-navbar: #f0f0f0;
    --color-bg: #fff;
    --color-bg-hover: rgba(0, 0, 0, 0.576);
    --color-text: rgb(51, 51, 51);
    --color-text-hover: rgb(255, 255, 255);
    --color-text-primary: #333;
  }
}

body {
  font-family: sans-serif;
  scroll-behavior: smooth;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
}
</style>
