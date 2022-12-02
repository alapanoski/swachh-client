export const addRequest = async (newRequest) => {
  const { username, description } = newRequest
  console.log({ username, description })
  const res = await fetch(`${import.meta.env.VITE_API_URL}/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRequest),
  })
  console.log(res)
}
