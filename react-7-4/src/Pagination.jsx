import React from 'react';


const Pagination = (props) => {

  const amountPages = Math.ceil(props.totalItems / props.itemsPerPage)
  let isPrivPageAvailable = props.currentPage - 1 > 0 ? true : false;
  let isNextPageAvailable = (amountPages - props.currentPage) > 0 ? true : false;


  return (

    <div className="pagination">
      <button className="btn" onClick={props.goPrev}
        disabled={!isPrivPageAvailable}>
        {isPrivPageAvailable ? '←' : null}
      </button>

      <span className="pagination__page" >{props.currentPage}</span>

      <button className="btn" onClick={props.goNext}
        disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>

  )

};

export default Pagination;