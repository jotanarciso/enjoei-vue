<template>
  <div class="search-bar">
    <div class="message">
      <span v-show="searchActive">
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
        <button @click="findByTerm">
          <img
            src="../../assets/images/icons/search-icon.svg"
            alt="lupa de
        pesquisa"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      searchActive: false,
    };
  },

  computed: {
    resultMessage() {
      const { totalProducts } = this.$store.state;
      if (totalProducts > 0) {
        return `${totalProducts} produtos encontrados`;
      } else return "nenhum produto encontrado";
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
      this.searchActive = false;
      this.searchTerm = "";
      this.$router.replace({ query: null }).catch((err) => {});
    },
    findByTerm() {
      this.searchActive = true;
      this.$router.push({
        query: (this.searchTerm.length > 0 || !this.searchTerm.trim()) && {
          term: this.searchTerm,
        },
      });
    },
  },
};
</script>
