<script setup>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";

const text = inject("textHeader");

const backgroundImage = ref(
  `url("/background-header.jpeg")`
);

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
              xlink:href="https://gpxstore.com/wp-content/uploads/2020/02/Perfil--e1580795304170-400x400.jpeg"
              clip-path="url(#user-space)"
            />
          </svg>

          <div class="info">
            <h2>Leonel Menci</h2>
            <p>
              Programador FullStack (MEVN Stack) apasionado por la tecnología y
              la programación
            </p>
          </div>
        </div>

        <div class="contain-more">
          <h1>{{ text }}</h1>

          <svg
            class="arrow"
            @click="scrollToContent"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 2 25 25"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.head {
  color: white;

  --height-nav: 40px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: var(--height-nav);

  background-image: v-bind(backgroundImage);
  background-size: cover;
  background-position: center;
  height: calc(100vh - var(--height-nav));
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
  color: white;
  background: transparent;
  border: none;

  cursor: pointer;
  animation: arrow-down 2s ease-in-out infinite;
}

/* keyframe arrow */
@keyframes arrow-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}

.perfil {
  display: flex;
  justify-content: center;
}

.perfil .info {
  margin-top: 50px;
  max-width: 400px;
}

.perfil svg {
  width: 350px;
}

@media screen and (max-width: 650px) {
  .perfil {
    flex-direction: column;
    align-items: center;
  }

  .perfil .info {
    margin-top: 0px;
    text-align: center;
  }

  .perfil svg {
    width: 250px;
  }
}
</style>
