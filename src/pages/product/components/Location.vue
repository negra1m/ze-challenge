<template>
  <div class="info">
    <p>Seus produtos serão entregues em:</p>
    <span class="location">
      <img width="50px" src="assets/img/pointer.png" alt="Ícone de mapa" />
      <p>{{this.address}}</p>
    </span>
    <a @click="goToMain()">Alterar Endereço</a>
  </div>
</template>
<script>
export default {
  name: "Location",
  components: {},
  props: {
    address: String
  },
  methods: {
    goToMain: function() {
      this.$router.push({ name: "Main" });
      localStorage.removeItem("address");
    }
  }
};
</script>
<style scoped>
p {
  color: #ffc500;
  font-size: 20px;
  font-weight: 600;
}

.products {
  display: flex;
  height: 100vh;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.location > p {
  font-weight: 400;
}

span {
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  height: 10rem;
  justify-content: center;
}

span > img {
  align-self: center;
  margin-bottom: 1rem;
}
</style>