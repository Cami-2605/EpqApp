export interface GenericResponse<T> {
  mensaje: string;
  data: T | null;
}