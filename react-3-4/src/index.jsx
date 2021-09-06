import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Griting from "./Greeting";

const rootElement = document.querySelector('#root');



ReactDOM.render(<Griting
  firstName="John"
  lastName="Doe"
  birthDate={'1986-01-06'}
/>, rootElement)