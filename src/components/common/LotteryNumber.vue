<template>
  <div>
    <p class="heading">
      <span>EuroJackpot</span> Results for
      {{ jackpot.date }}
    </p>
    <ul class="lottery">
      <li class="number" v-for="num in jackpot.numbers" :key="num">
        {{ num }}
      </li>
      <li class="number extra" v-for="ex in jackpot.extra" :key="ex">
        {{ ex }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    jackpot: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 14px 0;
  line-height: 26px;
  font-weight: 200;
  text-transform: none;
  font-size: 17px;
  margin: 0;

  span {
    color: $brown;
  }
}

.lottery {
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  display: inline-block;
  margin-bottom: 7px;
  width: 100%;

  .number {
    display: inline-block;
    font-size: 17px;
    line-height: 35px;
    text-align: center;
    border: $default-border;
    border-radius: 50%;
    margin-right: 7px;
    margin-bottom: 7px;
    width: 35px;
    height: 35px;
  }

  .extra {
    border: 1px solid $orange;
  }
}
</style>
