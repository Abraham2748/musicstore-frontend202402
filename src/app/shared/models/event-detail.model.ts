import { Concert } from './concert.model';

export interface EventDetailApiResponse {
  data: Concert;
  success: boolean;
  errorMessage: string;
}
