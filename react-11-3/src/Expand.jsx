import React from "react";


const Expand = ({ children, isVisible, title, onClick }) => {

  return (

    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          {isVisible}
        </button>
      </div>
      {children}
    </div>


  )
}




export default Expand