export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export interface Response<T = void> {
  isError: boolean;
  status: number;
  result?: T;
}
