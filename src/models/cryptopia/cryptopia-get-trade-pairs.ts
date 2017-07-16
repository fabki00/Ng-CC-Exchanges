export interface CryptopiaTradePairs {
  Success: boolean;
  Message?: any;
  Data: CryptopiaTradePair[];
  Error?: any;
}

export interface CryptopiaTradePair {
  Id: number;
  Label: string;
  Currency: string;
  Symbol: string;
  BaseCurrency: string;
  BaseSymbol: string;
  Status: string;
  StatusMessage: null | string;
  TradeFee: number;
  MinimumTrade: number;
  MaximumTrade: number;
  MinimumBaseTrade: number;
  MaximumBaseTrade: number;
  MinimumPrice: number;
  MaximumPrice: number;
}
