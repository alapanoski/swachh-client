import { useEffect, useState } from 'react'

import { viewRequests } from '../../services/requests'

export default function CollectionHistory() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    viewRequests()
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRequests(data.requests)
        setLoading(false)
      })
  }, [])

  const handleClick = () => {
    console.log(requests)
  }

  return (
    <div className="collection-history">
      {requests.map((request) => {
        <div className="request">ffghf{request}</div>
      })}

      <button onClick={handleClick}>afdfsaf</button>
    </div>
  )
}
