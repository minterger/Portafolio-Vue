<script setup>
import { inject, watch } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import HomeComponent from "../components/HomeComponent.vue";

const { t, locale } = useI18n();

const text = inject("textHeader");

text.value = t("textMoreHeader.home");

watch(locale, () => {
  text.value = t("textMoreHeader.home");
});
</script>

<template>
  <div>
    <div class="title-border-bottom">
      <h1>{{ text }}</h1>
    </div>

    <home-component />
  </div>
</template>
