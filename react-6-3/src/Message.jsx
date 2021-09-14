import React from "react";

const Message = ({ text }) => {

  return (
    <>
      {(!text) ? null : <div className="message">
        {text}
      </div>}
    </>

  )
}

export default Message