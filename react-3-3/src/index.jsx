import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Comment from "./Comment"


const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://cdn.icon-icons.com/icons2/2406/PNG/512/github_git_icon_145985.png'
}
const author = {

};


ReactDOM.render(<Comment
  user={userInfo}
  author = {author}
  text='Goog job!'
  date= {new Date()}

/>, rootElement)