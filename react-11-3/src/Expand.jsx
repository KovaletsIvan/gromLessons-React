import React from "react";


const Expand = ({ children, isVisible, title, onClick }) => {
  const visibility = isVisible ?
    <i className="fas fa-chevron-up"></i>
    : <i className="fas fa-chevron-down"></i>

  const content = isVisible ?
    <div className="expand__content">
      {children}
    </div> :
    null
  return (


    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          {visibility}
        </button>
      </div>
      {content}
    </div>


  )
}




export default Expand