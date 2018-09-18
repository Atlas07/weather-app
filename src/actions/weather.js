import axios from "axios"
import { ADD_CITY, DELETE_CITY } from "../types"
import { handleResponse } from "../commonFunctions"

export const cityWeatherFetched = weather => ({
	type: ADD_CITY,
	weather
})

export const deleteCity = cityId => ({
	type: DELETE_CITY,
	cityId
})

export const getCity = cityId => dispatch =>
	axios
		.get(
			`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=4a1dc1642a5f78c3058f55368324970e`
		)
		.then(handleResponse)
		.then(weather => dispatch(cityWeatherFetched(weather)))
