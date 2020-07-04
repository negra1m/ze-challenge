<template>
  <div id="app">
    <Header />
    <!-- <router-view></router-view> -->
    <!-- <Footer /> -->
    <Beer />
  </div>
</template>

<script>
import Header from "./shared/components/Header.vue";
// import Footer from "./shared/components/Footer.vue";
import Beer from "./pages/main/components/Beer";

export default {
  name: "Ze",
  components: {
    Beer,
    Header
    // Footer
  }
};
</script>

<style>
html,
body {
  background-color: rgb(175, 11, 11);
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  font-family: "Avenir";
}

a {
  color: white;
  text-decoration: none;
  font-size: 12px;
}

p {
  padding: 0;
  margin: 0;
}
</style>
