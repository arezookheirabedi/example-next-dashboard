import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';

export default function UserArea() {
  return (
    <div className="flex w-full justify-end xl:justify-between space-x-5 rtl:space-x-reverse">
          <div className="flex items-center flex-row-reverse xl:flex-row justify-between pr-0 py-5 space-x-5 rtl:space-x-reverse">
            <div className="relative">
            مهرناز عادلخانی
            </div>
          </div>

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


    )}