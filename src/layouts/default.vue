<template>
  <div id="default">
    <vHeader> <img src="../assets/images/icons/enjoei-logo.svg" alt="logo do enjoei" /></vHeader>
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
