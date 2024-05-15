export interface BuyApiResponse {
  data: number;
  success: boolean;
  errorMessage: string;
}

export interface BuyRequestBody {
  concertId: string;
  ticketsQuantity: string;
}
