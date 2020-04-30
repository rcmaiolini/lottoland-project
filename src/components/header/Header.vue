<template>
  <div>
    <headerTop />
    <headerNav />
  </div>
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

<style lang="scss" scoped></style>
