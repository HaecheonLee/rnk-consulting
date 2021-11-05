<template>
  <div class="container component-container">
    <div class="component-content-container">
      <h4 class="fw-bold">{{ title }}</h4>
      <p class="component-content-description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
}
</script>

<style scoped>
.component-container {
  min-height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.component-content-container {
  text-align: center;
}

.component-content-description {
  font-size: 18.5px
}
</style>
