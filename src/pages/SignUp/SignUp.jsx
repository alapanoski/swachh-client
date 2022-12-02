import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signup } from '../../services/users'

import './SignUp.scss'

export default function Register() {
  const navigate = userNavigate()
  const [user, setUser] = useState({
    username: 'default',
    firstName: 'default',
    lastName: 'default',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(user)
    navigate('/')
  }

  return (
    <form id="signup" onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="username"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  )
}
