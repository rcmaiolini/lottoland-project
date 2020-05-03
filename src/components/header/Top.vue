<template>
  <section class="header-top">
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
      fixed="top"
      :sticky="true"
    >
      <b-navbar-brand href="/">
        <img src="@/assets/images/lottoland-logo.svg" alt="LottoLand" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-item-custom" href="#">
            <i class="fas fa-search"></i>
          </b-nav-item>
          <span class="divide"></span>
          <b-nav-item class="nav-item-custom" href="#">Login</b-nav-item>
          <span class="divide"></span>
          <b-nav-item class="nav-item-custom" href="#">Register</b-nav-item>
          <span class="divide"></span>
          <b-nav-item href="#">
            <i class="fas fa-shopping-cart"></i>
            To Checkout
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-top {
  max-width: 960px;
  margin: 0 auto;
}

.navbar-brand {
  img {
    height: 39px;
    width: 125px;
  }
}

.navbar-light {
  .navbar-nav {
    .nav-item-custom {
      display: inline-block;
      position: relative;

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 21px;
        width: 2px;
        background-color: $lighter-gray;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .nav-link {
      text-decoration: none;
      color: $base-green;
      padding: 14px 0;
      margin: 0 21px;
      font-weight: 700;
      position: relative;
      display: inline;
      line-height: 21px;

      &:hover {
        color: $green-6;
        background-color: initial;
        text-decoration: none;
        transition-timing-function: ease-in;
      }
    }
  }
}
</style>
