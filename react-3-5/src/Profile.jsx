import React from "react";
import moment from "moment";
import "./index.scss"

const date = (birthDate) => moment(birthDate).format("D MMM YY")

const Profile = (props) => {
  return (
    <>
      <p className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </p>
      <p className="profile__birth">
        Was born {date(props.userData.birthDate)} in {props.userData.birthPlace}
      </p>
    </>
  )
}

export default Profile;