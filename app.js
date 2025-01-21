const express = require('express')
const cors = require("cors")
const app = express()

const logger = require("./logger")

// Middleware
app.use(cors())
app.use(express.json())
app.use(logger)

const fruitsRouter = require("./routes/fruits")

app.get('/', (req, res) => {
  res.send('Hello Fruity')
})

app.use("/fruits", fruitsRouter)

// app.get("/fruits", index)

// app.get("/fruits/:name", show)

module.exports = app