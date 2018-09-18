import React from "react"
import { Header, Transition, Container, Grid } from "semantic-ui-react"

class AboutUsPage extends React.Component {
	state = {}

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
								Who we are?
							</Header>
						</Transition>

						<Container
							text
							className="about-us-container first-container"
						>
							<Header as="h2">Tell about weather</Header>
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa strong. Cum sociis natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis
							</p>
							<p>
								sem. Nulla consequat massa quis enim. Donec pede
								justo, fringilla vel, aliquet nec, vulputate
								eget, arcu. In enim justo, rhoncus ut, imperdiet
								a, venenatis vitae, justo. Nullam dictum felis
								eu pede link mollis pretium. Integer tincidunt.
								Cras dapibus. Vivamus elementum semper nisi.
								Aenean vulputate eleifend tellus. Aenean leo
								ligula, porttitor eu, consequat vitae, eleifend
								ac, enim. Aliquam lorem ante, dapibus in,
								viverra quis, feugiat a, tellus. Phasellus
								viverra nulla ut metu.
							</p>
						</Container>
						<Container text className="about-us-container">
							<Header as="h2">Update forecasts every hour</Header>
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa strong. Cum sociis natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis
							</p>
						</Container>
						<Container text className="about-us-container">
							<Header as="h2">
								Info about 300k cities over the world
							</Header>
							<p>
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa strong. Cum sociis natoque
								penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Donec quam felis,
								ultricies nec, pellentesque eu, pretium quis
							</p>
						</Container>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}
export default AboutUsPage
