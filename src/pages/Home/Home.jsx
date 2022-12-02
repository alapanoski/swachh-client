import { useNavigate } from 'react-router-dom'

import schedule from './../../assets/schedule.svg'
import complaint from '../../assets/complaint.svg'
import sell from '../../assets/sell.svg'
import history from '../../assets/history.svg'
import services from '../../assets/services.svg'
import support from '../../assets/support.svg'

import './Home.scss'

export default function Home() {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/request')
  }

  const navigateToHistory = (e) => {
    e.preventDefault()
    navigate('/history/collection')
  }

  return (
    <div className="Home">
      <div className="home-functions">
        <div className="function">
          <img src={schedule} alt="" />
          <p>Schedule</p>
        </div>
        <div className="function">
          <img src={complaint} alt="" />
          <p>Complaint</p>
        </div>{' '}
        <div className="function">
          <img src={sell} alt="" />
          <p>Sell</p>
        </div>{' '}
        <div className="function" onClick={navigateToHistory}>
          <img src={history} alt="" />
          <p>History</p>
        </div>{' '}
        <div className="function">
          <img src={services} alt="" />
          <p>Services</p>
        </div>{' '}
        <div className="function">
          <img src={support} alt="" />
          <p>Support</p>
        </div>
      </div>
      <button onClick={handleClick} className="new-request-button btn btn-primary">New request</button>
    </div>
  )
}
