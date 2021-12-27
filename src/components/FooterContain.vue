<script setup></script>

<template>
  <footer>
    <div class="footer-copyright">
      <p>
        © 2021 Copyright:
        <a href="https://www.linkedin.com/in/leonel-menci/"> Leonel Menci </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-copyright {
  background-color: var(--footer-background);
  color: #fff;
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 0.9em;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
}

.footer-copyright a {
  color: white;
  text-decoration: none;
}
</style>
