export const handleResponse = res => {
	if (res.ok || res.status === 200) {
		return res.data
	}

	const error = new Error(res.textStatus)
	error.response = res
	throw error
}

export const roundNumber = (num, precision, system) => {
	if (system === 0) {
		num -= 273
	} else {
		num = 1.8 * (num - 273) + 32
	}

	return num.toFixed(precision)
}
