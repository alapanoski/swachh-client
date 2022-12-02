export const login = async (user) => {
  const { username, password } = user
  console.log({ username, password })
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  if (res.status == 200) {
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('auth', true)
    console.log(window.localStorage.getItem('auth'))
  } else {
    console.log('not ok')
    window.localStorage.setItem('auth', false)
  }
  console.log(res)
}

export const signup = async (user) => {
  const { username, firstName, lastName, password } = user
  console.log({ username, firstName, lastName, password })
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  console.log(res)
  if (res.status == 200) {
    window.localStorage.setItem('username', username)
    window.localStorage.setItem('auth', true)
    console.log(window.localStorage.getItem('auth'))
  } else {
    console.log('not ok')
    window.localStorage.setItem('auth', false)
  }
  console.log(res)
}
