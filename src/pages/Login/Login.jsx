import { useState } from 'react'

import { login } from '../../services/users'

export default function Login() {
  const [user, setUser] = useState({
    username: 'default',
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
