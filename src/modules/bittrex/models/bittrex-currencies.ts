export interface BittrexCurrencies {
  success: boolean;
  message: string;
  result: BittrexCurrency[];
}

export interface BittrexCurrency {
  Currency: string;
  CurrencyLong: string;
  MinConfirmation: number;
  TxFee: number;
  IsActive: boolean;
  CoinType: string;
  BaseAddress: null | string;
  Notice: null | string;
}