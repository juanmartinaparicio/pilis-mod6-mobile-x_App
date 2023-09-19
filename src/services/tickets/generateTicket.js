import ENDPOINTS from '../../utils/endpoints';

/**
 * Genera un ticket para una orden mediante una solicitud POST a un endpoint.
 * @async
 * @param {string} orderId - El ID de la orden para la cual se va a generar el ticket.
 * @returns {Promise<{ status: number, isError: boolean, result: Ticket }>}
 * Un objeto con información sobre el resultado de la solicitud para generar un ticket.
 * - `status` (number): El código de estado HTTP de la respuesta.
 * - `isError` (boolean): Indica si hubo un error en la solicitud (true si hay un error).
 * - `result` (Ticket): Los datos del ticket generado si la solicitud fue exitosa.
 * @throws {Error} Si ocurre un error en la solicitud fetch o al procesar la respuesta.
 */
async function generateTicket(orderId) {
  const url = `${ENDPOINTS.TICKETS}/${orderId}`;
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' };

  const response = await fetch(url, { method, headers });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result = await response.json();

  return { status, isError, result };
}

/**
 * @typedef {Object} Ticket
 * @property {string} id - El ID del ticket.
 * @property {string} createAt - La fecha y hora de creación del ticket en formato ISO8601.
 * @property {boolean} isDelivered - Indica si el ticket ha sido entregado (true/false).
 * @property {boolean} isExpired - Indica si el ticket ha caducado (true/false).
 * @property {string} code - El código del ticket.
 * @property {string} orderId - El ID de la orden asociada al ticket.
 * @property {Array<TicketDetail>} detail - Un arreglo de objetos que representan los detalles del ticket.
 */

/**
 * @typedef {Object} TicketDetail
 * @property {string} id - El ID del detalle del ticket.
 * @property {string} description - La descripción del detalle del ticket.
 * @property {string} quantity - La cantidad del detalle del ticket.
 * @property {string} subTotal - El subtotal del detalle del ticket.
 * @property {string} createdAt - La fecha y hora de creación del detalle del ticket en formato ISO8601.
 */

export default generateTicket;
