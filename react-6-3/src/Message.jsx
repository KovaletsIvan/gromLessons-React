import React from "react";

const Message = ({ text }) => {

  return (
    <div className="page">
      {(!text) ? null : <div className="message">
        {text}
      </div>}

      <div className="actions">
        <button className="btn">
          Text 1
        </button>
        <button className="btn">
          Text 2
        </button>
        <button className="btn">
          Clear
        </button>
      </div>
    </div>
  )
}

export default Message