import { ActionContext } from 'vuex';
import { IChartState, IRootState, TChartTypes } from '@/types/store/chart';
import { CHART_MUTATIONS, CHART_TYPES } from '@/utils/constants';
import { fetchLineChartData, fetchPieChartData } from '@/api/chartService';
import { IChart } from '@/types/api/chart';

export default {
  state: ():IChartState => ({
    chartsList: [],
    nextChartId: 0,
  }),
  actions: {
    async fetchChartData(ctx:ActionContext<IChartState, IRootState>, type:TChartTypes) {
      const chart = {} as IChart;
      if (type === CHART_TYPES.PIE) {
        chart.data = await fetchPieChartData();
        chart.type = CHART_TYPES.PIE;
      } else if (type === CHART_TYPES.LINE) {
        chart.data = await fetchLineChartData();
        chart.type = CHART_TYPES.LINE;
      }
      chart.id = ctx.getters.getNextChartId;
      ctx.commit(CHART_MUTATIONS.ADD_CHART, chart);
      return chart;
    },
  },
  mutations: {
    [CHART_MUTATIONS.ADD_CHART](state:IChartState, data:IChart) {
      const memo = JSON.parse(JSON.stringify(state.chartsList));
      memo.unshift(data);
      state.chartsList = memo;
      state.nextChartId += 1;
    },
    [CHART_MUTATIONS.DELETE_CHART](state:IChartState, chartId:number) {
      const chartQueue = state.chartsList.findIndex((el) => el.id === chartId);
      const memo = JSON.parse(JSON.stringify(state.chartsList));
      memo.splice(chartQueue, 1);
      state.chartsList = memo;
    },
  },
  getters: {
    getNextChartId(state:IChartState) {
      return state.nextChartId;
    },
    getChartsList(state:IChartState) {
      return state.chartsList;
    },
  },
};
