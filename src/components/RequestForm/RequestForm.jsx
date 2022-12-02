import { useState } from 'react'

import { addRequest } from '../../services/requests'

export default function RequestForm() {
  const [newRequest, setNewRequest] = useState({
    username: 'default',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRequest((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addRequest(newRequest)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Request Description:
        <input type="text" name="description" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
