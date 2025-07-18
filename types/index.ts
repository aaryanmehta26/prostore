import { insertProductSchema } from "@/lib/validators";
import z from "zod";

//creating product type.
export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
