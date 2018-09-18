import React from "react"
import { Card, Icon } from "semantic-ui-react"

const EmptyListCard = () => (
	<Card centered>
		<Icon
			name="plus circle"
			size="massive"
			className="icon-plus"
			color="green"
		/>
		<Card.Content textAlign="center">
			<Card.Header>No city yet</Card.Header>
			<Card.Description>Type to add new one</Card.Description>
		</Card.Content>
	</Card>
)

export default EmptyListCard
