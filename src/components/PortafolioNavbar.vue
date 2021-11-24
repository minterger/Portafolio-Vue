<template>
  <div id="nav">
    <div class="nav-contain">
      <a class="nav-brand" href="#app">Minterger</a>
      <ul class="nav-navbar">
        <li class="nav-items">
          <a class="nav-links" href="#app">Home</a>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="#proyects">Proyects</a>
        </li>
        <li class="nav-items">
          <a class="nav-links" href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#nav {
  background: #fff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
}

.nav-contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 980px;
}

.nav-brand {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.nav-navbar {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-items {
  margin-right: 1em;
}
.nav-items:last-child {
  margin-right: 0;
}

.nav-links {
  color: rgb(51, 51, 51);
  text-decoration: none;
  font-size: 0.9em;
  padding: 0.5em;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
}

.nav-links:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(51, 51, 51);
}

@media (max-width: 768px) {
  .nav-navbar {
    display: none;
  }
}
</style>
