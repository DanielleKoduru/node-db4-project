const express = require("express")
const helmet = require("helmet")
const recipesRouter = require("./routers/router")

const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api', recipesRouter)

server.get('/', (req, res) => {
	res.status(200).json({api: "Hello World!"});
  });
  
server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server