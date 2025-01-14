'use client';
import Image from 'next/image';

export default function UserArea() {
  return (
    <>
        <div className="flex items-center flex-row-reverse xl:flex-row justify-between pr-0 py-5 space-x-5 rtl:space-x-reverse">
        <h6 className="font-IRANYekanXFaNum text-[16px] font-semibold leading-[24px] text-right">
            مهرناز عادلخانی 
            </h6>
        </div>

      <div className="flex items-center flex-row-reverse xl:flex-row justify-between py-5 space-x-5 rtl:space-x-reverse">
       <div className="flex items-center flex-row-reverse xl:flex-row justify-between py-5 space-x-5 rtl:space-x-reverse">
               <Image
                                src="/private-header/Search.png"
                                width={24}
                                height={24}
                                alt="header search icon"
                              />
                                     <Image
                                src="/private-header/Question.png"
                                width={24}
                                height={24}
                                alt="header question icon"
                              />
                                         <Image
                                src="/private-header/NotifBell.png"
                                width={24}
                                height={24}
                                alt="header NotifBell icon"
                              />
                                         <Image
                                src="/private-header/Profile.png"
                                width={48}
                                height={48}
                                alt="header Profile icon"
                              />
          </div>
      </div>
      </>
    )}