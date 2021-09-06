import React from "react";

const age = (birthDate) =>
  new Date().getFullYear() - new Date(birthDate).getFullYear();


const Greeting = (props) => {
  return (
    <div className="greeting">
      "My name is {props.firstName} {props.lastName}. I'm {age(props.birthDate)} years old"
    </div>
  )
}

export default Greeting;