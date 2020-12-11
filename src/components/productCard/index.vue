<template>
  <div class="c-product-card">
    <a :href="`https://www.enjoei.com.br/p/${product.node.path}`">
      <span class="offer" v-if="isOffer">
        {{ discount }}
      </span>
      <div class="price">
        <span
          v-bind:class="{
            new: isOffer,
          }"
        >
          R$ {{ product.node.price.current }}
        </span>

        <span class="old" v-if="isOffer"
          >R${{ product.node.price.original }}</span
        >
      </div>
      <img :src="imageUrl" />
    </a>
  </div>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imageUrl() {
      return getImageUrl(
        this.product.node.photo.image_public_id,
        IMAGE_PRESETS.product.card
      );
    },
    discount() {
      const discount = parseInt(
        (100 * this.product.node.price.current) /
          this.product.node.price.original
      );
      return discount + "% off";
    },
    isOffer() {
      if (this.product.node.price.original === this.product.node.price.current)
        return false;
      else return true;
    },
  },
  methods: {},
};
</script>
