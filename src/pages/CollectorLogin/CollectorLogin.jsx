import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../services/users'

export default function CollectorLogin() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
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
    login(user)

    navigate('/collector')
  }

  return (
    <form id="login" onSubmit={handleSubmit}>
      <h1>Collector Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
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
      <p>
        New here? <a href="/signup">Sign Up</a>
      </p>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  )
}
