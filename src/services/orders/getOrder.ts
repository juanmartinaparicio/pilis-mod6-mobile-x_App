import { Order } from './types';

import ENDPOINTS from '@/utils/endpoints';
import { Response } from '@/utils/request';

/**
 * Obtiene una orden utilizando su ID.
 * @async
 * @param {string} orderId - El ID de la orden que se desea obtener.
 * @returns {Promise<{ status: number, isError: boolean, result: Order }>}
 * Un objeto con información sobre el resultado de la solicitud para obtener una orden.
 * - `status` (number): El código de estado HTTP de la respuesta.
 * - `isError` (boolean): Indica si hubo un error en la solicitud (true si hay un error).
 * - `result` (Order): Los datos de la orden obtenida si la solicitud fue exitosa.
 * @throws {Error} Si ocurre un error en la solicitud fetch o al procesar la respuesta.
 */

type Result = Response<Order>;
async function getOrder(orderId: string): Promise<Result> {
  const url = `${ENDPOINTS.ORDERS}/${orderId}`;
  const response = await fetch(url);

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result = await response.json();

  return { status, isError, result };
}

/**
 * @typedef {Object} Order
 * @property {string} id - El ID de la orden.
 * @property {string} status - El estado de la orden (por ejemplo, "pending").
 * @property {string} createdAt - La fecha y hora de creación de la orden en formato ISO8601.
 * @property {string} updatedAt - La fecha y hora de actualización de la orden en formato ISO8601.
 * @property {Array<OrderDetail>} orderDetail - Un arreglo de objetos que representan los detalles de la orden.
 */

/**
 * @typedef {Object} OrderDetail
 * @property {string} id - El ID del detalle de la orden.
 * @property {string} description - La descripción del detalle de la orden.
 * @property {string} quantity - La cantidad del detalle de la orden.
 * @property {string} subTotal - El subtotal del detalle de la orden.
 * @property {string} createdAt - La fecha y hora de creación del detalle de la orden en formato ISO8601.
 */

export default getOrder;
