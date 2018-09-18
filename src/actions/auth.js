import axios from "axios"
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types"
import setAuthorizationHeader from "../utils/setAuthorizationHeader"
import { handleResponse } from "../commonFunctions"

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
		.then(res => res.json())
		.then(user => console.log(user))

export const login = credentials => dispatch =>
	axios
		.post("http://localhost:9000/api/login", { credentials })
		.then(handleResponse)
		.then(res => {
			localStorage.weatherJWT = res.user.token
			setAuthorizationHeader(res.user.token)
			dispatch(userLoggedIn(res.user))
		})

export const logout = () => dispatch => {
	localStorage.removeItem("weatherJWT")
	setAuthorizationHeader()
	dispatch(userLoggedOut())
}
