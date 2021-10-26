<template>
  <div id="nav">
    <span>Minterger</span>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      |
      <li>
        <router-link to="about">About</router-link>
      </li>
      <!-- <li>
        <router-link></router-link>
      </li> -->
    </ul>
  </div>
</template>

<style scoped>
#nav ul {
  list-style: none;
  padding: 0;
}

#nav ul li {
  display: inline-block;
  margin: 5px 5px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
