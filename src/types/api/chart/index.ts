export interface ILineChartResponse {
  Дата: string,
  Месяц:string,
  Процент: number,
}

export interface ILineChartData {
  data: Array<ILineChartResponse>,
  id: number,
  type:string
}

export interface IPieChartResponse {
  Группа: string,
  Доля: number,
}

export interface IPieChartData {
  data: Array<IPieChartResponse>,
  id: number,
  type:string
}

export type IChart = ILineChartData | IPieChartData | Record<string, never>
