<template>
  <div :class="[
    'c-container',
    { '-with-gutter': gutter }
  ]">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      gutter: {
        type: Boolean,
        default: true
      }
    }
  }
</script>