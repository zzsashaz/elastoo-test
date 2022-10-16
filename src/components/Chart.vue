<template>
<div class="chart">
  <base-button @click="deleteChart">{{ $t('buttons.delete') }}</base-button>
  <component :is="chartType" :chart="chart"></component>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IChart } from '@/types/api/chart';
import { CHART_MUTATIONS, CHART_TYPES } from '@/utils/constants';
import LineChart from '@/components/LineChart.vue';
import PieChart from '@/components/PieChart.vue';

export default Vue.extend({
  name: 'chart-module',
  components: {
    'line-chart': LineChart,
    'pie-chart': PieChart,
  },
  props: {
    chart: {
      type: Object as PropType<IChart>,
      required: true,
    },
  },
  computed: {
    chartType():string {
      const map = {
        [CHART_TYPES.PIE]: 'pie-chart',
        [CHART_TYPES.LINE]: 'line-chart',
      };
      return map[this.chart.type];
    },
  },
  methods: {
    deleteChart() {
      this.$store.commit(CHART_MUTATIONS.DELETE_CHART, this.chart.id);
    },
  },
});
</script>

<style scoped lang="scss">
.chart {
  border: 2px solid #000;
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
}
</style>
