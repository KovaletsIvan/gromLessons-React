import React from "react";
import moment from "moment";
import "./index.scss"

const date = (birthDate) => moment(birthDate).format("D MMM YY")

const Profile = (props) => {
  return (
    <>
      <span className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </span>
      <span className="profile__birth">
        Was born {date(props.userData.birthDate)} in {props.userData.birthPlace}
      </span>
    </>
  )
}

export default Profile;