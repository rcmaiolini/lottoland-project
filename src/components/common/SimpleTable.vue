<template>
  <b-table-simple responsive>
    <b-thead>
      <b-tr>
        <b-th v-for="head in tableHead" :key="head">{{ head }}</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="(body, index) in tableBody" :key="index">
        <b-td>{{ (index + 1) | toRoman }}</b-td>
        <b-td><nl2br tag="span" :text="body.match"/></b-td>
        <b-td>{{ body.winners | numeral('0,0') }}x</b-td>
        <b-td>€{{ body.prize | numeral('0,0.00') }}</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>
export default {
  props: {
    tableHead: {
      type: Array
    },
    tableBody: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.b-table {
  thead {
    border: 1px solid $lighter-gray;

    th {
      color: $dark-green;
      font-size: 14px;
    }
  }

  tbody {
    border: 1px solid $lighter-gray;
    line-height: 1;

    tr {
      border: 1px solid $lighter-gray;

      td {
        font-size: 14px;
        vertical-align: middle;
        color: $dark-green;
      }
    }
  }
}
</style>
