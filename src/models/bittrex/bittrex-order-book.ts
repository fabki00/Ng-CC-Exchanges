export interface BittrexOrderBook {
  success: boolean;
  message: string;
  result: BittrexOrder[];
}

export interface BittrexOrder {
  Quantity: number;
  Rate: number;
}
