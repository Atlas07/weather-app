import { ADD_CITY, DELETE_CITY } from "../types"

export default function cityWeather(state = [], action = {}) {
	switch (action.type) {
		case ADD_CITY:
			return [...state, action.weather]
		case DELETE_CITY:
			return state.filter(city => city.id !== action.cityId)
		default:
			return state
	}
}
