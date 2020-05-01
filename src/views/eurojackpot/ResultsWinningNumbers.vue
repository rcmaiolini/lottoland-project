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
        <b-card>
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from '@/components/common/PageTitle.vue'
import ComboDateYear from '@/components/common/ComboDateYear.vue'

export default {
  components: {
    PageTitle,
    ComboDateYear
  }
}
</script>

<style lang="scss" scoped></style>
