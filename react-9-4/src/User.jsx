import React from "react";

const User = (props) => {
  return (
    <ul className="users">
      <li className="user">
        <span className="user__name">{props.name}</span>
        <span className="user__age">{props.age}</span>
      </li>
    </ul>
  )
}

export default User