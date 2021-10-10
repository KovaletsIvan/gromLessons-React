import React from "react";

const UserForm = (props) => {

  return (

    <form className="user-form">
      <input type="text"
        name="firstName"
        className="user-form__input"
        value={props.firsName}
        onChange={props.onChange}
      />
      <input type="text"
        name="lastName"
        className="user-form__input"
        value={props.lastName}
        onChange={props.onChange}
      />
    </form>

  )


}
export default UserForm