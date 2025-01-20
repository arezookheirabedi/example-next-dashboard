
'use client';
import React from 'react';
import paginate from './paginate';

interface IProps {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  maxPages: number;
  setPage: (page: number) => void;
}

const PaginationScope: React.FC<IProps> = props => {
  const {
    totalItems: totalitems,
    currentPage: currentpage,
    pageSize: pagesize,
    maxPages: maxpages,
    setPage,
  } = props;

  
  const {
    totalItems,
    currentPage,
    pages,
  } = paginate(totalitems, currentpage, pagesize, maxpages);
  return (
    <div className="inline-flex">
    <button
    disabled={currentpage ===  Math.ceil(totalitems / pagesize)}
      className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 ml-2 md:ml-4" 
      onClick={() => setPage(currentpage + 1)} 
    >
      <img 
        src={currentpage === Math.ceil(totalitems / pagesize) ? "/icons/Next-disable.svg" : "/icons/Next.svg"}
        width={24}
        height={24}
        alt="next icon for pagination"
      />
    </button>
    <div className="flex -space-x-px flex-row-reverse">
      {pages.map((key: number) => (
        <button 
          key={key}
          className={`flex h-10 w-10 items-center justify-center text-sm rounded-md z-10 ${
            key === currentpage ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
          onClick={() => setPage(key)}
        >
          {key}
        </button>
      ))}
    </div>
      <button 
        disabled={currentpage === 1} 
      onClick={() =>setPage(currentpage - 1)} 
      className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 ml-2 md:ml-4" 
      >
        <img 
          src={currentpage === 1 ? "/icons/Back-disable.svg" : "/icons/Back.svg"}
          width={24}
          height={24}
          alt="back icon for pagination"
        />
      </button>
    </div> 
 



  );
};

export default PaginationScope;
