<template>
  <div class="panel">
    <h2 class="title-panel">Produtos</h2>
    <h3 v-if="error">Não encontramos produtos na sua região :/</h3>
    <h3 v-if="loading"></h3>
    <ul v-if="productsList">
      <li :key="item.id" v-for="item in productsList">
        <Card :data="item" />
      </li>
    </ul>
  </div>
</template>
<script>
import Card from "./sub-components/Card.vue";

export default {
  name: "Panel",
  components: {
    Card
  },
  props: {
    poc: String,
    error: Boolean
  },
  created: function() {
    let query = this.prepareQueryProducts(this.$props.poc);
    this.$axios
      .post("https://api.code-challenge.ze.delivery/public/graphql?", { query })
      .then(result => {
        console.log(result);
      });
  },
  data: function() {
    return {
      loading: true,
      productsList: {}
    };
  },
  methods: {
    prepareQueryProducts: function() {
      let query =
        ` {poc(id: "` +
        this.$props.poc +
        `") { id products(categoryId: "", search: "") { id title images { url } productVariants { price volume volumeUnit description } } }`;
      console.log(query);
      return query;
    }
  }
};
</script>
<style scoped>
</style>