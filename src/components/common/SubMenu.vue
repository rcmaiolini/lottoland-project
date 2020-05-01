<template>
  <b-button-group size="md" class="mt-5 mb-3 mt-sm-5 mt-md-3">
    <b-button
      v-for="(item, index) in menuOptions"
      :key="index"
      variant="light"
      :to="{ name: item.route }"
      >{{ item.name }}</b-button
    >
  </b-button-group>
</template>

<script>
export default {
  props: {
    menuOptions: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
  width: 100%;

  .btn {
    width: 33%;
    font-size: 12px;
  }
}
</style>
