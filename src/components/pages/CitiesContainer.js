import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { Card, Button, Header } from "semantic-ui-react"

import { deleteCity } from "../../actions/weather"
import { roundNumber } from "../../commonFunctions"

const CitiesContainer = ({ data, deleteCity }) => (
	<div className="ui three cards custom-cards">
		{data.map(city => (
			<Card key={city.id}>
				<Card.Content>
					<Card.Header className="card-header">
						<Header as="h3">
							{city.name}, {city.sys.country}
						</Header>
					</Card.Header>
					<Card.Meta className="card-meta">
						<Header as="h5">
							{roundNumber(city.main.temp, 1, 0)} С,{" "}
							{city.weather.description}
						</Header>
						<p className="date">Wind {city.wind.speed} m/s</p>
						<p className="date">Clouds {city.clouds.all} %</p>
						<p className="date">Humidity {city.main.humidity} %</p>
						<p className="date">
							Pressure {city.main.pressure} hpa
						</p>
						<p className="date">
							Sunrise{" "}
							{new Date(city.sys.sunrise * 1000).getHours()}:
							{new Date(city.sys.sunrise * 1000).getMinutes()}
						</p>
						<p className="date">
							Sunset {new Date(city.sys.sunset * 1000).getHours()}
							:{new Date(city.sys.sunset * 1000).getMinutes()}
						</p>
						<p className="date">
							Lon: {city.coord.lon}, Lat: {city.coord.lat}
						</p>
					</Card.Meta>
					<Card.Description />
				</Card.Content>
				<Card.Content extra>
					<Button
						className="city-btn"
						as={Link}
						to={`/forecast/id${city.id}`}
						basic
						positive
						fluid
					>
						Get forecast
					</Button>
					<Button
						basic
						negative
						fluid
						onClick={() => deleteCity(city.id)}
					>
						Delete
					</Button>
				</Card.Content>
			</Card>
		))}
	</div>
)

CitiesContainer.propTypes = {
	data: PropTypes.arrayOf().isRequired,
	deleteCity: PropTypes.func.isRequired
}

export default connect(
	null,
	{ deleteCity }
)(CitiesContainer)
