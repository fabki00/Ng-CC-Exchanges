export interface NovaExchangeMarkets {
  status: string;
  message: string;
  markets: NovaExchangeMarket[];
}

export interface NovaExchangeMarket {
  bid: string;
  'last_price': string;
  volume24h: string;
  marketid: number;
  disabled: number;
  currency: string;
  marketname: string;
  ask: string;
  low24h: string;
  change24h: string;
  high24h: string;
  basecurrency: string;
}
