<template>
  <div class="main">
    <div class="container shadow">
      <Beer />
      <Title firstText="Bem vindo ao maior delivery" secondText=" de bebidas do Brasil!" />
      <Input />
    </div>
  </div>
</template>

<script>
import Beer from "./components/Beer.vue";
import Input from "./components/Input.vue";
import Title from "./components/Title.vue";

export default {
  name: "Main",
  components: {
    Beer,
    Input,
    Title
  },
  data() {
    return {
      list: [],
      loading: true,
      show: true
    };
  },
  methods: {}
};
</script>

<style scoped>
html,
body {
  background-color: rgb(175, 11, 11);
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 800px) {
  .main {
    background: #af0b0b;
    background-image: none !important;
  }

  .shadow {
    background: none;
  }
}

.main {
  background-image: url("../../assets/img/background1.png");
  background-size: cover;
  background-blend-mode: color-dodge;
  background-repeat: no-repeat;
  background-position-x: 45rem;
  background-position-y: -5rem;
  height: 90vh;
}

.shadow {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(22, 22, 22, 0.52) 15%,
    rgba(0, 0, 0, 0.9) 100%
  );
}

.container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
