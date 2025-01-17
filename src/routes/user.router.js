const { getAll, create, getOne } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

carRouter.route("/:id")
	.get(getOne)

module.exports = userRouter;