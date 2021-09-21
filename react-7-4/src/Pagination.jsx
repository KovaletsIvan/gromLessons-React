import React from 'react';


const Pagination = (props) => {

  let isPrivPageAvailable = false;
  let isNextPageAvailable = true;

  return (
    <>
      <div className="pagination">
        <button className="btn">{isPrivPageAvailable ? '←' : null}</button>
        <span className="pagination__page">{props.curentPage}</span>
        <button className="btn">{isNextPageAvailable ? '→' : null}</button>
      </div>

    </>
  )

};

export default Pagination;