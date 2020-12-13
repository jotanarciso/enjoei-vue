<template>
  <div class="search-bar">
    <div class="message">
      <span>
        {{ resultMessage }}
      </span>
    </div>
    <div class="search">
      <span class="clean-filter" @click="cleanFilter">limpar busca</span>
      <div class="bar">
        <input
          v-model="searchTerm"
          v-on:keyup.enter="findByTerm"
          placeholder="buscar"
        />
        <button class="clean" @click="findByTerm">
          <searchIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import searchIcon from "@/assets/images/icons/search-icon.svg";
export default {
  components: {
    searchIcon,
  },
  data() {
    return {
      searchTerm: "",
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },

    totalProducts() {
      return this.$store.state.totalProducts;
    },

    resultMessage() {
      if (!this.isLoading) {
        if (this.totalProducts > 0) {
          return `${this.totalProducts} produtos encontrados`;
        } else return "nenhum produto encontrado";
      }
    },
  },
  watch: {
    $route(to, from) {
      if (!to.query.term) {
        this.searchTerm = "";
      }
    },
  },
  methods: {
    cleanFilter() {
      this.searchTerm = "";
      this.$router.replace({ query: null }).catch((err) => {});
    },
    findByTerm() {
      if (this.searchTerm.length > 0 || !this.searchTerm.trim()) {
        this.$router.push({
          query: { term: this.searchTerm },
        });
      }
    },
  },
};
</script>
