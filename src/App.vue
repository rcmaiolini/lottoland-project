<template>
  <div id="app">
    <appHeader />
    <router-view :key="$route.fullPath" />
    <!-- fixed tabs -->
    <Breadcrumb />
    <appFooter />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    appHeader: Header,
    Breadcrumb,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
