<template>
  <b-form-group>
    <b-form-select
      class="selectDate"
      v-model="selectedDate"
      :options="dates"
      size="md"
      @change="getSelctedDate"
    ></b-form-select>

    <b-form-select
      class="selectYear"
      v-model="selectedYear"
      :options="years"
      size="md"
      @change="getSelctedYear"
    ></b-form-select>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: '01-05-2020',
      selectedYear: '2020',
      dates: [
        { value: '01-05-2020', text: 'Fri 01 May' },
        { value: '24-04-2020', text: 'Fri 24 Apr' },
        { value: '17-04-2020', text: 'Fri 17 Apr' },
        { value: '10-04-2020', text: 'Fri 10 Apr' },
        { value: '03-04-2020', text: 'Fri 03 Apr' },
        { value: '27-03-2020', text: 'Fri 27 Mar' },
        { value: '20-03-2020', text: 'Fri 20 Mar' },
        { value: '13-03-2020', text: 'Fri 13 Mar' },
        { value: '06-03-2020', text: 'Fri 06 Mar' },
        { value: '28-02-2020', text: 'Fri 28 Feb' },
        { value: '21-02-2020', text: 'Fri 21 Feb' },
        { value: '14-02-2020', text: 'Fri 14 Feb' },
        { value: '07-02-2020', text: 'Fri 07 Feb' },
        { value: '31-01-2020', text: 'Fri 31 Jan' },
        { value: '24-01-2020', text: 'Fri 24 Jan' },
        { value: '17-01-2020', text: 'Fri 17 Jan' },
        { value: '10-01-2020', text: 'Fri 10 Jan' },
        { value: '03-01-2020', text: 'Fri 03 Jan' }
      ],
      years: [
        { value: '2020', text: '2020' },
        { value: '2019', text: '2019' },
        { value: '2018', text: '2018' },
        { value: '2017', text: '2017' },
        { value: '2016', text: '2016' },
        { value: '2015', text: '2015' },
        { value: '2014', text: '2014' },
        { value: '2013', text: '2013' },
        { value: '2012', text: '2012' }
      ]
    }
  },
  methods: {
    getSelctedDate() {
      console.log(this.selectedDate)
    },
    getSelctedYear() {
      console.log(this.selectedYear)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  text-align: right;

  select {
    color: $dark-green;
    font-size: 14px;
  }

  .selectDate {
    width: 60%;
  }

  .selectYear {
    width: 40%;
  }
}
</style>
