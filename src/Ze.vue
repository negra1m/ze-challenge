<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./shared/components/Header.vue";
import Footer from "./shared/components/Footer.vue";

export default {
  name: "Ze",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html,
body,
#app {
  background-color: rgb(109, 7, 7);
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-family: "Avenir";
}

a {
  color: white;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 700;
}

p,
h2 {
  padding: 0;
  margin: 0;
}
</style>
