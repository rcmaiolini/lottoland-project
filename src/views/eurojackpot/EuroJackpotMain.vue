<template>
  <div>
    <b-button-group size="md" class="mt-5 mb-3 mt-sm-5 mt-md-3">
      <b-button variant="light" :to="{ name: 'eurojackpot' }"
        >EuroJackpot</b-button
      >
      <b-button variant="light" :to="{ name: 'results-winning-numbers' }"
        >EuroJackpot Results & Prize Breakdown</b-button
      >
      <b-button variant="light" :to="{ name: 'help' }"
        >EuroJackpot Help & FAQ</b-button
      >
    </b-button-group>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {}
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
