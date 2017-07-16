export interface CcexMarketsSummaries {
  success: boolean;
  message: string;
  result: CcexMarketsSummary[];
}

export interface CcexMarketsSummary {
  MarketName: string;
  High: number;
  Low: number;
  Volume: number;
  Last: number;
  BaseVolume: number;
  TimeStamp: string;
  Bid: number;
  Ask: number;
  OpenBuyOrders: number;
  OpenSellOrders: number;
  PrevDay: number;
  Created: string;
  DisplayMarketName?: any;
}
