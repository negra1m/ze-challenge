<template>
  <div class="input">
    <input type="text" placeholder="Insira o seu endereço..." alt="Insira aqui seu endereço" />
    <img src="../../../assets/img/pointer.png" alt="Icone de Mapa, campo para inserção do endereço" />
  </div>
</template>

<script>
export default {
  name: "Input",
  components: {},
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

<style>
.input {
  width: 30rem;
  height: 48px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
  /* background-color: rgba(255, 255, 255, 0.76); */
  box-shadow: 0px 0px 10px -2px rgb(255, 255, 255);
}

.input > input {
  font-family: "Avenir";
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  text-decoration: wavy;
  color: white;
  font-size: 16px;
}

.input > img {
  height: 24px;
  margin-right: 10px;
}

@media only screen and (max-width: 800px) {
  .input {
    bottom: 20% !important;
    width: 350px;
    height: 48px;
  }
}
</style>
