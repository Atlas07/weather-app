import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { Link } from "react-router-dom"
import { Menu } from "semantic-ui-react"

import { logout } from "../../actions/auth"

const TopNavigation = ({ auth, logout }) => (
	<Menu size="huge" stackable pointing>
		<Menu.Item as={Link} to="/">
			Weather
		</Menu.Item>
		<Menu.Item as={Link} to="/about-us">
			About us
		</Menu.Item>
		<Menu.Item as={Link} to="/contact-us">
			Contact us
		</Menu.Item>

		{auth.email ? (
			<Menu.Menu position="right">
				<Menu.Item onClick={() => logout()}>Logout</Menu.Item>
			</Menu.Menu>
		) : (
			<Menu.Menu position="right">
				<Menu.Item as={Link} to="/signup">
					Signup
				</Menu.Item>
				<Menu.Item as={Link} to="/login">
					Login
				</Menu.Item>
			</Menu.Menu>
		)}
	</Menu>
)

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

TopNavigation.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.shape({
		email: PropTypes.string
	})
}

export default connect(
	mapStateToProps,
	{ logout }
)(TopNavigation)
