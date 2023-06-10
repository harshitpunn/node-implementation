import React, { useState } from 'react'

const Login = () => {

  const [formData, setFormData] = useState({ username: "", password: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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

