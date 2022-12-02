import { useState } from 'react'

import './RequestForm.scss'

import { addRequest } from '../../services/requests'

export default function RequestForm() {
  const [newRequest, setNewRequest] = useState({
    username: 'default',
    typeofwaste: '',
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
    <div className="new-request">
      <div className="new-request-instructions">
        <ul>
          <li>Do not put harmful wastes and contaminants.</li>
          <li>All the different kinds of waste must be packed separately.</li>
          <li>Food waste must be disposed in the waste bucket provided.</li>
          <li>
            Do not put sanitary pads and diapers along with plastic waste.{' '}
          </li>
          <li>
            Items made of glass or other fragile items will not be collected.
          </li>
          <li>
            items such as plastic and papers can be sold by weight separately
          </li>
          here.
        </ul>
      </div>
      <p className='text-white'>Select the type of waste</p>
      <form onSubmit={handleSubmit} className='new-request-form'>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Waste Type:
          <select name="typeofwaste" onChange={handleChange}>
            <option value="ewaste">e-waste</option>
            <option value="plastic">Plastic</option>
            <option selected value="foodwaste">
              Food Waste
            </option>
            <option value="other">Other</option>
          </select>
        </label>
        <input type="submit" value="Request" className='btn btn-primary' />
      </form>
    </div>
  )
}
