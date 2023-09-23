export const HOST = 'https://x-app-api-dev.fl0.io';
export const API = `${HOST}/api/v1`;

const ENDPOINTS = {
  PUBLIC: `${HOST}/public`,

  AUTH: `${API}/auth`,
  USER: `${API}/users`,

  PRODUCTS: `${API}/product`,
  ORDERS: `${API}/order`,

  REFRESH_ORDER: `${API}/order/refresh`,
} as const;

export default ENDPOINTS;
