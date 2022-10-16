<template>
  <DxPieChart
    id="pie"
    :data-source="chart.data"
    palette="Bright"
    @point-click="pointClickHandler($event)"
    @legend-click="legendClickHandler($event)"
  >
    <DxSeries
      argument-field="Группа"
      value-field="Доля"
    >
      <DxLabel :visible="true">
        <DxConnector
          :visible="true"
          :width="1"
        />
      </DxLabel>
    </DxSeries>
    <DxSize :width="500"/>
    <DxExport :enabled="true"/>
  </DxPieChart>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IChart } from '@/types/api/chart';
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart';

export default Vue.extend({
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  name: 'PieChart',
  props: {
    chart: {
      type: Object as PropType<IChart>,
      required: true,
    },
  },
  methods: {
    pointClickHandler(e:any) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e:any) {
      const arg = e.target;
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item:any) {
      // eslint-disable-next-line no-unused-expressions
      item.isVisible() ? item.hide() : item.show();
    },
  },
});
</script>

<style scoped lang="scss">
#pie {
  height: 440px;
}

#pie * {
  margin: 0 auto;
}
</style>
