import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  stock: number | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
