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
  max-width: 960px;
  margin: 0px auto;
  padding: 70px 10px 0px 10px;
}
</style>
