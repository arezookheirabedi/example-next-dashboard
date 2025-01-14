'use client';
import Image from 'next/image';
import { removeNegativeSign, toPersianDigits } from '@/app/helpers/utils';
import clsx from 'clsx';

export default function RateStatus({ status }: { status: number }) {
  function checkSign(data: number) {
    if (data > 0) {
      return "positive";
    } else if (data < 0) {
      return "negative";
    } else {
      return null;
    }
  }
  const sign = checkSign(status);
  return (
    <div className="flex">
      <span
        className={clsx(
          "pr-1",
          sign === "negative" ? "text-[#F44444]" : "text-[#11BB69]"
        )}
      >
        {sign ? `${toPersianDigits(removeNegativeSign(status))}٪` : "-"}
      </span>
      {sign && (
        <Image
          src={sign === "negative" ? "/icons/DropDown.png" : "/icons/DropUp.png"}
          width={24}
          height={24}
          alt="status icon"
        />
      )}
    </div>
  );
}
