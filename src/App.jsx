import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.scss'
import RequestForm from './components/RequestForm/RequestForm'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Subsciptions from './pages/Subscriptions/Subscriptons'
import CollectionHistory from './pages/CollectionHistory/CollectionHistory'
import CollectorLogin from './pages/CollectorLogin/CollectorLogin'

import { useEffect, useState } from 'react'

export default function App() {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem('auth') === true
  )

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/subscriptions" element={<Subsciptions />} />
          <Route path="/history" element={<CollectionHistory />} />
          <Route path="/collector/login" element={<CollectorLogin />} />
        </Routes>
      </Router>
    </div>
  )
}
