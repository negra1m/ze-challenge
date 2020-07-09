  <template>
  <div class="products">
    <div class="container">
      <div class="card-item">
        <h2 class="title-panel">Produtos</h2>
        <h3 v-if="error">Não encontramos produtos na sua região :/</h3>
        <Loading v-if="loading" />

        <ul class="panel" v-if="productsList">
          <li :key="item.id" v-for="item in productsList">
            <div class="card">
              <div class="image">
                <img
                  width="150px"
                  v-bind:src="item.images[0].url"
                  v-bind:alt="item.productVariants.subtitle"
                />
              </div>
              <div class="item-description">
                <div>
                  <p class="title">{{item.title}}</p>
                  <p class="price">R$ {{item.productVariants[0].price}}</p>
                </div>
                <div class="btn">
                  <Buttons />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Location class="card-location" :address="this.address" />
    </div>
  </div>
</template>
<script>
import Location from "./components/Location.vue";
import Loading from "../../shared/components/Loading.vue";
import Buttons from "../../shared/components/Buttons.vue";

export default {
  name: "Products",
  components: {
    Location,
    Loading,
    Buttons
  },
  data: function() {
    return {
      productsList: false,
      productsLoaded: false,
      error: false,
      poc: null,
      url: "https://api.code-challenge.ze.delivery/public/graphql",
      loading: true
    };
  },
  beforeMount: function() {
    this.getData(this.$data.url);
    this.fillDate();
  },
  methods: {
    getData: function(url) {
      let dateTime = new Date().toISOString();
      let location = JSON.parse(localStorage.getItem("location"));
      let query =
        `{pocSearch(now: "` +
        dateTime +
        `", lat: "` +
        JSON.stringify(location.lat) +
        `", long: "` +
        JSON.stringify(location.lng) +
        `", algorithm: "NEAREST" ){id}}`;
      console.log(query);

      this.$axios.post(url, { query }).then(result => {
        if (result.data.data.pocSearch[0]) {
          this.poc = result.data.data.pocSearch[0].id;
          this.getProducts(this.poc);
        } else {
          this.error = true;
          this.loading = false;
        }
      });
    },
    getProducts: function(poc) {
      let query = this.prepareQueryProducts(poc);
      this.$axios
        .post(this.$data.url, {
          query
        })
        .then(result => {
          console.log(result.data.data.poc.products);
          this.loading = false;
          this.productsList = result.data.data.poc.products;
        });
    },
    prepareQueryProducts: function() {
      let query =
        ` {poc(id: "` +
        this.poc +
        `") { id products(search: "") { id title images { url } productVariants { price volume volumeUnit description } } } }`;
      return query;
    },
    fillDate: function() {
      this.address = localStorage.getItem("address");
    }
  }
};
</script>

  <style scoped>
.btn {
  width: 200px;
  display: flex;
  justify-content: center;
  align-self: center;
}

.panel {
  max-height: 75vh;
  overflow: scroll;
  margin-bottom: 4rem;
  width: 100%;
}

.card {
  width: 100%;
  height: 200px;
  display: flex;
  background-color: white;
  margin: 0.5rem 0.5rem;
}

.item-description {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.item-description > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: 800;
  width: 70%;
}
.title {
  font-size: 20px;
  color: #333;
  justify-self: flex-start;
}

.price {
  font-size: 24px;
  color: rgb(255, 197, 0);
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}

.products {
  height: calc(100% - 70px);
}

.title-panel {
  color: white;
  padding: 2rem 2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
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
  background-color: rgba(0, 0, 0, 0.5);
}

.card-location {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>