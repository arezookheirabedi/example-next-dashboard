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
  