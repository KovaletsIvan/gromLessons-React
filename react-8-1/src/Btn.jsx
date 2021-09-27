import React from "react";

const Btn = (props) => {
  return (
    <button className="btn" onClick={props.actionAdd}>
      Click Me!
    </button>
  )
}
export default Btn