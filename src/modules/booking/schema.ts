import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(8),
  guests: z.number().min(1),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional(),
});
