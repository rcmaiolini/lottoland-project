<template>
  <b-container>
    <b-row class="images-row">
      <b-col v-for="image in images" :key="image.id">
        <b-link
          :href="image.link ? image.link : ''"
          :style="[!image.link ? { cursor: 'default' } : '']"
        >
          <b-img-lazy
            :src="bindImages(image.name)"
            :width="image.size.width"
            :height="image.size.height"
          />
        </b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 'image1',
          name: '18_logo@2x',
          size: { width: '105', height: '35' }
        },
        {
          id: 'image2',
          name: 'eu_logo@2x',
          size: { width: '105', height: '35' }
        },
        {
          id: 'image3',
          name: 'gibraltar-gov_logo@2x',
          size: { width: '105', height: '35' },
          link: 'https://www.gibraltar.gov.gi/new/remote-gambling'
        },
        {
          id: 'image4',
          name: 'gbga_logo@2x',
          size: { width: '105', height: '35' },
          link: 'http://gbga.gi/our-members/lottoland/'
        },
        {
          id: 'image5',
          name: 'what-is-lotto-betting_icon@2x',
          size: { width: '120', height: '80' },
          link: 'https://www.lottoland.com/en/lotto-betting'
        }
      ]
    }
  },
  methods: {
    bindImages(name) {
      var images = require.context('@/assets/images/', false, /\.png$/)
      return images('./' + name + '.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.images-row {
  padding: 15px;
  align-items: center;
  margin: 20px 0;
}
</style>
