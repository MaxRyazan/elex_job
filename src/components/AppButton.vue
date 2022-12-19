<template>
  <button :class="btn">
      <slot />
  </button>
</template>

<script>
export default {
  props:['btn'],
  name: "AppButton"
}
</script>

<style scoped>

</style>