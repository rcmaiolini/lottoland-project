import axiosGlobal from '../axios/axios-global'

export default {
  getWinningNumbers() {
    return axiosGlobal.get('/drawings/euroJackpot')
  }
}
