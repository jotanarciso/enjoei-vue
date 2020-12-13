<template>
  <div id="default">
    <vHeader>
      <vLogo />
    </vHeader>
    <vContainer :gutter="true">
      <slot />
    </vContainer>
  </div>
</template>

<script>
import vContainer from "@/components/container";
import vHeader from "@/components/header";
import vLogo from "@/assets/images/icons/enjoei-logo.svg";

export default {
  components: {
    vContainer,
    vHeader,
    vLogo,
  },
};
</script>
