import React from "react";


const Logout = (onLogot) => {
    return (
      <button className="btn logout" onClick={onLogot.onClick}>Logout</button>
    )
}


export default Logout;