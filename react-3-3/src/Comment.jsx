import React from "react";
import moment from 'moment';
import UserInfo from './UserInfo'
import "./comment.scss";



const formatDate = (date) => moment(date).format("DD MMM YYYY");

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.user} />
      <div className="comment__outhor" >{props.user.author}</div>
      <div className="comment__text" >{props.user.text}</div>
      <div className="comment__date" >{formatDate(props.user.date)}</div>
    </div>
  );
}

export default Comment;
