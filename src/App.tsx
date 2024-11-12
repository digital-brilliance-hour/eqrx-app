import React from 'react'
import AllRoutes from './routes/Routes'
import { configureFakeBackend } from './helpers'

// styles
import 'gridjs/dist/theme/mermaid.min.css'
import './index.scss'

// configure fake backend
configureFakeBackend()

const App = () => {
	return (
		<React.Fragment>
			<AllRoutes />
		</React.Fragment>
	)
}

export default App
