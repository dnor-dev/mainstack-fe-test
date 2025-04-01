export type Metadata = {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
};

export type Transaction = {
  amount: number;
  payment_reference: string;
  date: string;
  metadata: Metadata;
  type: "deposit" | "withdrawal";
  status: "pending" | "successful" | "failed";
};
