import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './../node_modules/bootstrap/scss/bootstrap.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
