<template>
  <div class="main">
    <div class="container shadow">
      <Beer class="check" />
      <Title firstText="Bem vindo ao maior delivery" secondText=" de bebidas do Brasil!" />
      <Input class="upper" />
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
  props: {
    show: Boolean
  },
  data() {
    return {
      list: [],
      loading: true
    };
  },
  beforeCreate: function() {},
  methods: {}
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .main {
    background-size: auto;
    background-position-x: 0 !important;
    background-position-y: -1rem !important;
    height: calc(100% - 70px);
  }

  .shadow {
    background: none;
  }

  .check {
    display: none;
  }

  .upper {
    bottom: 10% !important;
  }
}

.upper {
  position: fixed;
  bottom: 40%;
}

.main {
  background-image: url("../../assets/img/background1.png");
  background-size: cover;
  background-blend-mode: color-dodge;
  background-repeat: no-repeat;
  background-position-x: 30rem;
  background-position-y: -5rem;
  height: 90vh;
}

.shadow {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgb(109, 7, 7) 0%,
    rgba(22, 22, 22, 0.9) 50%,
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
