import ENDPOINTS from "../utils/endpoints";

/**
 * Genera una orden mediante una solicitud POST a un endpoint.
 * @async
 * @param {Array<{ productId: string, quantity: number }>} products - Un arreglo de objetos que representan los productos a incluir en la orden.
 * @returns {Promise<{ status: number, isError: boolean, result: Order }>}
 * Un objeto con información sobre el resultado de la solicitud para generar una orden.
 * - `status` (number): El código de estado HTTP de la respuesta.
 * - `isError` (boolean): Indica si hubo un error en la solicitud (true si hay un error).
 * - `result` (Order): Los datos de la orden generada si la solicitud fue exitosa.
 * @throws {Error} Si ocurre un error en la solicitud fetch o al procesar la respuesta.
 */
async function generateOrder(products) {
  const url = `${ENDPOINTS.ORDERS}`;
  const method = "POST";
  const body = JSON.stringify({products});

  const response = await fetch(url, { method, body });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result = await response.json();

  return { status, isError, result };
}

/**
 * @typedef {Object} Order
 * @property {string} id - El ID de la orden generada.
 * @property {string} status - El estado de la orden (por ejemplo, "pending").
 * @property {string} createdAt - La fecha y hora de creación de la orden en formato ISO8601.
 * @property {string} updatedAt - La fecha y hora de actualización de la orden en formato ISO8601.
 */

export default generateOrder;
