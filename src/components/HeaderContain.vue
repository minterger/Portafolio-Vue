<script setup>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import imgPerfil from "../assets/Perfil.webp";
import background from "../assets/background-header.jpeg";

const text = inject("textHeader");

const backgroundImage = ref(`url("${background}")`);

// slow scroll animation
const scrollToContent = () => {
  const content = document.getElementById("content");
  content.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <header class="head">
    <transition name="fade" mode="out-in">
      <div :key="text">
        <div class="perfil">
          <div class="info">
            <h1>Leonel Menci</h1>
            <p>
              {{ $t("headerContain.description") }}
            </p>
            <p>
              {{ $t("headerContain.info") }}
            </p>
          </div>

          <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                <path
                  fill="#FF0066"
                  d="M49.5,-65.4C58.2,-51.8,55.1,-30.5,54.2,-12.9C53.4,4.7,54.7,18.5,49.1,28.6C43.6,38.6,31.1,44.8,17.6,50.9C4.1,57,-10.5,62.8,-22.5,59.5C-34.5,56.1,-44.1,43.5,-53.7,29.7C-63.3,15.8,-73,0.6,-73.4,-15.7C-73.8,-32,-65,-49.4,-51.2,-62.2C-37.4,-75,-18.7,-83.1,0.9,-84.1C20.4,-85.2,40.9,-79.1,49.5,-65.4Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>

            <image
              width="150"
              height="150"
              preserveAspectRatio="xMinYMid meet"
              x="25"
              y="15"
              :xlink:href="imgPerfil"
              clip-path="url(#user-space)"
            />
          </svg>
        </div>

        <div class="contain-more">
          <h1>{{ text }}</h1>

          <i class="bx bx-chevron-down arrow" @click="scrollToContent"></i>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.head {
  color: white;

  --height-nav: 42px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: var(--height-nav);

  background-image: v-bind(backgroundImage);
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - var(--height-nav));
}

.contain-more {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  left: 0;
  bottom: 0px;
  text-align: center;
}

.contain-more h1 {
  margin: 0;
}

.arrow {
  height: 60px;
  font-size: 4rem;
  margin: auto;

  color: white;
  background: transparent;
  border: none;

  cursor: pointer;
  animation: arrow-down 2s ease-in-out infinite;
}

/* keyframe arrow */
@keyframes arrow-down {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(-8px);
  }
}

.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
}

.perfil .info {
  margin: auto 30px;
  max-width: 400px;
}

.perfil svg {
  width: 350px;
  margin-right: 30px;
}

@media screen and (max-width: 630px) {
  .perfil {
    flex-direction: column-reverse;
    align-items: center;
  }

  .perfil .info {
    margin: 0;
    text-align: center;
  }

  .perfil svg {
    width: 270px;
    margin: 0;
  }
}
</style>
