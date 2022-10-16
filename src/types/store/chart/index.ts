import { CHART_TYPES } from '@/utils/constants';
import { IChart } from '@/types/api/chart';

export interface IChartState {
  chartsList: Array<IChart>
  nextChartId:number
}
export interface IRootState {
  chart:IChartState
}
export type TChartTypes = typeof CHART_TYPES[keyof typeof CHART_TYPES]
