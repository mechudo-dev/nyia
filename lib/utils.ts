import * as Crypto from 'expo-crypto';

export const formatCurrency = (number: number) => {
  const currencyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });
  return currencyFormatter.format(number);
}

export const generateUUID = () => {
  const uuid = Crypto.randomUUID();
  return uuid;
};
