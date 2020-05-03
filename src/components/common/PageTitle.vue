<template>
  <header>
    <h1>{{ title }}</h1>
    <slot />
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  border-bottom: $default-border;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 21px;
  padding-bottom: 7px;
}

h1 {
  font-size: 21px;
  line-height: 24px;
  font-weight: 900;
  color: $dark-green;
  text-transform: uppercase;
}
</style>
