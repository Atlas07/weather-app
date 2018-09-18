import React, { Component } from "react"
import PropTypes from "prop-types"
import { Form, Button, Message } from "semantic-ui-react"
import isEmail from "validator/lib/isEmail"
import InlineError from "../messages/InlineError"

class SignupForm extends Component {
	state = {
		data: {},
		loading: false,
		errors: {}
	}

	onChange = e => {
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value }
		})
	}

	onSubmit = () => {
		const errors = this.validate(this.state.data)
		this.setState({ errors })

		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true })
			this.props.submit(this.state.data).catch(err => {
				this.setState({
					errors: err.response.data.errors,
					loading: false
				})
			})
		}
	}

	validate = data => {
		const errors = {}

		if (!data.name) {
			errors.name = "Can't be blank"
		}
		if (!isEmail(data.email)) {
			errors.email = "Invalid email"
		}
		if (!data.password) {
			errors.password = "Can't be blank"
		}

		return errors
	}

	render() {
		const { data, errors, loading } = this.state
		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{errors.global && (
					<Message negative>
						<Message.Header>Something whent wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)}
				<Form.Field error={!!errors.name}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="John"
						value={data.name}
						onChange={this.onChange}
					/>
					{errors.name && <InlineError text={errors.name} />}
				</Form.Field>
				<Form.Field error={!!errors.email}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="example@gmail.com"
						value={data.email}
						onChange={this.onChange}
					/>
					{errors.email && <InlineError text={errors.email} />}
				</Form.Field>
				<Form.Field error={!!errors.password}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Make it secure"
						value={data.password}
						onChange={this.onChange}
					/>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>
				<Button primary>Sign up</Button>
			</Form>
		)
	}
}

SignupForm.propTypes = {
	submit: PropTypes.func.isRequired
}

export default SignupForm
