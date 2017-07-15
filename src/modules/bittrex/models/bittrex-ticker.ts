export interface BittrexTicker {
    marketName: string;
    ticker: Result;
}
export interface BittrexResponseTicker {
  success: boolean;
  message: string;
  result: Result;
}

export interface Result {
  Bid: number;
  Ask: number;
  Last: number;
}
