export interface Table<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
