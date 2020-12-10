<template>
  <div id="app">
    <vContainer :gutter="false">
      Enjoei
    </vContainer>

    <vContainer :gutter="true">
      <RouterView />
    </vContainer>
  </div>
</template>

<script>
  import vContainer from '@/components/container'

  export default {
    components: {
      vContainer
    }
  }
</script>
