'use client';
import { commaSeprator, convertGregorianDateToJalaliDateWithHourAndMinute, toPersianDigits } from '@/app/helpers/utils';
import { Fragment, Suspense, useEffect, useState} from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import {  ArrowLeftIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from "react-toastify";
import RateStatus from '@/app/ui/exchange-rate/status';
import { ICurrency, MockData } from '@/app/model/cryto.model';
import Line from '@/app/ui/line';
import fetchCurrencyPrices from '@/app/services/crpyto.service';
import PaginationScope from '@/app/ui/exchange-rate/PaginationScope/pagination-scope';
interface ICrytopros{
  query: string;
  currentPage: number;
  isCrypto: boolean;
}

export default  function CryptocurrencyTable({
  query,
  currentPage,
  isCrypto,
}: ICrytopros
) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<ICurrency>|null>(null);
  const [page, setPage] = useState<number>(1);
const pageSize=10
  const [selectedInvoice, setSelectedInvoice] = useState<ICurrency|null>(null);
  const openModal = (invoice: any) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedInvoice(null); 
  };


  useEffect(() => {
    setPage(1)
    fetchData();
  }, [isCrypto]);


  const fetchData = async () => {
    setLoading(true)
    try {
      const  {data:list} = await fetchCurrencyPrices();
      if (isCrypto) {
        const CryptoData=list.price_list.filter( (item: ICurrency)  => item.is_systemic === false);
        setData(CryptoData);  
      
      } else {
        const currencyData=list.price_list.filter( (item: ICurrency)  => item.is_systemic === true);
        setData(currencyData); 


       ;
      }
    } catch (err) {
      toast.error(
        (err as Error).message)
    }finally{setLoading(false)}
  };
  return (
    <Fragment>
           <ToastContainer />
           {loading? <InvoicesTableSkeleton />:
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-white p-2 md:pt-0">
          {/* mobile  */}
          <div className="md:hidden">
            {data?.slice((page - 1) * pageSize, page * pageSize)?.map((invoice:ICurrency,index:number) => (
              <div
                key={uuidv4()}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <img
                        src={invoice.image}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.title}'s profile picture`}
                      />
                      <p>{invoice.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{toPersianDigits(invoice.current_buy_price)}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                  
                    <p>{convertGregorianDateToJalaliDateWithHourAndMinute(new Date().toString())}</p>
                  </div>
                  <div className="flex justify-end gap-2">
               
                  </div>
                </div>
              </div>
            ))}
          </div> 
          <table className="hidden min-w-full  text-gray-900 md:table"  >
            <thead className="rounded-lg  text-right  border-b  border-dashed text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6 ">
                نوع 
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                خرید شما (ریال)
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                فروش شما (ریال)
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                تغییرات (24 ساعت)
                </th>
                {!isCrypto ?<th scope="col" className="px-3 py-5 font-medium">
                آخرین به‌روزرسانی
                </th>:null}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
             <tbody className="bg-white">
              {data?.slice((page - 1) * pageSize, page * pageSize)?.map((invoice) => (
                <tr
                onClick={() => openModal(invoice)} // Add onClick here
                  key={uuidv4()}
                  className="w-full border-b  
                  border-dashed py-3 text-sm last-of-type:border-none 
                  [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg
                   [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg  hover:bg-blue-100 hover:bg-opacity-40"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={invoice.image}
                        className="rounded-full"
                        width={24}
                        height={24}
                        alt={`${invoice.title}'s profile picture`}
                      />
                      <p>{invoice.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {toPersianDigits(commaSeprator(invoice.current_buy_price))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                 
                  {toPersianDigits(commaSeprator(invoice.current_sell_price))}

                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <RateStatus status={invoice.percentage_change||0} />
                  </td>
                {!isCrypto ?<td className="whitespace-nowrap px-3 py-3">
                  <p>{convertGregorianDateToJalaliDateWithHourAndMinute(new Date().toString())}</p>
                  </td>:null}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <ArrowLeftIcon className="w-4" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> 
          </table>
        </div>
      </div>
    </div>
}
    <div className="mt-5 flex w-full justify-end">


     
        <PaginationScope
          totalItems={data?.length!}
          currentPage={page}
          setPage={setPage}
          pageSize={pageSize}
          maxPages={3}
        />
     


        </div>
        {/* Modal */}
        {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-lg relative">
      <h2 className="text-xl">{selectedInvoice?.title}</h2>
      <Line  data={selectedInvoice?.price_list!}/>
      
      <button
  onClick={closeModal}
  className="absolute top-2 left-2 w-5 h-5 text-xl text-gray-600 hover:text-gray-900 focus:outline-none border-[1.5px] border-[#606060] rounded-md flex items-center justify-center"
>
  &times;
</button>


    </div>
  </div>
)}

    </Fragment>
  );
}
