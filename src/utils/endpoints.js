export const HOST = 'https://x-app-api-dev.fl0.io';
export const API = `${HOST}/api/v1`;

const ENDPOINTS = {
  PUBLIC: `${HOST}/public`,

  AUTH: `${API}/auth`,
  USER: `${API}/users`,

  PRODUCTS: `${API}/product`,
  ORDERS: `${API}/order`,

  TICKETS: `${API}/tickets`,
  CODE_TICKET: `${API}/tickets/code`,

  DELIVER: `${API}/tickets/deliver`,
};

export default ENDPOINTS;