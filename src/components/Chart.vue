<template>
<div class="chart">
  <component :is="chartType" :chart="chart"></component>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IChart } from '@/types/api/chart';
import { CHART_TYPES } from '@/utils/constants';
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
});
</script>

<style scoped lang="scss">

</style>
