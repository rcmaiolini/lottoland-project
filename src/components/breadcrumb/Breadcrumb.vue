<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="#">LottoLand</b-breadcrumb-item>
    <b-breadcrumb-item
      v-for="(b, i) in breadcrumbList"
      :key="i"
      @click="routeTo(i)"
      :active="!b.link"
    >
      {{ b.name }}
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.updateBreadcrumb()
  },
  methods: {
    routeTo(route) {
      if (this.breadcrumbList[route].link) {
        this.$router.push(this.breadcrumbList[route].link)
      }
    },
    updateBreadcrumb() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },
  watch: {
    $route() {
      this.updateBreadcrumb()
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: $white;

  .breadcrumb-item {
    font-size: 12px;

    a {
      text-decoration: none;
      font-weight: 700;

      &:hover {
        color: $green-6;
      }
    }

    .active {
      color: $light-gray;
      font-weight: 200;
    }
  }
}
</style>
