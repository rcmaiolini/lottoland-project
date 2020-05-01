<template>
  <section class="nav-background">
    <b-nav align="center">
      <b-nav-item :to="{ name: 'powerball' }" exact exact-active-class="active">
        PowerBall
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'results-winning-numbers' }"
        exact
        exact-active-class="active"
      >
        EuroJackpot
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'euromillions' }"
        exact
        exact-active-class="active"
      >
        EuroMillions
      </b-nav-item>
      <b-nav-item :to="{ name: 'lotteries' }" exact exact-active-class="active">
        More Jackpots
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'promotions' }"
        exact
        exact-active-class="active"
      >
        Promotions
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'scratchcards' }"
        exact
        exact-active-class="active"
      >
        Scratchcards
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'instantwin' }"
        exact
        exact-active-class="active"
      >
        Instant Win
      </b-nav-item>
      <b-nav-item :to="{ name: 'games' }" exact exact-active-class="active">
        Games
      </b-nav-item>
    </b-nav>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-background {
  background: $gradient-background;
}

.nav-item {
  display: inline-block;
  height: 48px;
  position: relative;
  vertical-align: middle;
  text-align: center;
  line-height: 48px;

  &:hover {
    background-color: $green-1;
    box-shadow: inset 0 -4px 0 -2px $green-2;
  }
}

.nav-link {
  color: $white;
  padding: 0 17px;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  font-family: KievitWebProBold, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: center;
  text-shadow: 1px 1px 0 $light-gray;
  position: relative;
  height: 48px;
}

.active {
  background-color: $yellow;
  box-shadow: inset 0 3px 0 -1px rgba(0, 0, 0, 0.2);
  padding-top: 2px;
  color: $dark-gray;
}
</style>
