<template>
  <div id="app">
    <LayoutDefault>
      <RouterView />
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from "@/layouts/default";

export default {
  components: {
    LayoutDefault,
  },
};
</script>
