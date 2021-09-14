<template>
  <Navbar />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue'


export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent( () => import( /* webpackChunkName: "Navbar" */ './modules/shared/components/Navbar' ))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  display: block;
  background-color: blue;
}

.container {
  margin: 0 auto;
  max-width: calc(100% - 50px);
  width: 1200px;
}

.container.medium {
	width: 900px;
}

@media screen and (max-width: 1680px) {

  .container {
    width: 1200px;
  }

    .container.medium {
      width: 900px;
    }

}

@media screen and (max-width: 1280px) {

  .container {
    width: 960px;
  }

    .container.medium {
      width: 720px;
    }

}

@media screen and (max-width: 980px) {

  .container {
    width: 100%;
  }

    .container.medium {
      width: 75%;
    }

}

@media screen and (max-width: 736px) {

  .container {
    width: 100%;
    max-width: calc(100% - 30px);
  }

    .container.medium {
      width: 100%;
    }

}
</style>
