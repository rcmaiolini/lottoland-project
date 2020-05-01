<template>
  <div>
    <SubMenu :menuOptions="subMenu" />
    <router-view />
  </div>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue'

export default {
  components: {
    SubMenu
  },
  data() {
    return {
      subMenu: [
        { name: 'EuroJackpot', route: 'eurojackpot' },
        {
          name: 'EuroJackpot Results & Prize Breakdown',
          route: 'results-winning-numbers'
        },
        { name: 'EuroJackpot Help & FAQ', route: 'help' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
