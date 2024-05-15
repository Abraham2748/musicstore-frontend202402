export interface SaleApiResponse {
  data: Sale;
  success: boolean;
  errorMessage: string;
}
export interface Sale {
  saleId: number;
  dateEvent: string;
  timeEvent: string;
  genre: string;
  imageUrl: string;
  title: string;
  operationNumber: string;
  fullName: string;
  quantity: number;
  saleDate: string;
  total: number;
}

export const emptySale: Sale = {
  saleId: 0,
  dateEvent: '',
  timeEvent: '',
  genre: '',
  imageUrl: '',
  title: '',
  operationNumber: '',
  fullName: '',
  quantity: 0,
  saleDate: '',
  total: 0,
};
