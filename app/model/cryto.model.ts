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
  
  export interface ICurrencyResponse {
    message: string;          
    data: {
      price_list: ICurrency[];  
    };
  }
  export const MockData = {
    message: "",
    data: {
      price_list: [
        {
          title: "دلار",
          iso_code: "USD",
          is_favorite: false,
          symbol: "$",
          colors: {
            one: "#298ffe",
            two: "#1c85f6",
            five: "#006cea",
            four: "#006cea",
            three: "#006cea"
          },
          price_list: [810166, 804272, 802533, 799750, 806000, 811888, 816000, 819000, 822437, 818888],
          current_price: 818000,
          current_buy_price: 811000,
          current_sell_price: 818000,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/XYEeBNeNhXtoIlfER56sLynpNpQK3nULipNISasa.png",
          type: "fiat",
          is_systemic: true,
          flag: "https://my.zimapay.com/storage/images/currencies/QfFh8KBd2IyTWcVHuwtvhQYxaPIkNIjIO89T3dBB.png"
        },
        {
          title: "یورو",
          iso_code: "EUR",
          is_favorite: false,
          symbol: "€",
          colors: {
            one: "#b785ff",
            two: "#ab72fe",
            five: "#9a51f5",
            four: "#9a51f5",
            three: "#9a51f5"
          },
          price_list: [830833, 826666, 827800, 829400, 837500, 837666, 841600, 843000, 843750, 838555],
          current_price: 836000,
          current_buy_price: 829000,
          current_sell_price: 836000,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/ItAgdWkURsA1Jthi4TnOgUYbew0buFlNKwlD8ygh.png",
          type: "fiat",
          is_systemic: true,
          flag: "https://my.zimapay.com/storage/images/currencies/HxMkDtKHrZ83rqHVob7zMF2WlIOJPk7ttDenBSsw.png"
        },
        {
          title: "لیر",
          iso_code: "TRY",
          is_favorite: false,
          symbol: "₺",
          colors: {
            one: "#fcba7f",
            two: "#faa961",
            five: "#ff871c",
            four: "#ff871c",
            three: "#ff871c"
          },
          price_list: [24000, 23750, 23500, 23500, 23500, 23722, 24000, 24000, 24000, 24000],
          current_price: 24000,
          current_buy_price: 21500,
          current_sell_price: 24000,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/vzv7RvTvfppMKm7RbLbSEU3pvovoW4MdF7fyc8Nz.png",
          type: "fiat",
          is_systemic: true,
          flag: "https://my.zimapay.com/storage/images/currencies/arv12nRxVv1JJwPT1sFvkCy5bXcO02Y1eZkqpO0B.png"
        },
        {
          title: "بیت کوین",
          iso_code: "BTC",
          is_favorite: false,
          symbol: "₿",
          colors: {
            one: "#fce94f",
            two: "#edd400",
            five: "#edd400",
            four: "#edd400",
            three: "#edd400"
          },
          price_list: [98013.3736263736, 98060.2607142857, 100176.133574007, 99873.3701067616, 95483.9513888889, 93544.28, 94532.3735632184, 94380, 94481.1857142857, 94564.8870967742],
          current_price: 94307,
          current_buy_price: 94307,
          current_sell_price: 94307,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/iSHwzdT2pvC8gsTzhH1H9z21if3EORh9r9W5itdM.png",
          type: "crypto",
          is_systemic: false,
          flag: ""
        },
        {
          title: "تتر",
          iso_code: "USDT",
          is_favorite: false,
          symbol: "₮",
          colors: {
            one: "#000000",
            two: "#000000",
            five: "#000000",
            four: "#000000",
            three: "#000000"
          },
          price_list: [0.999684692307692, 0.999766453571429, 1.00003573646209, 0.999526918149466, 0.999804576388889, 0.999490828, 0.999904063218391, 0.999591659192825, 0.999480832142857, 0.99947385483871],
          current_price: 0.999405,
          current_buy_price: 0.999405,
          current_sell_price: 0.999405,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/GaGqUl04ke1B0VOtJ0Zd7wHpbT06JouGXH48fRRb.png",
          type: "crypto",
          is_systemic: false,
          flag: ""
        },
        {
          title: "تزوس",
          iso_code: "XTZ",
          is_favorite: false,
          symbol: "XTZ",
          colors: {
            one: "#000000",
            two: "#000000",
            five: "#000000",
            four: "#000000",
            three: "#000000"
          },
          price_list: [1.43216117216117, 1.42957142857143, 1.4585559566787, 1.40320284697509, 1.30010416666667, 1.28348, 1.27649425287356, 1.2737668161435, 1.27321428571429, 1.25612903225806],
          current_price: 1.24,
          current_buy_price: 1.24,
          current_sell_price: 1.24,
          percentage_change: 0,
          image: "https://my.zimapay.com/storage/images/currencies/YVeBqYQCYQ7dQnM9rtOwT1m2OQPjcnpjwzVXZwjt.png",
          type: "crypto",
          is_systemic: false,
          flag: "https://my.zimapay.com/storage/images/currencies/sTn9UIevau3OVcWKjvnlej7L2ERI4t2PFL9FAFvg.png"
        }
      ]
    }
  };
  