<template>
  <b-table-simple responsive>
    <b-thead>
      <b-tr>
        <b-th v-for="head in tableHead" :key="head">{{ head }}</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="body in tableBody" :key="body.id">
        <b-td>{{ body.id | toRoman }}</b-td>
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
    border: $default-border;

    th {
      color: $dark-green;
      font-size: 14px;
    }
  }

  tbody {
    border: $default-border;
    line-height: 1;

    tr {
      border: $default-border;

      td {
        font-size: 14px;
        vertical-align: middle;
        color: $dark-green;
      }
    }
  }
}
</style>
