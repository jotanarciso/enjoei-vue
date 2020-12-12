<template>
  <div>
    <search-bar />
    <div
      class="c-results"
      stagger="800"
      v-if="products.length > 0"
      v-show="loadingFinish"
    >
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="c-results" v-else-if="notFound">
      <empty-result />
    </div>
    <div class="c-results" v-if="!loadingFinish">
      <product-card-skeleton v-for="index in 10" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import productCard from "@/components/productCard";
import productCardSkeleton from "@/shimmer/productCardSkeleton";
import searchBar from "@/components/searchBar";
import emptyResult from "@/components/emptyResult";
export default {
  pageTitle() {
    return "Pesquisa";
  },
  data() {
    return {
      loadingFinish: false,
    };
  },
  components: {
    "product-card": productCard,
    "product-card-skeleton": productCardSkeleton,
    "search-bar": searchBar,
    "empty-result": emptyResult,
  },
  computed: {
    products() {
      this.setDelay();
      return this.$store.state.products;
    },
    notFound() {
      if (this.$store.state.searchTerm.length > 0) {
        return true;
      }
    },
  },
  methods: {
    ...mapActions([
      "getProducts",
      "getProductsByTerm",
      "setNextPage",
      "cleanSearch",
    ]),
    getSearch(term) {
      this.getProductsByTerm(term);
    },

    setDelay() {
      this.loadingFinish = false;
      setTimeout(() => {
        this.loadingFinish = true;
      }, 2000);
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
  mounted() {
    this.getProducts();
  },
};
</script>
