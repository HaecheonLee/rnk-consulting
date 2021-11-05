<i18n>
{
  "en": {
    "alt-1": "A picture of"
  },
  "fr": {
    "alt-1": "Une photo de"
  }
}
</i18n>

<template>
  <div class="member-container">
    <nuxt-img class="member-image" :alt="`${this.$t('alt-1')} ${name}`" :src="`/img/about/profile/${imageUrl}`" />
    <h5 class="member-name">{{ name }}</h5>
    <h6 class="member-job-title">{{ jobTitle }}</h6>
    <p class="member-info" v-html="info"></p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    jobTitle: String,
    info: String,
    imageUrl: String,
  },
}
</script>

<style scoped>
.member-container {
  text-align: center;
}

.member-image {
  width: 11.72em;
  height: 15.6em;
  margin-bottom: 0.25em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
  -webkit-touch-callout: none;
}

.member-name {
  font-weight: bold;
  color: #000000;
  margin-bottom: 0.25em;
}

.member-job-title {
  color: #333333;
}

.member-info {
  font-size: 0.75em;
  color: #999999;
}
</style>
