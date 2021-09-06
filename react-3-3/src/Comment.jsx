import React from "react";
import moment from 'moment';
import UserInfo from './UserInfo'
import "./comment.scss";



const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.user} />
      <div className="comment__author" author = {props.user.author} >{props.author}</div>
      <div className="comment__text" text={props.user.text}>{props.text}</div>
      <div className="comment__date" data={formatDate(props.user.date)}>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
