export interface CryptopiaMarkets {
  Success: boolean;
  Message?: any;
  Data: CryptopiaMarket[];
  Error?: any;
}

export interface CryptopiaMarket {
  TradePairId: number;
  Label: string;
  AskPrice: number;
  BidPrice: number;
  Low: number;
  High: number;
  Volume: number;
  LastPrice: number;
  BuyVolume: number;
  SellVolume: number;
  Change: number;
  Open: number;
  Close: number;
  BaseVolume: number;
  BuyBaseVolume: number;
  SellBaseVolume: number;
}
