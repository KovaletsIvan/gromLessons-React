import React, { useState, useEffect } from "react";

const User = ({ match }) => {
  const [userData, setUserData] = useState(null)
  // const { userId } = match

  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        }
        throw new Error('ERROR')
      })
      .then(userData => {
        setUserData(userData)
      })
  })
  if (!userData) {
    return null
  }
  const { name, avatar_url, location } = userData
  
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  )
}

export default User