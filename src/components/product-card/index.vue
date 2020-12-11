<template>
  <div class="c-product-card">
    <a :href="href">
      <img class="c-product-card__image" :src="imageUrl" />
    </a>
  </div>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

export default {
  props: {
    imageId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card),
    };
  },
  computed: {
    href() {
      return `https://www.enjoei.com.br/p/${this.path}`;
    },
  },
};
</script>
