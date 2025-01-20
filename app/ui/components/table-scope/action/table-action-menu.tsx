'use client';

import { useRef, useState } from "react";
import { ITableAction } from "../entityTable";
import {  ArrowLeftIcon } from '@heroicons/react/24/outline';
import {ActionButton} from "./ActionButton";
import { v4 as uuidv4 } from 'uuid';


interface IProps<T> {
  data: T;
  actionList: Array<ITableAction<T>>;
}

export function TableActionMenu<T>(props: IProps<T>) {
  const { data, actionList } = props;
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    
    <>
      <button
        ref={ref}
           className="inline-flex items-center justify-center text-xs font-medium focus:outline-none"
        aria-label="table-action"
        onClick={() => setIsOpen(true)}
      >
     
     <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                    <ArrowLeftIcon className="w-4" />
                    </div>
                  </td>
      </button>

      <div
        data-testid="table-action-menu"
      >
        {actionList.map((list: ITableAction<T>) => {
          return (
            <ActionButton
            key={uuidv4()}
            icon={
              list.icon
            }
            title={list.title}
            onClick={() => {
              list.action(data);
            }}
            disabled={list.isDisabled}
          />
          );
        })}
      </div>
    </>
  );
}
