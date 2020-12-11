<template>
  <div>
    <input v-model="searchTerm" placeholder="Me edite" />
    <button @click="getSearch">Buscar</button>
    <a
      v-for="product in products"
      :key="product.node.id"
      :href="`https://www.enjoei.com.br/p/${product.node.path}`"
    >
      {{ product.node.title.name }}
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    ...mapActions(["getProducts", "getProductsByTerm", "setNextPage"]),
    getSearch() {
      this.getProductsByTerm(this.searchTerm);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
