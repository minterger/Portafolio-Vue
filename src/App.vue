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
</style>
