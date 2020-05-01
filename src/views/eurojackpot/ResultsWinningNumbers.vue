<template>
  <div>
    <PageTitle title="EUROJACKPOT RESULTS & WINNING NUMBERS">
      <ComboDateYear />
    </PageTitle>
    <!-- inputs date -->
    <!-- result date -->
    <!-- numbers -->

    <b-row>
      <b-col sm="12" md="7" lg="8">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th sticky-column>Sticky Column Header</b-th>
              <b-th>Heading 1</b-th>
              <b-th>Heading 2</b-th>
              <b-th>Heading 3</b-th>
              <b-th>Heading 4</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
              <b-td>Cell</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
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

export default {
  components: {
    PageTitle,
    ComboDateYear,
    CardText
  }
}
</script>

<style lang="scss" scoped></style>
