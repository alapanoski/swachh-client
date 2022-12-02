export const addRequest = async (request) => {
  const { username, typeofwaste } = request
  let newRequest = {
    username: request.username,
    typeofwaste: {
      ewaste: false,
      plastic: false,
      foodwaste: false,
      other: false,
    },
  }
  console.log(request)
  switch (typeofwaste) {
    case 'ewaste':
      newRequest.typeofwaste.ewaste = true
      break
    case 'plastic':
      newRequest.typeofwaste.plastic = true
      break
    case 'foodwaste':
      newRequest.typeofwaste.foodwaste = true
      break
    case 'other':
      newRequest.typeofwaste.other = true
      break
  }
  console.log(newRequest)
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/request/newrequest`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    }
  )
  console.log(res)
}

export const viewRequests = async (username) => {
  return fetch(`${import.meta.env.VITE_API_URL}/request/viewallRequests`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({ username: localStorage.getItem('username') }),
  })
}
