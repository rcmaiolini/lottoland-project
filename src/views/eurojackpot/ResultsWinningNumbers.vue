<template>
  <div>
    <PageTitle title="EUROJACKPOT RESULTS & WINNING NUMBERS">
      <ComboDateYear />
    </PageTitle>

    <lotteryNumber :jackpot="jackpotData" />

    <b-row>
      <b-col sm="12" md="7" lg="8">
        <SimpleTable
          :tableHead="jackpotWinnersHead"
          :tableBody="jackpotWinners"
        />
      </b-col>

      <b-col m="12" md="5" lg="4">
        <CardText>
          <template slot="head">
            The EuroJackpot numbers for 01.05.2020
          </template>
          <template slot="body">
            <span style="font-weight: bold">
              The 424th draw for the EuroJackpot was held on 01.05.2020
            </span>
            , as usual at 9pm in Helsinki.
          </template>
        </CardText>

        <CardText>
          <template slot="head">EuroJackpot numbers for 01.05.2020</template>
          <template slot="body">
            The balls used for the draw are made of a synthetic polymer, softer
            than ping-pong balls. The results are broadcast after the draw, with
            the draw-machines independently checked by the VTT Technical
            Research Center of Finland.
            <br /><br />
            Lottoland published the draw results immediately after the draw on
            01.05.2020.
          </template>
        </CardText>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '@/components/common/PageTitle.vue'
import ComboDateYear from '@/components/common/ComboDateYear.vue'
import CardText from '@/components/common/CardText.vue'
import lotteryNumber from '@/components/common/LotteryNumber.vue'
import SimpleTable from '@/components/common/SimpleTable.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    PageTitle,
    ComboDateYear,
    CardText,
    lotteryNumber,
    SimpleTable
  },
  data() {
    return {
      jackpotData: {
        date: null,
        numbers: null,
        extra: null
      },
      jackpotWinners: null,
      jackpotWinnersHead: ['Tier', 'Match', 'Winners', 'Amount']
    }
  },
  async beforeMount() {
    await this.getWinningNumbers()
    this.jackpotData.date = this.moment(
      this.getDrawingDate.split(',')[0],
      'DD.MM.YYYY'
    ).format('dddd DD MMMM YYYY')
    this.jackpotData.numbers = this.getNumbers
    this.jackpotData.extra = this.getEuroNumbers
    this.formatJackpotWinners()
  },
  methods: {
    ...mapActions(['getWinningNumbers']),
    formatJackpotWinners() {
      this.jackpotWinners = this.getWinnersRank
      this.jackpotWinners[0].match = '5 Numbers +\n2 Euronumbers'
      this.jackpotWinners[1].match = '5 Numbers +\n1 Euronumber'
      this.jackpotWinners[2].match = '5 Numbers +\n0 Euronumbers'
      this.jackpotWinners[3].match = '4 Numbers +\n2 Euronumbers'
      this.jackpotWinners[4].match = '4 Numbers +\n1 Euronumber'
      this.jackpotWinners[5].match = '4 Numbers +\n0 Euronumber'
      this.jackpotWinners[6].match = '3 Numbers +\n2 Euronumbers'
      this.jackpotWinners[7].match = '2 Numbers +\n2 Euronumbers'
      this.jackpotWinners[8].match = '3 Numbers +\n1 Euronumber'
      this.jackpotWinners[9].match = '3 Numbers +\n0 Euronumbers'
      this.jackpotWinners[10].match = '1 Number +\n2 Euronumbers'
      this.jackpotWinners[11].match = '2 Numbers +\n1 Euronumber'
    }
  },
  computed: {
    ...mapGetters([
      'getDrawingDate',
      'getEuroNumbers',
      'getNumbers',
      'getWinnersRank'
    ])
  }
}
</script>

<style lang="scss" scoped></style>
