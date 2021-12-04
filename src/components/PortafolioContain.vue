<template>
  <portafolio-navbar />
  <main class="container">
    <!-- ver contenido de la ruta -->
    <router-view></router-view>
  </main>
</template>

<script>
import PortafolioNavbar from "./PortafolioNavbar.vue";

export default {
  name: "PortafolioContain",
  components: {
    PortafolioNavbar,
  },
  setup() {},
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0px auto;
  padding: 70px 10px 0px 10px;
}
</style>
