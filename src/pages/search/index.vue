<template>
  <div>
    <search-bar />
    <div v-if="products.length > 0" v-show="!isLoading">
      <div class="c-results">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <pagination />
    </div>
    <div class="c-results" v-else-if="notFound && !isLoading">
      <empty-result />
    </div>
    <div class="c-results" v-if="isLoading">
      <product-card-skeleton v-for="index in 10" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import productCard from "@/components/productCard";
import productCardSkeleton from "@/shimmer/productCardSkeleton";
import searchBar from "@/components/searchBar";
import pagination from "@/components/pagination";
import emptyResult from "@/components/emptyResult";

export default {
  pageTitle() {
    return "Pesquisa";
  },

  components: {
    "product-card": productCard,
    "product-card-skeleton": productCardSkeleton,
    "search-bar": searchBar,
    pagination: pagination,
    "empty-result": emptyResult,
  },
  computed: {
    products() {
      this.getLoading();
      return this.$store.state.products;
    },
    notFound() {
      if (this.$store.state.searchTerm.length > 0) {
        return true;
      }
    },
    currentPage() {
      return this.$store.state.page;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    ...mapActions([
      "getProducts",
      "getProductsByTerm",
      "cleanSearch",
      "getLoading",
    ]),
    getSearch(term) {
      this.getProductsByTerm(term);
    },
  },
  watch: {
    $route(to, from) {
      if (to.query.term) {
        this.getProductsByTerm(to.query.term);
      } else {
        this.cleanSearch();
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
