export function formatNumber(num: number): string {
  let stringNumber = num.toString();
  let formattedNumber = stringNumber;
  let suffix = '';

  if (stringNumber.length > 3 && stringNumber.length < 7) {
    formattedNumber = Intl.NumberFormat('pt-BR').format(num);
    formattedNumber = formattedNumber.slice(0, -2);
    suffix = 'mil';
  }

  if (stringNumber.length > 6) {
    formattedNumber = Intl.NumberFormat('pt-BR').format(num);
    formattedNumber = formattedNumber.slice(0, -6);
    suffix = 'mi';
  }

  return `${formattedNumber} ${suffix}`;
}
