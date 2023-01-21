import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Pagination({pageCount, setPage}) {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20

  if (pageCount > 500) { pageCount = 500 }
  
  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel={<FaChevronLeft />}
        renderOnZeroPageCount={null}
        containerClassName={'flex justify-center items-center gap-1 mt-6'}
        pageClassName={'flex justify-center items-center w-[28px] h-[28px] rounded-full hover:bg-[#2d3033]'}
        activeClassName={'text-green-500 text-xl'}
        previousLinkClassName={'hover:opacity-80'}
        nextLinkClassName={'hover:opacity-80'}
      />
    </>
  );

}

export default Pagination