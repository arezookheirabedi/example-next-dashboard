'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

const links = [
  { name: 'داشبورد', href: '/dashboard', icon: "/sidebar/Home.png" },
  { name: 'کیف پول', href: '/dashboard/wallet', icon: "/sidebar/Wallet.png" },
  { name: 'سرویس‌ها', href: '/dashboard/services', icon: "/sidebar/Services.png" },
  { name: 'پیگیری سفارش‌ها', href: '/dashboard/orders', icon: "/sidebar/M-Orders.svg" },
  { name: ' تیکت', href: '/dashboard/ticket', icon: "/sidebar/Ticket.png" },
  { name: ' نرخ ارز', href: '/dashboard/exchangeRate', icon: "/sidebar/Currency-blue.svg" },
  { name: 'حساب کاربری', href: '/dashboard/profile', icon: "/sidebar/Profile.png" }

];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'relative flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-blue-100 hover:bg-opacity-40 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            { 'bg-blue-100 bg-opacity-40 text-blue-600': pathname === link.href }
          )}
        >
          <div className="relative flex items-center">
            {/* Reserve space for pointer */}
            <div className="w-[10px] md:w-[15px] flex-shrink-0">
              {pathname === link.href && (
                <Image
                  src="/sidebar/Pointer-2x.png"
                  className="hidden md:block"
                  width={5}
                  height={30}
                  alt="sidebar selected pointer desktop version"
                />
              )}
              {pathname === link.href && (
                <Image
                  src="/sidebar/Pointer.png"
                  className="block md:hidden"
                  width={3}
                  height={10}
                  alt="sidebar selected pointer mobile version"
                />
              )}
            </div>
            {/* Icon */}
            <Image
              src={link.icon}
              alt={`${link.name} icon`}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          {/* Link text */}
          <p className="hidden md:block">
            <span className="font-IRANYekanXFaNum text-[16px] font-normal leading-[24px] text-right">
              {link.name}
              </span>
              </p>
        </Link>
      ))}
    </>
  );
}
