import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.scss'
import RequestForm from './components/RequestForm/RequestForm'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

export default function App() {
  return (
    <div className="App">
      <p>Swachh client</p>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/request" element={<RequestForm />} />
        </Routes>
      </Router>
    </div>
  )
}
