import { useEffect } from 'react'

import { viewRequests } from '../../services/requests'

export default function CollectionHistory() {
  useEffect(() => {
    viewRequests()
  }, [])

  return <div className="collection-history">ss</div>
}
