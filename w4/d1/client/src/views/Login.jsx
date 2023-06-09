import React, { useState } from 'react'
import { postData } from '../services/api'

const Login = () => {

  const [formData, setFormData] = useState({ username: "", password: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    postData('auth/login',formData).then(resp=>{
      // get data here
      // store accessToken in localstorage as localStorage.setItem("accessToken", resp.accessToken); 
    })
  };

  const updateData = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" onChange={(e) => updateData(e) }  name="username" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" onChange={(e) => updateData(e) } name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Login

