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
  border: $default-border;
  border-left: none;
  box-shadow: -7px 0 0 0 $base-green;
  margin-bottom: 14px;

  h2 {
    font-size: 17px;
    line-height: 26px;
    font-weight: 200;
    text-transform: none;
  }

  p {
    line-height: 21px;
    font-weight: 200;
    margin-bottom: 21px;
  }
}
</style>
