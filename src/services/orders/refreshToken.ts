import { Order } from './types';

import ENDPOINTS from '@/utils/endpoints';
import { METHODS, Response } from '@/utils/request';

type Result = Response<Order>;
async function refreshToken(orderId: string): Promise<Result> {
  const url = `${ENDPOINTS.REFRESH_ORDER}/${orderId}`;
  const method = METHODS.PUT;
  const response = await fetch(url, { method });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result = await response.json();

  return { status, isError, result };
}

export default refreshToken;
