import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Transition, Header, Message } from "semantic-ui-react"

import LoginForm from "../forms/LoginForm"
import { login } from "../../actions/auth"

class LoginPage extends React.Component {
	submit = data =>
		this.props.login(data).then(() => {
			this.props.history.push("/")
		})

	render() {
		const { state } = this.props.location

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
								Login
							</Header>
						</Transition>
						{state && (
							<Message>
								<Message.Header>
									Unable to do get this page
								</Message.Header>
								<p>Log in to access it</p>
							</Message>
						)}
						<LoginForm submit={this.submit} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	location: PropTypes.shape({
		state: PropTypes.shape({})
	}).isRequired,
	login: PropTypes.func.isRequired
}

export default connect(
	null,
	{ login }
)(LoginPage)
