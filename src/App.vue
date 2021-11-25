<template>
  <portafolio-contain />
  <change-theme />
</template>

<script>
import PortafolioContain from "./components/PortafolioContain.vue";
import ChangeTheme from "./components/ChangeTheme.vue";

export default {
  components: { PortafolioContain, ChangeTheme },
};
</script>

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
  --color-bg-navbar: #030F12;
  --color-bg: #121b2b;
  --color-bg-hover: #121b2b;
  --color-text: rgb(218, 218, 218);
  --color-text-hover: rgb(255, 255, 255);
  --color-text-primary: white;
}

@media (prefers-color-scheme: dark) {
  body {
    --color-bg-navbar: #030F12;
    --color-bg: #121b2b;
    --color-bg-hover: #121b2b;
    --color-text: rgb(218, 218, 218);
    --color-text-hover: rgb(255, 255, 255);
    --color-text-primary: white;
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
