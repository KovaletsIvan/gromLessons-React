import React from "react";
import moment from "moment";

const date = (birthDate) => moment(birthDate).format("D MMM YY")

const Profile = (props) => {
  return (
    <>
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">
        Was born {date(props.userData.birthDate)} in {props.userData.birthPlace}
      </div>
    </>
  )
}

export default Profile;