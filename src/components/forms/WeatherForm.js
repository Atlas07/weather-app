import React, { Component } from "react"
import PropTypes from "prop-types"
import { Form, Dropdown } from "semantic-ui-react"

import PositiveCityMessage from "../messages/PositiveCityMessage"
import NegativeCityMessage from "../messages/NegativeCityMessage"

class WeatherForm extends Component {
	state = {
		city: "",
		query: "",
		options: [],
		loading: false,
		errors: {}
	}

	onChange = (e, data) => {
		clearTimeout(this.timer)
		this.setState({ city: data.value })
		this.props.submit(data.value)
	}

	onSearchChange = (e, data) => {
		clearTimeout(this.timer)
		this.setState({ query: data.searchQuery })
		this.timer = setTimeout(this.onFindCity, 800)
	}

	onFindCity = () => {
		clearTimeout(this.timer)
		this.setState({ loading: true })

		const { query } = this.state
		const options = []

		if (query.length < 2) {
			return
		}

		fetch("http://localhost:9000/api/findCity", {
			method: "post",
			mode: "cors",
			body: JSON.stringify({ data: query }),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then(res => res.json())
			.then(list => {
				list.forEach(city => {
					options.push({
						key: city.id,
						value: city.id,
						text: `${city.name}, ${city.country}`
					})
				})
				this.setState({ loading: false, options })
			})
			.catch(err => {
				console.log(err)
				this.setState({ loading: false })
			})
	}

	render() {
		const { isCityFound, loading } = this.props

		return (
			<Form loading={loading}>
				<Dropdown
					className="weather-form"
					wrapSelection
					search
					fluid
					selection
					placeholder="Type your place here"
					options={this.state.options}
					value={this.state.query}
					loading={this.state.loading}
					onSearchChange={this.onSearchChange}
					onChange={this.onChange}
				/>

				{isCityFound === false && <NegativeCityMessage />}
				{isCityFound === true && <PositiveCityMessage />}
			</Form>
		)
	}
}

WeatherForm.propTypes = {
	submit: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	isCityFound: PropTypes.bool
}

export default WeatherForm
