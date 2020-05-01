<template>
  <div id="app">
    <appHeader />
    <b-container>
      <router-view :key="$route.fullPath" />
      <appBreadcrumb />
    </b-container>
    <!-- fixed tabs -->
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
    appBreadcrumb: Breadcrumb,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
  padding-top: 118px;
}
</style>
