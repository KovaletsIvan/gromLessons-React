import React from 'react';


const Pagination = (props) => {

  let isPrivPageAvailable = false;
  let isNextPageAvailable = true;

  return (
    <>
      <div className="pagination">
        <button className="btn" onClick={props.goPrev}>{isPrivPageAvailable ? '←' : null}</button>
        <span className="pagination__page" onClick={props.goNext}>{props.curentPage}</span>
        <button className="btn">{isNextPageAvailable ? '→' : null}</button>
      </div>

    </>
  )

};

export default Pagination;