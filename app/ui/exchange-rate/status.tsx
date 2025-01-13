import Image from 'next/image';

import { toPersianDigits } from '@/app/helpers/utils';

export default function RateStatus({ status }: { status: string }) {
  return (
 <div className='flex'>
         <span className="pr-1">{toPersianDigits(123)}٪</span>
    
            <Image src={status === 'negetive'?"/icons/DropDown.png":"/icons/DropUp.png"}
              width={24}
              height={24}
              alt="back icon for pagination"
            />
      
      </div>
  );
}
