export function formatValue(value: number) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-br').format(date);
}