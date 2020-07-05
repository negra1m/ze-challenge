<template>
  <div class="products">
    <div class="container">
      <Card class="card-item" />
      <Location class="card-location" :address="$data.address" />
    </div>
  </div>
</template>
<script>
import Card from "./components/Card.vue";
import Location from "./components/Location.vue";

export default {
  name: "Products",
  components: {
    Card,
    Location
  },
  data: function() {
    return {
      address: String
    };
  },
  beforeMount: function() {
    this.checkAddress();
  },
  methods: {
    checkAddress: function() {
      this.$data.address = localStorage.getItem("address");
      console.log(localStorage.getItem("address"));
    }
  }
};
</script>

<style scoped>
.products {
  height: calc(100% - 70px);
}

.container {
  background-image: url("../../assets/img/background2.png");
  background-repeat: no-repeat;
  background-position-x: 50rem;
  background-size: 100vh;
  display: flex;
  height: 100%;
}

.card-item {
  flex: 2;
  background-color: rgba(0, 0, 0, 0.562);
}

.card-location {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.562);
}
</style>