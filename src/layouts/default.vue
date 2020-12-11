<template>
  <div id="default">
    <vContainer :gutter="false">
      <vHeader> <img src="../assets/images/icons/enjoei-logo.svg" /></vHeader>
    </vContainer>
    <vContainer :gutter="true">
      <slot />
    </vContainer>
  </div>
</template>

<script>
import vContainer from "@/components/container";
import vHeader from "@/components/header";

export default {
  components: {
    vContainer,
    vHeader,
  },
};
</script>
