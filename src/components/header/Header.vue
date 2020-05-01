<template>
  <header class="header-container">
    <headerTop />
    <headerNav />
  </header>
</template>

<script>
import Top from '@/components/header/Top.vue'
import Nav from '@/components/header/Nav.vue'

export default {
  components: {
    headerTop: Top,
    headerNav: Nav
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
