<script setup>
import { ref } from "@vue/reactivity";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const changeLocale = (value) => {
  locale.value = value;
};

const showClass = ref(false);

const toggleShow = () => {
  showClass.value = !showClass.value;
};
</script>

<template>
  <div class="contain">
    <button class="button" @click="toggleShow">{{ locale }}</button>
    <div class="localeContain" :class="{ show: showClass }">
      <button @click="changeLocale('en')">en</button>
      <button @click="changeLocale('es')">es</button>
    </div>
  </div>
</template>

<style scoped>
.contain {
  position: relative;
}
.button {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--border-color);
  padding: 0.5em 0.7em;
  border-radius: 5px;
  cursor: pointer;
}

.localeContain {
  max-height: 0;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  top: 2em;
  right: 0;
  background: var(--color-bg-navbar);
  width: 5rem;
  padding: 0.2em;
  border-radius: 5px;
  transition: all 0.3s ease-in;
}

.show {
  visibility: visible;
  height: auto;
  max-height: 300px;
  top: 2.5em;
  opacity: 1;
  transition: all 0.3s ease-out;
}

.localeContain button {
  display: block;
  width: 100%;
  margin-bottom: 0.2rem;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  cursor: pointer;
}
.localeContain button:last-child {
  margin-bottom: 0;
}
</style>
