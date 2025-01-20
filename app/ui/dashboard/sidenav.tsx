import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col py-4">
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
      />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 ">
        <NavLinks />
        <div className="hidden h-auto w-full grow    md:block"></div>

      </div>
    </div>
  );
}
