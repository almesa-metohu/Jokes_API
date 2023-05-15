const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
const AllJokeRoutes = require('./routes/joke.routes')
AllJokeRoutes(app)

app.listen(8000, () => console.log("The server is listening on port 8000"))