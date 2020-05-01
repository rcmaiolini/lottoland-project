<template>
  <b-card>
    <b-card-text>
      <h2>
        <slot name="head" />
      </h2>
      <p>
        <slot name="body" />
      </p>
      <slot />
    </b-card-text>
  </b-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #d9deda;
  border-left: none;
  box-shadow: -7px 0 0 0 #69a507;
  margin-bottom: 14px;

  h2 {
    font-size: 17px;
    line-height: 26px;
    font-weight: 200;
    color: $dark-green;
    text-transform: none;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 200;
    color: $dark-green;
    margin-bottom: 21px;
  }
}
</style>
