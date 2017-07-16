export interface HitBtcSymbols {
  symbols: HitBtcSymbol[];
}

export interface HitBtcSymbol {
  symbol: string;
  step: string;
  lot: string;
  currency: string;
  commodity: string;
  takeLiquidityRate: string;
  provideLiquidityRate: string;
}
