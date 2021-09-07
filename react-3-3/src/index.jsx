import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Comment from "./Comment"


const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
}

const authorInfo = {
  text: "Good job!",
  date: new Date('1986-02-06')
}

ReactDOM.render(<Comment
  user={userInfo}
  author={authorInfo}
/>, rootElement)