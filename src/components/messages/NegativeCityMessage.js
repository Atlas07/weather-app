import React from "react"
import { Message } from "semantic-ui-react"

const NegativeCityMessage = () => (
	<Message negative>
		<Message.Header>Notification</Message.Header>
		<p>It seems that your typed wrong city. Check it and try again</p>
	</Message>
)

export default NegativeCityMessage
