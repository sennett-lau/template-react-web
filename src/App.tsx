import React from 'react'
import './index.css'
import DesktopFrame from '@components/templates/DesktopFrame'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

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
