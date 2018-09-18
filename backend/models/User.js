import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import uniqueVaidator from "mongoose-unique-validator"

const schema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		lowercase: true,
		index: true,
		unique: true
	},
	passwordHash: {
		type: String,
		required: true
	},
	confirmationToken: { type: String, default: "" }
})

schema.methods.setPassword = function setPassword(pass) {
	this.passwordHash = bcrypt.hashSync(pass, 10)
}

schema.methods.isValidPassword = function isValidPassword(pass) {
	return bcrypt.compareSync(pass, this.passwordHash)
}

schema.methods.setConfirmationToken = function setConfirmationToken() {
	this.confirmationToken = this.generateJWT()
}

schema.methods.generateJWT = function generateJWT() {
	return jwt.sign(
		{
			email: this.email
		},
		process.env.JWT_SECRET
	)
}

schema.methods.toAuthJSON = function toAuthJSON() {
	return {
		email: this.email,
		token: this.generateJWT()
	}
}

schema.plugin(uniqueVaidator, { message: "This email already taken" })

export default mongoose.model("User", schema)
