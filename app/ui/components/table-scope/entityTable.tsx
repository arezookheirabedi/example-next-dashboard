'use client';

import React, { Fragment} from "react";
//import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';
import { TableActionMenu } from "./action/table-action-menu";
export interface IColumn<T> {
  title: string|"";
  key: string;
  align?: "left" | "right" | "center";
  render?: (col: IColumn<T>, record: T) => React.ReactNode;
}
export interface ITableAction<T> {
  icon: any
  title: string;
  action: (data: T) => void;
  isDisabled?: boolean;
}
interface ITableProps<T> {
  onRowClick?: (data: T) => void;
  error: boolean;
  actions?: Array<ITableAction<T>>;
  dataList: Array<T>;
  tableColumns: Array<IColumn<T>>;
}
export function EntityTable<T>(props: ITableProps<T>) {
  
  //const { t } = useTranslation();
  const {
    onRowClick,
    error = false,
    dataList = [],
    tableColumns = [],
    actions = [],
  } = props;



  const onClickRow = (data: T) => {
    onRowClick && onRowClick(data);
  };
  const getTableBodyRows = () => {
    type DataKeyType = keyof T;
/*     if (error) {
      return (
        <TableRow>
          <TableCell colSpan={tableColumns.length + 1}>
            <Error />
          </TableCell>
        </TableRow>
      );
    } */
    if (dataList.length > 0 && tableColumns.length > 0) {
      return dataList.map((data: T,index:number) => {
        return(<tr
        key={`table-row ${uuidv4()+index}`}
        onClick={() => onClickRow(data)}
          className="w-full border-b  
          border-dashed py-3 text-sm last-of-type:border-none 
          [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg
           [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg  hover:bg-blue-100 hover:bg-opacity-40"
        >
            {tableColumns?.map((column: IColumn<T>) => {
              const colValueInString = String(data[column.key as DataKeyType]);
              return (
                <Fragment key={`table_crud_column_${column.key}_${uuidv4()}`}>
                   <td className="whitespace-nowrap py-3 pl-6 pr-3">

      
                    {column.render
                      ? column.render(column, data)
                      : colValueInString}
                  </td>
                </Fragment>
              );
            })}
            <Fragment>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
           {/*    add action here */}

    {/*             {actions && actions.length > 0 ? (
                  <TableActionMenu<T> data={data} actionList={actions} />
                ) : (
                  <></>
                )} */}
              </td>
            </Fragment>
          </tr>)
        
      });
    }else{
      <tr>
      <td >
        <div className="flex items-center justify-center px-4 py-10">
     table is empty
        </div>
      </td>
    </tr>
    }
    //should add component here
  }; 

  return (
   <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-white p-2 md:pt-0">
          <table className="hidden min-w-full  text-gray-900 md:table"  >
          <thead className="rounded-lg  text-right  border-b  border-dashed text-sm font-normal">
          <tr >
              {tableColumns.map((column: IColumn<T>) => (
              <th scope="col" className="px-4 py-5 font-medium sm:pl-6" key={`${uuidv4()}__header-cell}`}>
                  {column.title}
                </th>
              ))}
              {actions && actions.length > 0 ? (
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6 " key={`action__${uuidv4}`}>

                  {("action")}
                </th>
              ) : (
            <th/>
              )}
            </tr>
          </thead>
          <tbody className="bg-white">{getTableBodyRows()}</tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
