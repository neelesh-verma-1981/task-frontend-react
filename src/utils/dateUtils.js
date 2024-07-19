import { format } from 'date-fns';
import { enIN } from 'date-fns/locale';

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'dd-MM-yyyy hh:mm a', { locale: enIN });
};
