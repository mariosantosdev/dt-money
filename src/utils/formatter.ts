export const dateFormatter = (date: Date) =>
  Intl.DateTimeFormat("pt-br").format(date);

export const currencyFormatter = (value: number) =>
  Intl.NumberFormat("pt-br", { style: "currency", currency: "brl" }).format(
    value
  );
