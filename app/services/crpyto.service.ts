import axios from 'axios';
import { ICurrencyResponse } from '@/app/model/cryto.model'; // Adjust the path as needed

const fetchCurrencyPrices = async (): Promise<ICurrencyResponse> => {
  const url = 'https://my.zimapay.com/api/v3/public/currencies/price-list';

  try {
    const response = await axios.get<ICurrencyResponse>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching currency prices:', error);
    throw error; // Rethrow the error for further handling
  }
};

export default fetchCurrencyPrices;
