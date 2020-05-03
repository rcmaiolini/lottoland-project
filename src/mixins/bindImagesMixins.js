export default {
  methods: {
    bindImages(name) {
      var images = require.context('@/assets/images/', false, /\.png$/)
      return images('./' + name + '.png')
    }
  }
}
