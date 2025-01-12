import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/exchange-rate/table-currency';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import CurrencyTable from '@/app/ui/exchange-rate/table-currency';
import CryptocurrencyTable from '@/app/ui/exchange-rate/table-cryptocurrency';
//import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className={`${lusitana.className} text-2xl`}>نرخ ارز</h1>
      </div>
      <div className="bg-white border-0 rounded-lg p-4">


      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
  <div>toggle button</div>
  <div className="flex-grow max-w-xs">
    <Search placeholder="جست و جو" />
  </div>
</div>
        <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CurrencyTable query={query} currentPage={currentPage} />
      </Suspense> 
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CryptocurrencyTable query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center">
         <Pagination totalPages={totalPages} /> 
      </div> 
      </div>
    </div>
  );
}