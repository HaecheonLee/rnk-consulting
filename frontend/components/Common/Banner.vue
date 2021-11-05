<template>
  <div class="banner-container">
    <div class="banner-content-container">
      <div>
        <p class="banner-header">{{ header }}</p>
        <p class="banner-description" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    description: String,
  }
}
</script>

<style scoped>
.banner-container {
  width: 100%;
  min-height: 28em;
  background: #1A5268;
  position: relative;
}

.banner-content-container {
  margin: auto;
  position: absolute;
  height: 10em;
  top: 0; left: 0; bottom: 0; right: 0;
}

.banner-header {
  font-size: 2.5em;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-bottom: 7.5px;
  text-transform: capitalize;
}

.banner-description {
  font-size: 18.5px;
  color: white;
  text-align: center;
  padding: 0 5%;
}
</style>
