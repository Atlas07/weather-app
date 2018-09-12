import React from "react"
import { hot } from "react-hot-loader"

import "../styles/App.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>React App</h1>
				<Menu />
			</div>
		)
	}
}

export default hot(module)(App)
