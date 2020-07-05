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
      address: String,
      productsList: [],
      test: String
    };
  },
  beforeMount: function() {
    this.checkAddress();
    this.getData("https://api.code-challenge.ze.delivery/public/graphql/");
  },
  methods: {
    checkAddress: function() {
      this.$data.address = localStorage.getItem("address");
      console.log(localStorage.getItem("address"));
    },

    getData: function(url) {
      let query =
        "query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {pocSearch(now: '2017-08-01T20:00:00.000Z', algorithm: NEAREST, lat: -23.632919, long: -46.699453) {id}";
      this.$axios.post(url, { query }).then(result => {
        console.log(result.data);
      });
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