import axios from 'axios'

const baseURL = process.env.VUE_APP_API
// I was having CORS problems to access the API
// Access to XMLHttpRequest at 'https://www.lottoland.com/api/drawings/euroJackpot' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// I try to proxy the API url with devServer.proxy from VUE documentation, but it does not works
// So I found this API solution: https://cors-anywhere.herokuapp.com/
// This API enables cross-origin requests to anywhere and will be applied only for develpment mode
const cors = process.env.VUE_APP_CORS

const globalInstance = axios.create({
  baseURL: `${cors}${baseURL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default globalInstance
