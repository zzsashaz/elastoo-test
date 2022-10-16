<template>
  <div id="app">
    <base-button
      :disabled="isShowModal"
      @click="isShowModal = true"
    >{{$t('buttons.create')}}</base-button>
    <chart-module
      v-for="chart in chartsList"
      :key="`chart-${chart.id}`"
      :chart="chart"
    ></chart-module>
    <div class="modal" v-if="isShowModal">
      <div class="modal__settings">
        <div class="modal__chart-type">
          <h3>{{$t('chart.title')}}</h3>
          <base-select :options="chartTypeOptions" v-model="chartTypeValue"></base-select>
        </div>
        <div class="modal__chart-url">
          <h3>{{$t('chart.url')}}</h3>
          <base-select :options="chartUrlOptions" v-model="chartUrlValue" disabled></base-select>
        </div>
      </div>
      <div class="modal__button">
        <base-button @click="createChart">{{$t('buttons.accept')}}</base-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { CHART_TYPES, CHART_URLS } from '@/utils/constants';
import { mapGetters } from 'vuex';
import ChartModule from '@/components/Chart.vue';

export default Vue.extend({
  name: 'App',
  components: { ChartModule },
  data() {
    return {
      chartTypeOptions: [
        { title: this.$tc('chart.pie'), value: CHART_TYPES.PIE },
        { title: this.$tc('chart.line'), value: CHART_TYPES.LINE },
      ],
      chartTypeValue: { title: this.$t('chart.pie'), value: CHART_TYPES.PIE },
      chartUrlOptions: [
        { title: this.$tc('chart.mockyIo'), value: CHART_URLS.MOCKY_IO },
      ],
      chartUrlValue: { title: this.$tc('chart.mockyIo'), value: CHART_URLS.MOCKY_IO },
      isShowModal: false,
    };
  },
  computed: {
    ...mapGetters({
      chartsList: 'getChartsList',
    }),
  },
  methods: {
    async createChart() {
      try {
        await this.$store.dispatch('fetchChartData', this.chartTypeValue.value);
        this.isShowModal = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<style lang="scss">
.modal {
  width: 400px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -230px;
  margin-top: -130px;
  border: 1px solid #000;
  padding: 30px;
  border-radius: 15px;
  background: #fff;
  &__settings {
    display: flex;
  }
  &__chart-type {
    width: 100%;
    text-align: center;
  }
  &__chart-url {
    width: 100%;
    text-align: center;
  }
  &__button {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
