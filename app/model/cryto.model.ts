export interface ICurrency {
    title: string;              
    iso_code: string;           
    is_favorite?: boolean;       
    symbol: string;             
    colors?: {
      one: string;              
      two: string;          
      three: string;            
      four: string;             
      five: string;             
    };
    price_list: number[];       
    current_price: number;      
    current_buy_price: number; 
    current_sell_price: number;
    percentage_change?: number; 
    image: string;             
    type?: string;               
    is_systemic: boolean;      
    flag: string;              
  }
  
  interface ApiResponse {
    message: string;          
    data: {
      price_list: ICurrency[];  
    };
  }