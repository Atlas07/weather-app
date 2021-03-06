import React from "react"
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import decode from "jwt-decode"

import { BrowserRouter, Route } from "react-router-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers/rootReducer"

import { loadState, saveState } from "./localStorage"
import { userLoggedIn } from "./actions/auth"

import App from "./components/App"

const persistedState = loadState("weather")
const store = createStore(
	rootReducer,
	persistedState,
	composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
	saveState({ weather: store.getState().weather }, "weather")
})

const jwtWeather = loadState("weatherJWT")

if (jwtWeather) {
	const payload = decode(jwtWeather)
	const user = {
		token: jwtWeather,
		email: payload.email
	}

	// setAuthorizationHeader(localStorage.bookwormJWT)
	store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
)
