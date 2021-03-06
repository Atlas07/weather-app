import axios from "axios"
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types"
import { handleResponse } from "../commonFunctions"
import { saveState as saveToLC } from "../localStorage"

export const userLoggedIn = user => ({
	type: USER_LOGGED_IN,
	user
})

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
})

export const signup = credentials => dispatch =>
	axios
		.post("http://localhost:9000/api/signup", { credentials })
		.then(handleResponse)
		.then(res => {
			saveToLC(res.user.token, "weatherJWT")
			dispatch(userLoggedIn(res.user))
		})

export const login = credentials => dispatch =>
	axios
		.post("http://localhost:9000/api/login", { credentials })
		.then(handleResponse)
		.then(res => {
			saveToLC(res.user.token, "weatherJWT")
			dispatch(userLoggedIn(res.user))
		})

export const logout = () => dispatch => {
	localStorage.removeItem("weatherJWT")
	dispatch(userLoggedOut())
}
