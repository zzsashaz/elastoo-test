<template>
  <div id="chart-demo">
    <DxChart
      id="chart"
      :data-source="chart.data"
      palette="Violet"
    >
      <DxCommonSeriesSettings
        :type="type"
        argument-field="Дата"
      />
      <DxSeries
        value-field="Процент"
        name="Процент"
      />
      <DxMargin :bottom="20"/>
      <DxArgumentAxis
        :value-margins-enabled="false"
        discrete-axis-division-mode="crossLabels"
      >
        <DxGrid :visible="true"/>
      </DxArgumentAxis>
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="bottom"
      />
      <DxExport :enabled="true"/>
      <DxTooltip :enabled="true"/>
    </DxChart>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IChart } from '@/types/api/chart';
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTooltip,
  DxCommonSeriesSettings,
} from 'devextreme-vue/chart';

export default Vue.extend({
  name: 'LineChart',
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxArgumentAxis,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTooltip,
  },
  props: {
    chart: {
      type: Object as PropType<IChart>,
      required: true,
    },
  },
  data() {
    return {
      type: 'line',
    };
  },
});
</script>

<style scoped lang="scss">
.options {
  padding: 20px;
  background-color: rgba(191, 191, 191, 0.15);
  margin-top: 20px;
}

.option {
  margin-top: 10px;
}

.caption {
  font-size: 18px;
  font-weight: 500;
}

.option > span {
  margin-right: 14px;
}

.option > .dx-widget {
  display: inline-block;
  vertical-align: middle;
}
</style>
