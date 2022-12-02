import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.scss'
import RequestForm from './components/RequestForm/RequestForm'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Subsciptions from './pages/Subscriptions/Subscriptons'

export default function App() {
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
        </Routes>
      </Router>
    </div>
  )
}
