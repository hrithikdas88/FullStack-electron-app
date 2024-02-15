import React from 'react'

const Login = ({ ipcHandle,ipcHandle1 }) => {
  return (
    <div>
      <h1>Login</h1>
      <p onClick={() => ipcHandle1()}>dssdsdsd</p>
      <button onClick={() => ipcHandle()}>Login</button>
    </div>
  )
}

export default Login
