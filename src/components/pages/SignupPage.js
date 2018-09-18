import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, Transition, Header } from "semantic-ui-react"

import { signup } from "../../actions/auth"
import SignupForm from "../forms/SignupForm"

class SignupPage extends React.Component {
	submit = data =>
		this.props.signup(data).then(() => this.props.history.push("/"))

	render() {
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
								Sign up
							</Header>
						</Transition>

						<SignupForm submit={this.submit} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

SignupPage.propTypes = {
	signup: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
}

export default connect(
	null,
	{ signup }
)(SignupPage)
