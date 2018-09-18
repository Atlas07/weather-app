import React, { Component } from "react"
import PropTypes from "prop-types"
import { Card } from "semantic-ui-react"
import { roundNumber } from "../../commonFunctions"

class ForecastDetailsContainer extends Component {
	state = {
		activeItem: 0
	}

	render() {
		const { data } = this.props

		return (
			<div>
				<div className="forecast-menu">
					{data.map(hour => (
						<div className="forecast-menu-item" key={hour.dt}>
							{hour.dt_txt.split(" ")[1]}
						</div>
					))}
				</div>
				<Card fluid>
					<Card.Content>
						<div className="p-container">
							{data.map(hour => (
								<p className="date">
									{roundNumber(hour.main.temp, 1, 0)} C
								</p>
							))}
						</div>
					</Card.Content>
				</Card>
			</div>
		)
	}
}

ForecastDetailsContainer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			dt: PropTypes.number.isRequired
		}).isRequired
	).isRequired
}

export default ForecastDetailsContainer
