import React from 'react';

const Login = (onLogin) => {
  return (
    <button className="btn login" onClick={onLogin.onClick}>Login</button>
  )
}


export default Login;
