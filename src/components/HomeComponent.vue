<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const educations = ref([]);

const educationsFillIn = () => {
  educations.value = [
    {
      title: t("homeTexts.educations[0].title"),
      start: t("homeTexts.educations[0].start"),
      end: t("homeTexts.educations[0].end"),
    },
    {
      title: t("homeTexts.educations[1].title"),
      start: t("homeTexts.educations[1].start"),
      end: t("homeTexts.educations[1].end"),
    },
    {
      title: t("homeTexts.educations[2].title"),
      start: t("homeTexts.educations[2].start"),
      end: t("homeTexts.educations[2].end"),
    },
  ];
};

educationsFillIn();

watch(locale, educationsFillIn);

const stacks = ref([
  {
    title: "Html",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "Css",
    iconUrl: "https://i.ibb.co/4jtgnCF/pngwing-com.png",
  },
  {
    title: "Js",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    title: "Vue",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
  },
  {
    title: "Node.js",
    iconUrl:
      "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
  },
  {
    title: "Express",
    iconUrl: "https://i.ibb.co/sFbLqxH/pngegg-1.png",
  },
  {
    title: "MongoDB",
    iconUrl: "https://i.ibb.co/MkG6G9p/pngegg-2.png",
  },
  {
    title: "Mongoose",
    iconUrl: "https://i.ibb.co/6JS1n4M/pngfind-com-js-logo-png-4309574.png",
  },
  {
    title: "Bootstrap",
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
  },
  {
    title: "Tailwind",
    iconUrl:
      "https://i.ibb.co/pxsXJ4M/Method-Draw-Image.png",
  },
  {
    title: "Socket.io",
    iconUrl:
      "https://i.ibb.co/jrS14Bw/kisspng-socket-io-node-js-express-js-npm-network-socket-protocol-5b21d1b8094784-36637107152894303203.png",
  },
  {
    title: "Git",
    iconUrl: "https://i.ibb.co/zrczrNs/5847f981cef1014c0b5e48be.png",
  },
  {
    title: "GitHub",
    iconUrl: "https://i.ibb.co/7Gr1P48/pngegg-3.png",
  },
]);
</script>

<template>
  <div class="hello">
    <h3>{{ $t("homeTexts.infoTitle") }}</h3>
    <p v-html="$t('homeTexts.infoDescription')"></p>

    <h3>{{ $t("homeTexts.moreInfoTitle") }}</h3>
    <p>
      {{ $t("homeTexts.moreInfoDescription") }}
    </p>

    <h3>{{ $t("homeTexts.educationTitle") }}</h3>
    <!-- <p>
      Actualmente me encuentro en la carrera de Tecnicatura en computación y
      redes, en el Instituto de Educación Superior 9-021. Tambien estoy cursando
      el curso de Desarrollo Web Full Stack de Argentina Programa.
    </p> -->
    <div v-for="education of educations" :key="education.title">
      <strong><i class="bx bxs-right-arrow"></i> {{ education.title }}</strong>
      <p class="margin-education">
        <strong>{{ $t("homeTexts.educationStartDateMsg") }}</strong>
        {{ education.start }}
        <br />
        <strong>{{ $t("homeTexts.educationEndDateMsg") }}</strong>
        {{ education.end }}
      </p>
    </div>

    <h3>Skills</h3>
    <div class="grid-container">
      <div v-for="(stack, index) of stacks" :key="index" class="grid-item">
        <span class="title">{{ stack.title }}</span>
        <img :src="stack.iconUrl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin-education {
  margin-left: 1.4rem;
  margin-bottom: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 20px;
  font-size: 20px;
  height: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.2s ease-in-out;
}

.grid-item:hover .title {
  opacity: 1;
  top: -45px;
  visibility: visible;
}

.title {
  visibility: hidden;
  opacity: 0;
  font-size: 20px;
  position: absolute;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  height: 30px;
  line-height: 30px;
  top: -30px;
  left: 0;
  right: 0;
  background: #000;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
}

/* flecha inferior con pseudo elemento after */
.title::before {
  z-index: -1;
  content: "";
  position: absolute;
  bottom: -13px;
  left: 50%;
  height: 15px;
  width: 15px;
  background: #000;
  transform: rotate(45deg) translateX(-50%);
}

.grid-item img {
  width: 100px;
}

h3 {
  color: var(--color-text-secondary);
  transition: color 0.3s ease-in-out;
}
</style>
