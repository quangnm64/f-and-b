export interface BookingPayload {
  fullName: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  notes?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
}
