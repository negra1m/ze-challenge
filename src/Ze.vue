<template>
  <div id="app">
    <Header />
    <Main />
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
body {
  background-color: #af0b0b;
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
