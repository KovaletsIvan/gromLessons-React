import React from "react";


const Expand = ({ isVisible, title, onClick }) => {
  const visibility = isVisible ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>
  return (

    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onClick}>
        {visibility}
      </button>
    </div>

  )
}




export default Expand