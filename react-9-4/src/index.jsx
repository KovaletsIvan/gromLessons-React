import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import './index.scss';


const rootElement = document.querySelector('#root');


const users = [
  { name: 'Tom', age: 19, id: 0 },
  { name: 'Bob', age: 17, id: 1 },
  { name: 'John', age: 21, id: 2 },
  { name: 'Sem', age: 14, id: 3 },
  { name: 'Anna', age: 15, id: 4 }
]

ReactDOM.render(<UsersList users={users} />, rootElement)