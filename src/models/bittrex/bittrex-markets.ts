export interface BittrexMarkets {
  success: boolean;
  message: string;
  result: BittrexMarket[];
}

export interface BittrexMarket {
  MarketCurrency: string;
  BaseCurrency: string;
  MarketCurrencyLong: string;
  BaseCurrencyLong: string;
  MinTradeSize: number;
  MarketName: string;
  IsActive: boolean;
  Created: string;
  Notice: null | string;
  IsSponsored: boolean | null;
  LogoUrl: null | string;
}