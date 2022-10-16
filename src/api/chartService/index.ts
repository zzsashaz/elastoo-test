import HTTPClient from '@/api/HTTPClient';
import { MOCK_DATA_URL } from '@/utils/constants';
import { ILineChartResponse, IPieChartResponse } from '@/types/api/chart';

export const fetchLineChartData = async ():Promise<Array<ILineChartResponse>> => {
  const { data } = await HTTPClient.$get(MOCK_DATA_URL.LINE);
  console.log(data);
  return data;
};

export const fetchPieChartData = async ():Promise<Array<IPieChartResponse>> => {
  const { data } = await HTTPClient.$get(MOCK_DATA_URL.PIE);
  console.log(data);
  return data;
};
