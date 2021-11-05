<template>
  <div class="container block-container">
    <div class="block-content-container">
      <div v-html="rawHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rawHtml: String,
  }
}
</script>

<style scoped>
.block-container {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
