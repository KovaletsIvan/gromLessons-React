import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');


const users = [
  {
    id: "id-0",
    name: 'Tom',
    age:17,
  },
  {
    id: "id-1",
    name: 'Bob',
    age: 19,
  },
  {
    id: "id-2",
    name: 'Sem',
    age: 25,
  },
  {
    id: "id-3",
    name: 'John',
    age: 21,
  },
];


ReactDOM.render(<UsersList users={users} />, rootElement)