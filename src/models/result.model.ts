export interface IResult<T> {
  isSuccess: boolean;
  message: string | [];
  data: T | null;
  statusCode: number;
}
