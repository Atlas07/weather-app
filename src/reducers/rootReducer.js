import { combineReducers } from "redux"

import weather from "./weather"
import forecast from "./forecast"
import auth from "./auth"

export default combineReducers({
	weather,
	forecast,
	auth
})
