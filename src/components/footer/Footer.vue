<template>
  <footer>
    <footerTrust />
    <footerLinks />
    <footerPayments />
    <footerDownload />
    <footerSigns />
  </footer>
</template>

<script>
import Trust from '@/components/footer/Trust.vue'
import Links from '@/components/footer/Links.vue'
import Payments from '@/components/footer/Payments.vue'
import Download from '@/components/footer/Download.vue'
import Signs from '@/components/footer/Signs.vue'

export default {
  components: {
    footerTrust: Trust,
    footerLinks: Links,
    footerPayments: Payments,
    footerDownload: Download,
    footerSigns: Signs
  }
}
</script>

<style lang="scss" scoped></style>
