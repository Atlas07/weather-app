import express from "express"
import bodyParser from "body-parser"
import fs from "fs"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import login from "./routes/login"
import signup from "./routes/signup"

dotenv.config()
const app = express()
mongoose.connect(process.env.MONGODB_URL)

app.use(bodyParser.json())
app.use(cors())

app.use("/api/login", login)
app.use("/api/signup", signup)

app.post("/api/findCity", (req, res) => {
	const rgxp = new RegExp(req.body.data)
	const suitableCities = []

	const file = JSON.parse(
		fs.readFileSync(`cities/Cities${req.body.data[0]}.json`)
	)

	for (let i = 0; i < file.length; i++) {
		if (file[i].name.match(rgxp) !== null) {
			suitableCities.push(file[i])
		}
	}

	res.json(suitableCities)
})

const port = 9000

app.listen(port, () => {
	console.log(`\nRunning api on localhost:${port}\n`)
})
