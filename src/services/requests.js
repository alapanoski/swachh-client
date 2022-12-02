export const addRequest = async (newRequest) => {
  const { username, typeOfWaste } = newRequest
  switch (typeOfWaste) {
    case 'ewaste':
      newRequest.typeofwaste.ewaste = true
      break
    case 'paper':
      newRequest.typeofwaste.paper = true
      break
    case 'foodwaste':
      newRequest.typeofwaste.foodwaste = true
      break
    case 'other':
      newRequest.typeofwaste.other = true
      break
  }
  console.log({ newRequest })
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/request/newrequest`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRequest),
    }
  )
  console.log(res)
}
