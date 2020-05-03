<template>
  <b-container>
    <b-row class="images-row">
      <b-col>
        <b-img-lazy
          :src="bindImages('visa_logo@2x')"
          alt="Visa"
          width="142"
          height="30"
        />
      </b-col>
      <b-col>
        <b-img-lazy
          :src="bindImages('mastercard-logo-154x89')"
          alt="Mastercard"
          width="77"
          height="44"
        />
      </b-col>
      <b-col>
        <b-img-lazy
          :src="bindImages('paysafe_logo@2x')"
          alt="PaysafeCard"
          width="142"
          height="30"
        />
      </b-col>
      <b-col>
        <b-img-lazy
          :src="bindImages('neteller_logo@2x')"
          alt="Netller"
          width="142"
          height="30"
        />
      </b-col>
      <b-col>
        <b-img-lazy
          :src="bindImages('skrill_logo@2x')"
          alt="Skrill"
          width="96"
          height="30"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import bindImagesMixins from '../../mixins/bindImagesMixins'

export default {
  mixins: [bindImagesMixins]
}
</script>

<style lang="scss" scoped>
.container {
  padding: 24px;
  border: 1px solid #d9deda;
}

.images-row {
  text-align: center;
  align-items: center;

  .col {
    padding: 0;
  }
}
</style>
