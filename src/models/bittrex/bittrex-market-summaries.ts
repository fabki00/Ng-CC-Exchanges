export interface BittrexMarketSummaries {
  success: boolean;
  message: string;
  result: BittrexMarketSummary[];
}

export interface BittrexMarketSummary {
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
}
