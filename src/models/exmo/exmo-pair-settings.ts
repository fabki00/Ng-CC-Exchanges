interface ExmoMarkets {
  markets: ExmoMarket[];
}

interface ExmoMarket {
  'min_quantity': string;
  'max_quantity': string;
  'min_price': string;
  'max_price': string;
  'max_amount': string;
  'min_amount': string;
}
