<template>
  <b-container fluid="lg" id="app">
    <appHeader />
    <router-view :key="$route.fullPath" />
    <!-- fixed tabs -->
    <appBreadcrumb />
    <appFooter />
  </b-container>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appBreadcrumb: Breadcrumb,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
  max-width: 960px;
  margin: 0 auto;
}
</style>
