<script setup>
import { ref } from "@vue/reactivity";
import { m } from "../../dist/assets/vendor.839f2612";

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
]);
</script>

<template>
  <div class="hello">
    <h3>Mi Información</h3>
    <p>
      Hola me llamo <strong>Leonel Menci</strong>, soy programador full stack y
      desarrollador web. Apacionado por la programación y la tecnología, me
      encanta aprender nuevas tecnologías y frameworks.
    </p>

    <h3>Más sobre mi</h3>
    <p>
      Me considero una persona responsable, con una gran capacidad de adaptación
      y una gran capacidad de trabajo en equipo. Me gusta trabajar en equipo,
      con personas que me dan valor y que me dan apoyo.
    </p>

    <h3>Educación</h3>
    <p>
      Actualmente me encuentro en la carrera de Tecnicatura en computación y
      redes, en el Instituto de Educación Superior 9-021. Tambien estoy cursando
      el curso de Desarrollo Web Full Stack de Argentina Programa.
    </p>

    <h3>Stack de tecnologías</h3>
    <div class="grid-container">
      <div v-for="(stack, index) of stacks" :key="index" class="grid-item">
        <span class="title">{{ stack.title }}</span>
        <img :src="stack.iconUrl" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  background-color: var(--color-bg);
  border: 1px solid var(--border-color);
  padding: 20px;
  font-size: 20px;
  height: 100px;
  text-align: center;
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
