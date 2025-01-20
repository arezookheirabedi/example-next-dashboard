'use client';
import {ReactElement} from 'react';

interface IProps {
  icon: ReactElement;
  title: string;
  onClick: any;
  disabled?: boolean;
}

export const ActionButton: React.FC<IProps> = ({onClick: handleClick, title, icon, disabled=false}) => {
  return (
    <>
      <button
        disabled={disabled || false}
        type="button"
        onClick={handleClick}
        className="group flex w-full text-slate-800  items-center px-2 py-2 text-sm hover:bg-gray-100 "
      >
        {icon}
        <span className={`${disabled ? 'text-gray-400' : ''}`}> &nbsp;&nbsp;&nbsp;{title}</span>
      </button>
    </>
  );
};
