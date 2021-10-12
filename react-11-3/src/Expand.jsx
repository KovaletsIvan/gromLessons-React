import React from "react";

const Expand = ({ children, title }) => {

  return (


    <div className="expand__header">
      <span className="expand__title">{title}</span>
      {children}
    </div>


  )
}



export default Expand