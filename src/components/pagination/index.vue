<template>
  <div class="navigation">
    <nav>
      <button class="clean" id="prev" @click="prevPage">
        <arrowLeft /> Anterior
      </button>
      <button class="clean" id="next" @click="nextPage">
        Próximo
        <arrowRight />
      </button>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ArrowRight from "@/assets/images/icons/arrow-right-icon.svg?inline";
import ArrowLeft from "@/assets/images/icons/arrow-left-icon.svg?inline";

export default {
  data() {
    return {
      page: 1,
    };
  },
  components: {
    ArrowRight,
    ArrowLeft,
  },
  methods: {
    prevPage() {},
    nextPage() {},
  },
};
</script>