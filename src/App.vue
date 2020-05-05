<template>
  <div id="app">
    <appHeader />

    <b-overlay :show="loadingStatus" spinner-variant="green">
      <b-container>
        <router-view />
        <appBreadcrumb />
      </b-container>
    </b-overlay>

    <appFooter />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Footer from '@/components/footer/Footer.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    appHeader: Header,
    appBreadcrumb: Breadcrumb,
    appFooter: Footer
  },
  computed: {
    ...mapGetters(['loadingStatus'])
  }
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
  padding-top: 120px;
}
</style>
