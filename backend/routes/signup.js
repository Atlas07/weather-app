import express from "express"
import _ from "lodash"

import User from "../models/User"

const router = express.Router()

router.post("/", (req, res) => {
	const { email, password, name } = req.body.credentials
	const user = new User({ email, name })

	user.setPassword(password)
	user.setConfirmationToken()
	user.save()
		.then(userRecord => res.json({ user: userRecord.toAuthJSON() }))
		.catch(err => {
			const errObj = {}

			_.forEach(err.errors, (val, key) => {
				errObj[key] = val.message
			})

			res.status(400).json({ errors: errObj })
		})
})

export default router
