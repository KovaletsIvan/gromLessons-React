import React from "react";
import UserForm from './UserForm'

const Profile = (props) => {
  return (
    <div className="column">
    <UserForm user={props.userName} onChange={props.onChange} />
    </div>
  )
}
export default Profile