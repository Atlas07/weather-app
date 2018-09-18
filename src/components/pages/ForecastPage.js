import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Loader, Grid, Transition, Header } from "semantic-ui-react"
import { getForecast } from "../../actions/forecast"

import ForecastCard from "./ForecastCard"
import ForecastDetailsContainer from "./ForecastDetailsContainer"

class ForecastPage extends React.Component {
	state = {
		loading: true,
		checkedCard: 0,
		externalData: null
	}

	componentDidMount() {
		this.props
			.getForecast(this.props.match.params.cityId)
			.then(() => {
				this.setState({
					loading: false,
					externalData: true
				})
			})
			.catch(err => {
				// TODO create error-handling UI
				console.log(err)
				this.setState({ loading: false })
			})
	}

	cardClick = data => {
		this.setState({ checkedCard: data })
	}

	render() {
		const { loading, externalData, checkedCard } = this.state
		const { forecast } = this.props

		if (externalData === null) {
			return <Loader size="huge" active={loading} inline="centered" />
		}

		return (
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={16}>
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
								Forecast for {forecast.city.name},{" "}
								{forecast.city.country}
							</Header>
						</Transition>
					</Grid.Column>

					<Grid.Column width={12} className="first-container">
						<ForecastDetailsContainer
							data={forecast.list[checkedCard]}
						/>
					</Grid.Column>
					<Grid.Column width={12}>
						<div className="ui cards four about-us-container">
							{forecast.list.map((day, i) => (
								<ForecastCard
									index={i}
									key={JSON.stringify(day)}
									data={day}
									click={this.cardClick}
								/>
							))}
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

ForecastPage.propTypes = {
	getForecast: PropTypes.func.isRequired,
	forecast: PropTypes.shape({
		cod: PropTypes.string
	}).isRequired,
	match: PropTypes.shape({
		params: PropTypes.shape({
			cityId: PropTypes.string.isRequired
		})
	}).isRequired
}

function mapStateToProps(state) {
	return {
		forecast: state.forecast
	}
}

export default connect(
	mapStateToProps,
	{ getForecast }
)(ForecastPage)
