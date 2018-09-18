import React from "react"
import PropTypes from "prop-types"

import { Card, Image } from "semantic-ui-react"

class ForecastCard extends React.Component {
	state = {}

	onClick = () => {
		this.props.click(this.props.index)
	}

	getDayName = dateStr => {
		const d = new Date(dateStr)

		return d.toString().split(" ")[0]
	}

	getDate = d => {
		const date = d.split(" ")[0]
		const components = date.split("-").reverse()

		return `${components[0]}/${components[1]}/${components[2]}`
	}

	roundNumber = (num, precision, system) => {
		if (system === 0) {
			num -= 273
		} else {
			num = 1.8 * (num - 273) + 32
		}

		return num.toFixed(precision)
	}

	render() {
		const { data } = this.props
		return (
			<Card onClick={this.onClick}>
				<Card.Header textAlign="center">
					{this.getDayName(data[0].dt_txt)}
				</Card.Header>
				<Card.Meta textAlign="center">
					{this.getDate(data[0].dt_txt)}
				</Card.Meta>
				<Card.Content textAlign="center">
					<Image
						src={`https://openweathermap.org/img/w/${
							data[0].weather[0].icon
						}.png`}
					/>
				</Card.Content>
				<Card.Description
					textAlign="center"
					className="temp-forecast-description"
				>
					{this.roundNumber(data[0].main.temp, 1, 0)}C
				</Card.Description>
				<Card.Content extra textAlign="center">
					{data[0].weather[0].description}
				</Card.Content>
			</Card>
		)
	}
}

ForecastCard.propTypes = {
	click: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			dt_txt: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

export default ForecastCard
