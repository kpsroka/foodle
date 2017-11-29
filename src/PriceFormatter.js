// @flow

const currencyFormat =
    new window.Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN', minimumFractionDigits: 2 });

const noCurrencyFormat = new window.Intl.NumberFormat('pl', { minimumFractionDigits: 2 });

const priceStringRegexp = /^\s*(\d+)(?:[,.](\d{0,2}))?\s*$/;

export function formatPriceNoCurrency(priceE2:number):string {
  return noCurrencyFormat.format(priceE2/100);
}

export function formatPrice(priceE2:number):string {
  return currencyFormat.format(priceE2/100);
}

export function parsePrice(priceString:string):number {
  const found = priceString.match(priceStringRegexp);
  if (!found) {
    throw new Error(`Illegal price string: ${priceString}`);
  }

  const integral = Number.parseInt(found[1], 10);
  const fractional =
      (found[2] === undefined || found[2].length === 0) ? 0 :
      (found[2].length === 1) ? (Number.parseInt(found[2], 10) * 10) : Number.parseInt(found[2], 10);
  return (integral * 100) + fractional;
}

export function isValidPriceString(priceString:string):boolean {
  return (typeof priceString === 'string') && (priceString.match(/^\s*\d+([,.]\d{0,2})?\s*$/) !== null);
}
