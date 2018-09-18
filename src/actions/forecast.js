import axios from "axios"
import { FORECAST_FETCHED } from "../types"
import { handleResponse } from "../commonFunctions"

export const cityForecastFetched = forecast => ({
	type: FORECAST_FETCHED,
	forecast
})

export const getForecast = cityId => dispatch =>
	axios
		.get(
			`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=4a1dc1642a5f78c3058f55368324970e`
		)
		.then(handleResponse)
		.then(weather => dispatch(cityForecastFetched(weather)))
