import React from "react";
import ReactPaginate from 'react-paginate';

const PaginationBtns = ({ info,pagenumber, setPageNumber }) => {
  return(
  <>
  <ReactPaginate 
   pageCount={info?.pages}
   forcePage={pagenumber === 1 ? 0 : pagenumber - 1 }
   className="pagination d-flex justify-content-center gap-3 my-5"
   nextLabel="Next"
   previousLabe="prev"
   previousLinkClassName="btn btn-primary"
   nextLinkClassName="btn btn-primary"
   pageClassName="page-item"
   activeClassName="active"
   pageLinkClassName="page-link"
   onPageChange={(data)=>setPageNumber(data.selected +  1)}

  />
  </> 
  )
}

 

export default PaginationBtns;
