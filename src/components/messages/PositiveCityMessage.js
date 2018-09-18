import React from "react"
import { Message } from "semantic-ui-react"

const PositiveCityMessage = () => (
	<Message positive>
		<Message.Header>Notification</Message.Header>
		<p>It seems that have already added that city. Check your list again</p>
	</Message>
)

export default PositiveCityMessage
