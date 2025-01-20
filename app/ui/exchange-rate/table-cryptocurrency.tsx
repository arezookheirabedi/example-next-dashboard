'use client';
import { colDef, commaSeprator, convertGregorianDateToJalaliDateWithHourAndMinute, toPersianDigits } from '@/app/helpers/utils';
import { Fragment, useEffect, useState} from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { ToastContainer, toast } from "react-toastify";
import RateStatus from '@/app/ui/exchange-rate/status';
import { ICurrency} from '@/app/model/cryto.model';
import Line from '@/app/ui/line';
import fetchCurrencyPrices from '@/app/services/crpyto.service';
import PaginationScope from '@/app/ui/components/PaginationScope/pagination-scope';
import { Modal } from '../components/Modal';
import { EntityTable, IColumn } from '../components/table-scope/entityTable';
interface ICrytopros{
  query: string;
  currentPage: number;
  isCrypto: boolean;
}
const pageSize=10
export function CryptocurrencyTable({
  query,
  currentPage,
  isCrypto,
}: ICrytopros
) {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Array<ICurrency>>([]);
  const [page, setPage] = useState<number>(1);
  const [selectedInvoice, setSelectedInvoice] = useState<ICurrency|null>(null);

  const openModal = (invoice: any) => {
    setSelectedInvoice(invoice);
    setShow(true); 
  };
  const closeModal = () => {
    setShow(false); 
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
  const columns: IColumn<ICurrency>[] = [
    colDef("title", ("نوع"), (_, y) =>
      <div className="flex items-center gap-3">
                      <img
                        src={y.image}
                        className="rounded-full"
                        width={24}
                        height={24}
                        alt={`${y.title}'s profile picture`}
                      />
                      <p>{y.title}</p>
                    </div>
    ),
    colDef("title", (" خرید شما (ریال)"), (_, y) =>
      <p> {toPersianDigits(commaSeprator(y.current_buy_price))}</p>
),
    colDef("title", (" فروش شما (ریال)"), (_, y) =>
      <p> {toPersianDigits(commaSeprator(y.current_sell_price))}</p>
),
    colDef("title", ("  تغییرات (24 ساعت)"), (_, y) =>
      <RateStatus status={y.percentage_change||0} />
),
  colDef("title", ("  آخرین به‌روزرسانی"), (_, y) =>
               <p>{convertGregorianDateToJalaliDateWithHourAndMinute(new Date().toString())}</p>
  ),
   
  ]; 
  return (
    <Fragment>
           <ToastContainer />
           {loading? <InvoicesTableSkeleton />:
          
                  <EntityTable<ICurrency>
                 onRowClick={openModal}
                 error={false}
                 tableColumns={columns}
                 dataList={data?.slice((page - 1) * pageSize, page * pageSize)}
               /> 
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
       <Modal title={selectedInvoice?.title!} closeModal={closeModal} showModal={show}>
        <Line  data={selectedInvoice?.price_list!}/>
        </Modal>
    </Fragment>
  );
}
