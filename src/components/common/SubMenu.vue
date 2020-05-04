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
  height: 42px;
  display: table;
  border-radius: 5px;

  .btn {
    // display: table-cell;
    width: 33%;
    font-size: 12px;
    line-height: 36px;
    text-align: center;
    color: $green-5;
    background-color: #f9f9f9;
    box-shadow: inset 2px 2px 0 -1px #ccc,
      inset 0 -4px 0 -2px rgba(0, 0, 0, 0.2);
    font-weight: 700;

    &:first-child {
      border-radius: 5px 0 0 5px;
      box-shadow: inset 1px 1px 0 0 #ccc, inset 0 -3px 0 -1px rgba(0, 0, 0, 0.2);
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
      box-shadow: inset 0 0 0 1px #ccc, inset 0 -3px 0 -1px rgba(0, 0, 0, 0.2);
    }
  }

  .active {
    background: $yellow !important;
    color: $dark-gray;
    cursor: default;
  }
}
</style>
