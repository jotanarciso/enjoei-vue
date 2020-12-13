<template>
  <div class="empty-result">
    <h2>ué, não encontramos nadinha</h2>
    <p>que tal recomeçar do começo?</p>
    <button class="clean" @click="cleanFilter">limpar busca</button>
    <p>
      <img src="@/assets/images/components/blank-slate.png" />
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    cleanFilter() {
      this.searchTerm = "";
      this.$router.replace({ query: null }).catch((err) => {});
    },
  },
};
</script>
