import { format, isAfter } from "date-fns";

import { ptBR } from "date-fns/locale";

export function compareDateToNow(dateToCompare: Date){
  const date = new Date();
  return isAfter(date, dateToCompare);
}

export function formatDate(date: Date) {
  return format(date, "EEEE '•' dd MMMM '•' HH:mm", {
    locale: ptBR
  })
}