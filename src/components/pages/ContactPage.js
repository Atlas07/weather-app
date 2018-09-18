import React from "react"

import { Grid, Transition, Header, Container, Icon } from "semantic-ui-react"

const ContactPage = () => (
	<Grid centered>
		<Grid.Row>
			<Grid.Column width={10}>
				<Transition animation="scale" duration={1000} transitionOnMount>
					<Header as="h1" textAlign="center" className="weather-h1">
						Contact us
					</Header>
				</Transition>

				<Container text className="about-us-container first-container">
					<Header as="h2" textAlign="center" className="header-light">
						Hi, my name is Vitalii
					</Header>
					<Header as="h2" textAlign="center" className="header-light">
						I am developer of this app
					</Header>
					<Header as="h2" textAlign="center" className="header-light">
						Feel free to contact me
					</Header>

					<a
						className="contact-link"
						href="https://github.com/Atlas07/weather-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon name="github" size="huge" link color="black" />
					</a>
				</Container>
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

export default ContactPage
