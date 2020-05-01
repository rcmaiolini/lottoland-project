<template>
  <h2>
    This is just a sample markup component to show navigation working for
    <span class="pageName">{{ pageName }}</span> that has no layout yet!!!
  </h2>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 50px 150px;
  text-align: center;
}

.pageName {
  color: $base-green;
}
</style>
