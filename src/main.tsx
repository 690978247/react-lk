import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.less'
import App from './App'
import './language/index'

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
