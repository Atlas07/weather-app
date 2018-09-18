import React from "react"
import PropTypes from "prop-types"
import { hot } from "react-hot-loader"
import { Route } from "react-router-dom"

import "../styles/App.css"

import UserRoute from "./routes/UserRoute"

import TopNavigation from "./navigation/TopNavigation"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ForecastPage from "./pages/ForecastPage"
import LoginPage from "./pages/LoginPage"
import ContactPage from "./pages/ContactPage"

const App = ({ location }) => (
	<div className="ui-container">
		<TopNavigation />
		<Route location={location} path="/" exact component={HomePage} />
		<Route
			location={location}
			path="/about-us"
			exact
			component={AboutUsPage}
		/>
		<UserRoute
			location={location}
			path="/forecast/id:cityId"
			exact
			component={ForecastPage}
		/>
		<Route location={location} path="/login" exact component={LoginPage} />
		<Route
			location={location}
			path="/contact-us"
			exact
			component={ContactPage}
		/>
	</div>
)

App.propTypes = {
	location: PropTypes.shape({
		href: PropTypes.string
	}).isRequired
}

export default hot(module)(App)
