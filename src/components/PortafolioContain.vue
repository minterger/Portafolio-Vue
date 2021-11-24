<template>
  <portafolio-navbar />
  <div class="container">
    <hello-world />
  </div>
</template>

<script>
import PortafolioNavbar from "./PortafolioNavbar.vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "PortafolioContain",
  components: {
    PortafolioNavbar,
    HelloWorld,
  },
  setup() {},
};
</script>

<style scoped>
.container {
  padding-top: 70px;
  max-width: 960px;
  margin: 0 auto;
}
</style>
