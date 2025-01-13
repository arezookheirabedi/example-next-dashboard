export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return function (...args: Parameters<T>) {
      // Clear the previous timeout if it exists
      clearTimeout(timeoutId);
  
      // Set a new timeout to call the function after the specified delay
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  
export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const convertGregorianDateToJalaliDateWithHourAndMinute2 = (date: any) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute:'2-digit'
  });
};
export const convertGregorianDateToJalaliDateWithHourAndMinute  = (date: any) => {
  if (!date) return null;
  
  const jalaliFormatter = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const formattedDate = jalaliFormatter.format(new Date(date));
  const formattedTime = timeFormatter.format(new Date(date));

  return `${formattedTime} | ${formattedDate}`;
};
export const convertGregorianDateToJalali = (date: any) => {
  if (!date) return null;
  return new Date(date).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',

  });
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function toPersianDigits(input: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  
  // Convert the input to a string if it's a number
  const inputStr = input.toString();
  
  // Replace all English digits with Persian digits
  return inputStr.replace(/[0-9]/g, (w) => persianDigits[+w]);
}
export  function commaSeprator  (input: string | number): string {
  const inputStr = input.toString();
  return inputStr.replaceAll(/(\d)(?=(\d{3})+$)/g, "$1,");
};


