'use client';
import Search from '@/app/ui/search';
import CryptocurrencyTable from '@/app/ui/exchange-rate/table-cryptocurrency';
import ToggleButton from '@/app/ui/toggle-button';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
export default function Page() {
    const [isCrypto, setIsCrypto] = useState(false);
    const searchParams = useSearchParams();
    const query = searchParams.get('query') || ''; 
    const currentPage = Number(searchParams.get('page')) || 1
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className= "text-2xl">نرخ ارز</h1>
      </div>
      <div className="bg-white border-0 rounded-lg p-4">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <ToggleButton isCrypto={isCrypto }  setIsCrypto={setIsCrypto}/>
          <div className="flex-grow max-w-xs">
            <Search placeholder="جست و جو" />
          </div>
        </div>
            <CryptocurrencyTable  isCrypto={isCrypto}query={query} currentPage={currentPage} />
      </div>
    </div>
  );
}
