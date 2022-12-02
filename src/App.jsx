import './App.scss'
import RequestForm from './components/RequestForm/RequestForm'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export default function App() {
  return (
    <div className="App">
      <p>Swachh client</p>
      <Home />
      <Login />
      <Register />
      <RequestForm />
    </div>
  )
}
