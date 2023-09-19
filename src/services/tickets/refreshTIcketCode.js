import ENDPOINTS from '../utils/endpoints';

/**
 * Realiza una solicitud para actualizar el código de un ticket mediante un método PUT a un endpoint.
 * @async
 * @param {string} ticketId - El ID del ticket que se desea actualizar.
 * @returns {Promise<{ status: number, isError: boolean, result: { message: string, code: string } }>}
 * Un objeto con información sobre el resultado de la solicitud para actualizar el código de un ticket.
 * - `status` (number): El código de estado HTTP de la respuesta.
 * - `isError` (boolean): Indica si hubo un error en la solicitud (true si hay un error).
 * - `result` (Object): Los datos del resultado de la actualización del código del ticket.
 *   - `message` (string): El mensaje de la respuesta, que indica la acción realizada.
 *   - `code` (string): El nuevo código asignado al ticket.
 * @throws {Error} Si ocurre un error en la solicitud fetch o al procesar la respuesta.
 */
async function refreshTicketCode(ticketId) {
  const url = `${ENDPOINTS.REFRESH_TICKET}/${ticketId}`;
  const method = 'PUT';

  const response = await fetch(url, { method });

  const status = response.status;
  const isError = !response.ok;

  if (isError) return { status, isError };

  const result = await response.json();

  return { status, isError, result };
}

export default refreshTicketCode;
