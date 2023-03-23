import DesktopFrame from '@components/templates/DesktopFrame'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import './index.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <DesktopFrame>
            <Routes />
          </DesktopFrame>
        </Router>
      </div>
    </Provider>
  )
}

export default App
