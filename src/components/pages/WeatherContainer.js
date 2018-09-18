import React, { Component } from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"
import { Header, Grid, Transition } from "semantic-ui-react"
import { getCity } from "../../actions/weather"

import WeatherForm from "../forms/WeatherForm"
import CitiesContainer from "./CitiesContainer"
import EmptyListCard from "../messages/EmptyListCard"

class WeatherContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			city: undefined
		}
	}

	submit = data => {
		this.setState({ loading: true, city: undefined })

		if (this.isCityInList(data)) {
			this.setState({ loading: false, city: true })
		} else {
			this.props
				.getCity(data)
				.then(() => this.setState({ loading: false }))
				.catch(err => {
					this.setState({ loading: false, city: false })
					console.log(err.response)
				})
		}
	}

	isCityInList = cityId => {
		let flag = false

		if (this.props.weatherList.length !== 0) {
			this.props.weatherList.forEach(city => {
				if (cityId === city.id) {
					flag = true
				}
			})
		}

		return flag
	}

	render() {
		const { weatherList } = this.props

		return (
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={10}>
						<Transition
							animation="scale"
							duration={1000}
							transitionOnMount
						>
							<Header
								as="h1"
								textAlign="center"
								className="weather-h1"
							>
								Weather city info
							</Header>
						</Transition>
						<WeatherForm
							submit={this.submit}
							loading={this.state.loading}
							isCityFound={this.state.city}
							minCharacters={2}
						/>

						{weatherList.length !== 0 ? (
							<CitiesContainer data={weatherList} />
						) : (
							<EmptyListCard />
						)}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		weatherList: state.weather
	}
}

WeatherContainer.propTypes = {
	getCity: PropTypes.func.isRequired,
	weatherList: PropTypes.arrayOf(
		PropTypes.shape({
			cod: PropTypes.number.isRequired
		})
	).isRequired
}

export default connect(
	mapStateToProps,
	{ getCity }
)(WeatherContainer)
