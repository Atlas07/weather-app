import { FORECAST_FETCHED } from "../types"

const combineDateForecast = dateList => {
	let flag = true
	const result = []

	// refractor code here
	// make separate func ?
	dateList.map(item => {
		const temp = item.dt_txt.split("")

		temp.length -= 3
		item.dt_txt = temp.join("")

		return item
	})

	dateList.forEach(item => {
		if (flag) {
			result.push([item])
			flag = false
			return true
		}

		const previousDateArr = result[result.length - 1]

		const prevDate = previousDateArr[0].dt_txt.split(" ")[0]
		const itemDate = item.dt_txt.split(" ")[0]

		if (prevDate === itemDate) {
			previousDateArr.push(item)
		} else {
			result.push([item])
		}
	})

	return result
}

export default function forecast(state = {}, action = {}) {
	switch (action.type) {
		case FORECAST_FETCHED:
			action.forecast.list = combineDateForecast(action.forecast.list)
			return action.forecast
		default:
			return state
	}
}
