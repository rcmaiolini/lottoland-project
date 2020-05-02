import euroJackpotService from '../../services/euro-jackpot'

export const state = () => ({
  lastData: null
})

export const getters = {
  getDrawingDate: state => state.lastData.drawingDate,
  getEuroNumbers: state => state.lastData.euroNumbers,
  getNumbers: state => state.lastData.numbers,
  getWinnersRank: state => {
    const data = Object.values(state.lastData.odds)
    data.shift()
    return data
  }
}

export const mutations = {
  SET_LAST_DATA: (state, lastData) => {
    state.lastData = lastData
  }
}

export const actions = {
  getWinningNumbers({ commit }) {
    return new Promise((resolve, reject) => {
      euroJackpotService
        .getWinningNumbers()
        .then(res => {
          const lastData = res.data.last
          commit('SET_LAST_DATA', lastData)
          resolve(res)
        })
        .catch(err => {
          reject(err)
          console.log(err)
        })
    })
  }
}
