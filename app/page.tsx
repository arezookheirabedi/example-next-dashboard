'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end    p-4 md:h-52">
      <Link
        className=" flex h-20 items-center justify-center  p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32  md:w-40">
        <Image
        src="/ZimaLogo-desk.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
        priority
      />
            <Image
        src="/ZimaLogo.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
        priority
      />
        
        </div>
      </Link>
      </div>
        <div className="flex flex-col justify-center gap-6   px-6 py-10 md:w-2/5 md:px-20">
       
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start  bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>ورود </span> 
          </Link> 
        </div>

    </main>
  );
}
