'use client';
import SideNav from '@/app/ui/dashboard/sidenav';
import UserArea from '@/app/ui/dashboard/user-area';
import React, { useEffect } from 'react';
import Image from 'next/image';

import { useLayoutEffect, useRef, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsible, setCollapsible] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div
        className={`border-l xl:border-none overflow-hidden h-screen fixed z-50 w-72 pb-12 bg-white transition-all ease-in-out duration-300 
          ${collapsed && collapsible ? ' -right-72' : ' right-0'}
          `}
      >
     <div className="pt-2 flex flex-col space-y-4">
          <SideNav />
        </div>
      </div>
      <div className="mr-0 xl:mr-72 relative min-h-screen overflow-hidden overflow-y-auto">
        <div className="lg:pl-8 xl:pr-32 xl:pl-10 sm:px-12 sm:py-6 px-2 py-2 xl:py-0 min-h-screen flex flex-col bg-[#faf9f9]">
          <div className="lg:py-4">
            <div className="flex w-full justify-end xl:justify-between space-x-5 rtl:space-x-reverse">
           <UserArea/>
            </div>
          </div>
          <div className="justify-center items-center flex flex-col h-full space-y-8 mt-8">
          {children}
        </div>
        </div>
      </div>
    </>
  
  );
}
