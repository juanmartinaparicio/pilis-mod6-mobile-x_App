import { Product } from './types';

import ENDPOINTS from '@/utils/endpoints';
import { Response } from '@/utils/request';

type Result = Response<Product[]>;
async function getAllProducts(): Promise<Result> {
  const url = `${ENDPOINTS.PRODUCTS}`;
  const response = await fetch(url);

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const _result: Product[] = await response.json();
  const result = _result.map(p => ({
    ...p,
    image: `${ENDPOINTS.PUBLIC}/${p.image}`,
  }));

  return { status, isError, result };
}

export default getAllProducts;
