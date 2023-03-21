import DesktopFrame from '@components/templates/DesktopFrame'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import './index.css'
import Routes from './routes'

function App() {
  return (
    <div>
      <Router>
        <DesktopFrame>
          <Routes />
        </DesktopFrame>
      </Router>
    </div>
  )
}

export default App
