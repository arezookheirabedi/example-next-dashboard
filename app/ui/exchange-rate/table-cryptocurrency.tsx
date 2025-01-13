'use client';
import Image from 'next/image';
import { convertGregorianDateToJalaliDateWithHourAndMinute } from '@/app/lib/utils';
import { Suspense} from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/exchange-rate/pagination';
import {  ArrowLeftIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from 'uuid';
import RateStatus from '@/app/ui/exchange-rate/status';
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
 
  const invoices=[{id:"45v4353",image_url:"/customers/amy-burns.png",name:"dsfsdf",email:"sdsf",status:"asfsdf"},{id:"454353",image_url:"/customers/amy-burns.png",name:"dsfsdf",email:"sdsf",status:"asfsdf"},{id:"454353",image_url:"/customers/amy-burns.png",name:"dsfsdf",email:"sdsf",status:"asfsdf"}]
  const totalPages =2; 
  return (
    <>
   <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>  
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-white p-2 md:pt-0">
          {/* mobile  */}
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={uuidv4()}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
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
              {invoices?.map((invoice) => (
                <tr
                  key={uuidv4()}
                  className="w-full border-b  
                  border-dashed py-3 text-sm last-of-type:border-none 
                  [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg
                   [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-gray-100"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={24}
                        height={24}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    amount
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <RateStatus status={"negetive"} />


                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  <p>{convertGregorianDateToJalaliDateWithHourAndMinute(new Date().toString())}</p>
                  </td>
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
    </Suspense> 
    <div className="mt-5 flex w-full justify-end">
          <Pagination totalPages={totalPages} />
        </div>
    </>
  );
}
