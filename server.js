const express = require("express")
const helmet = require("helmet")
const zoosRouter = require("./routers/zoos")

const server = express()

server.use(helmet())
server.use(express.json())

server.use(zoosRouter)

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server