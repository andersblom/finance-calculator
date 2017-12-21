const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
		validate: [{ validator: value => validator.isEmail(value), msg: 'Invalid email' }]
	},
	fullName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	userLevel: {
		type: Number,
		default: 0,
	},
	JWToken: {
		type: String
	}
});

module.exports = mongoose.model('User', UserSchema);
