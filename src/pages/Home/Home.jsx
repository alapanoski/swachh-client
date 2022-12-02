import { useNavigate } from 'react-router-dom'

import './Home.scss'

export default function Home() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/request')
  }
  return (
    <div className="Home">
      <p>Swachh Home</p>
      <p>Used 3 out of 4 collections for the month</p>
      <button onClick={handleClick}>New request</button>
    </div>
  )
}
