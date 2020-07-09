<template>
  <form v-on:submit.prevent>
    <div class="input">
      <input
        id="address"
        type="text"
        v-model="address"
        v-on:keyup.enter="search"
        v-on:click="cleanError"
        placeholder="Insira o seu endereço..."
        alt="Insira aqui seu endereço"
      />
      <img
        src="../../../assets/img/pointer.png"
        alt="Icone de Mapa, campo para inserção do endereço"
      />
    </div>
    <p class="error-message" v-if="error">Não foi possivel encontrar o endereço.</p>
  </form>
</template>

<script>
export default {
  name: "Input",
  data: function() {
    return {
      address: String,
      error: false
    };
  },
  methods: {
    search: function() {
      let url =
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        this.address +
        "&key=AIzaSyD9qpYgJKQ61mlNptAhR7OrGsQ5XHM5EzM"; //Key will be deleted in 1 week
      this.$axios.get(url).then(data => {
        if (data.error_message) {
          this.error = true;
        } else {
          console.log(data);
          localStorage.setItem(
            "address",
            data.data.results[0].formatted_address
          );
          localStorage.setItem(
            "location",
            JSON.stringify(data.data.results[0].geometry.location)
          );
          this.$router.push({ name: "Products" });
        }
      });
    },
    cleanError() {
      this.error = false;
    }
  },
  beforeMount() {
    this.address = "";
  }
};
</script>

<style>
.input {
  width: 25rem;
  height: 48px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
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

.error-message {
  color: rgba(255, 255, 255, 0.856);
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
}

.input > img {
  height: 24px;
  margin-right: 10px;
}

@media only screen and (min-width: 320px) and (max-width: 420px) {
  .input {
    bottom: 20% !important;
    height: 48px;
    width: 18rem;
  }
}
</style>
