<script setup>
import ChangeTheme from "./components/ChangeTheme.vue";
import PortafolioNavbar from "./components/PortafolioNavbar.vue";

import HeaderContain from "./components/HeaderContain.vue";
import FooterContain from "./components/FooterContain.vue";

import ContainNotification from "./components/ContainNotification.vue";

import { provide, ref } from "@vue/runtime-core";

let textHeader = ref("Cargando");

let notifications = ref([]);

provide("notifications", notifications);

provide("textHeader", textHeader);
</script>

<template>
  <portafolio-navbar />

  <header-contain></header-contain>

  <main class="container" id="content">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </main>

  <contain-notification />

  <footer-contain></footer-contain>

  <change-theme />
</template>

<style>
:root {
  /* white theme colors */
  --white-color-bg-modal: #fff;

  --white-color-bg-navbar: #f0f0f0;
  --white-color-bg: #fff;
  --white-color-bg-hover: #1f3cbfe3;
  --white-color-text: rgb(51, 51, 51);
  --white-color-text-secondary: #1f3cbfe3;
  --white-color-text-hover: rgb(255, 255, 255);
  --white-color-text-primary: #333;

  --white-border-color: #212d46;

  --white-button-primary-bg: #f0f0f0;
  --white-button-primary-bg-hover: #fff;
  --white-button-primary-text: #333;
  --white-button-primary-text-hover: #333;
  --white-button-primary-border: #212d46;

  --white-button-secondary-bg: #1f3cbf;
  --white-button-secondary-bg-hover: #2a44ba;
  --white-button-secondary-text: rgb(238, 238, 238);
  --white-button-secondary-text-hover: rgb(238, 238, 238);
  --white-button-secondary-border: #1f3cbf;

  --white-button-success-bg: #00800b;
  --white-button-success-bg-hover: #00ae0e;
  --white-button-success-text: rgb(238, 238, 238);
  --white-button-success-text-hover: rgb(238, 238, 238);
  --white-button-success-border: #00800b;

  --white-button-danger-bg: #cc0000;
  --white-button-danger-bg-hover: #dd0202;
  --white-button-danger-text: rgb(238, 238, 238);
  --white-button-danger-text-hover: rgb(238, 238, 238);
  --white-button-danger-border: #cc0000;

  --white-footer-background: #1f3cbfe3;

  --white-form-input-bg: #f0f0f0;
  --white-form-input-text: #333;
  --white-form-input-border: #212d46;

  /* dark Theme Colors */
  --dark-color-bg-modal: #0d121c;

  --dark-color-bg-navbar: #030f12;
  --dark-color-bg: #0d121c;
  --dark-color-bg-hover: #121b2b;
  --dark-color-text: rgb(218, 218, 218);
  --dark-color-text-secondary: #2474ff;
  --dark-color-text-hover: rgb(255, 255, 255);
  --dark-color-text-primary: white;

  --dark-border-color: #212d46;

  --dark-button-primary-bg: #030f12;
  --dark-button-primary-bg-hover: #121b2b;
  --dark-button-primary-text: white;
  --dark-button-primary-text-hover: white;
  --dark-button-primary-border: #212d46;

  --dark-button-secondary-bg: #1f3cbf;
  --dark-button-secondary-bg-hover: #2a44ba;
  --dark-button-secondary-text: rgb(238, 238, 238);
  --dark-button-secondary-text-hover: rgb(238, 238, 238);
  --dark-button-secondary-border: #1f3cbf;

  --dark-button-success-bg: #00800b;
  --dark-button-success-bg-hover: #00ae0e;
  --dark-button-success-text: rgb(238, 238, 238);
  --dark-button-success-text-hover: rgb(238, 238, 238);
  --dark-button-success-border: #00800b;

  --dark-button-danger-bg: #cc0000;
  --dark-button-danger-bg-hover: #dd0202;
  --dark-button-danger-text: rgb(238, 238, 238);
  --dark-button-danger-text-hover: rgb(238, 238, 238);
  --dark-button-danger-border: #cc0000;

  --dark-footer-background: #070d13e3;

  --dark-form-input-bg: #030f12;
  --dark-form-input-text: white;
  --dark-form-input-border: #212d46;
}

body {
  --color-bg-modal: var(--white-color-bg-modal);

  --color-bg-navbar: var(--white-color-bg-navbar);
  --color-bg: var(--white-color-bg);
  --color-bg-hover: var(--white-color-bg-hover);
  --color-text: var(--white-color-text);
  --color-text-secondary: var(--white-color-text-secondary);
  --color-text-hover: var(--white-color-text-hover);
  --color-text-primary: var(--white-color-text-primary);

  --border-color: var(--white-border-color);

  --button-primary-bg: var(--white-button-primary-bg);
  --button-primary-bg-hover: var(--white-button-primary-bg-hover);
  --button-primary-text: var(--white-button-primary-text);
  --button-primary-text-hover: var(--white-button-primary-text-hover);
  --button-primary-border: var(--white-button-primary-border);

  --button-secondary-bg: var(--white-button-secondary-bg);
  --button-secondary-bg-hover: var(--white-button-secondary-bg-hover);
  --button-secondary-text: var(--white-button-secondary-text);
  --button-secondary-text-hover: var(--white-button-secondary-text-hover);
  --button-secondary-border: var(--white-button-secondary-border);

  --button-success-bg: var(--white-button-success-bg);
  --button-success-bg-hover: var(--white-button-success-bg-hover);
  --button-success-text: var(--white-button-success-text);
  --button-success-text-hover: var(--white-button-success-text-hover);
  --button-success-border: var(--white-button-success-border);

  --button-danger-bg: var(--white-button-danger-bg);
  --button-danger-bg-hover: var(--white-button-danger-bg-hover);
  --button-danger-text: var(--white-button-danger-text);
  --button-danger-text-hover: var(--white-button-danger-text-hover);
  --button-danger-border: var(--white-button-danger-border);

  --footer-background: var(--white-footer-background);

  --form-input-bg: var(--white-form-input-bg);
  --form-input-text: var(--white-form-input-text);
  --form-input-border: var(--white-form-input-border);
}

body.dark-theme {
  --color-bg-modal: var(--dark-color-bg-modal);

  --color-bg-navbar: var(--dark-color-bg-navbar);
  --color-bg: var(--dark-color-bg);
  --color-bg-hover: var(--dark-color-bg-hover);
  --color-text: var(--dark-color-text);
  --color-text-secondary: var(--dark-color-text-secondary);
  --color-text-hover: var(--dark-color-text-hover);
  --color-text-primary: var(--dark-color-text-primary);

  --border-color: var(--dark-border-color);

  --button-primary-bg: var(--dark-button-primary-bg);
  --button-primary-bg-hover: var(--dark-button-primary-bg-hover);
  --button-primary-text: var(--dark-button-primary-text);
  --button-primary-text-hover: var(--dark-button-primary-text-hover);
  --button-primary-border: var(--dark-button-primary-border);

  --button-secondary-bg: var(--dark-button-secondary-bg);
  --button-secondary-bg-hover: var(--dark-button-secondary-bg-hover);
  --button-secondary-text: var(--dark-button-secondary-text);
  --button-secondary-text-hover: var(--dark-button-secondary-text-hover);
  --button-secondary-border: var(--dark-button-secondary-border);

  --button-success-bg: var(--dark-button-success-bg);
  --button-success-bg-hover: var(--dark-button-success-bg-hover);
  --button-success-text: var(--dark-button-success-text);
  --button-success-text-hover: var(--dark-button-success-text-hover);
  --button-success-border: var(--dark-button-success-border);

  --button-danger-bg: var(--dark-button-danger-bg);
  --button-danger-bg-hover: var(--dark-button-danger-bg-hover);
  --button-danger-text: var(--dark-button-danger-text);
  --button-danger-text-hover: var(--dark-button-danger-text-hover);
  --button-danger-border: var(--dark-button-danger-border);

  --footer-background: var(--dark-footer-background);

  --form-input-bg: var(--dark-form-input-bg);
  --form-input-text: var(--dark-form-input-text);
  --form-input-border: var(--dark-form-input-border);
}

@media (prefers-color-scheme: dark) {
  body {
    --color-bg-modal: var(--dark-color-bg-modal);

    --color-bg-navbar: var(--dark-color-bg-navbar);
    --color-bg: var(--dark-color-bg);
    --color-bg-hover: var(--dark-color-bg-hover);
    --color-text: var(--dark-color-text);
    --color-text-secondary: var(--dark-color-text-secondary);
    --color-text-hover: var(--dark-color-text-hover);
    --color-text-primary: var(--dark-color-text-primary);

    --border-color: var(--dark-border-color);

    --button-primary-bg: var(--dark-button-primary-bg);
    --button-primary-bg-hover: var(--dark-button-primary-bg-hover);
    --button-primary-text: var(--dark-button-primary-text);
    --button-primary-text-hover: var(--dark-button-primary-text-hover);
    --button-primary-border: var(--dark-button-primary-border);

    --button-secondary-bg: var(--dark-button-secondary-bg);
    --button-secondary-bg-hover: var(--dark-button-secondary-bg-hover);
    --button-secondary-text: var(--dark-button-secondary-text);
    --button-secondary-text-hover: var(--dark-button-secondary-text-hover);
    --button-secondary-border: var(--dark-button-secondary-border);

    --button-success-bg: var(--dark-button-success-bg);
    --button-success-bg-hover: var(--dark-button-success-bg-hover);
    --button-success-text: var(--dark-button-success-text);
    --button-success-text-hover: var(--dark-button-success-text-hover);
    --button-success-border: var(--dark-button-success-border);

    --button-danger-bg: var(--dark-button-danger-bg);
    --button-danger-bg-hover: var(--dark-button-danger-bg-hover);
    --button-danger-text: var(--dark-button-danger-text);
    --button-danger-text-hover: var(--dark-button-danger-text-hover);
    --button-danger-border: var(--dark-button-danger-border);

    --footer-background: var(--dark-footer-background);

    --form-input-bg: var(--dark-form-input-bg);
    --form-input-text: var(--dark-form-input-text);
    --form-input-border: var(--dark-form-input-border);
  }

  body.white-theme {
    --color-bg-modal: var(--white-color-bg-modal);

    --color-bg-navbar: var(--white-color-bg-navbar);
    --color-bg: var(--white-color-bg);
    --color-bg-hover: var(--white-color-bg-hover);
    --color-text: var(--white-color-text);
    --color-text-secondary: var(--white-color-text-secondary);
    --color-text-hover: var(--white-color-text-hover);
    --color-text-primary: var(--white-color-text-primary);

    --border-color: var(--white-border-color);

    --button-primary-bg: var(--white-button-primary-bg);
    --button-primary-bg-hover: var(--white-button-primary-bg-hover);
    --button-primary-text: var(--white-button-primary-text);
    --button-primary-text-hover: var(--white-button-primary-text-hover);
    --button-primary-border: var(--white-button-primary-border);

    --button-secondary-bg: var(--white-button-secondary-bg);
    --button-secondary-bg-hover: var(--white-button-secondary-bg-hover);
    --button-secondary-text: var(--white-button-secondary-text);
    --button-secondary-text-hover: var(--white-button-secondary-text-hover);
    --button-secondary-border: var(--white-button-secondary-border);

    --button-success-bg: var(--white-button-success-bg);
    --button-success-bg-hover: var(--white-button-success-bg-hover);
    --button-success-text: var(--white-button-success-text);
    --button-success-text-hover: var(--white-button-success-text-hover);
    --button-success-border: var(--white-button-success-border);

    --button-danger-bg: var(--white-button-danger-bg);
    --button-danger-bg-hover: var(--white-button-danger-bg-hover);
    --button-danger-text: var(--white-button-danger-text);
    --button-danger-text-hover: var(--white-button-danger-text-hover);
    --button-danger-border: var(--white-button-danger-border);

    --footer-background: var(--white-footer-background);

    --form-input-bg: var(--white-form-input-bg);
    --form-input-text: var(--white-form-input-text);
    --form-input-border: var(--white-form-input-border);
  }
}

body {
  font-family: sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.2s ease-in-out, background 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.text-primary {
  color: var(--color-text);
}

.text-secondary {
  color: var(--color-text-secondary);
}

.title-border-bottom {
  border-bottom: 1px dashed var(--border-color);
}

.container {
  max-width: 960px;
  min-height: calc(100vh - 43px);
  margin: 0px auto;
  padding: 25px 15px 25px 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
