const express = require('express')
const app = express()


// Middleware
app.use(express.json())

const fruitsRouter = require("./routes/fruits")

app.get('/', (req, res) => {
  res.send('Hello Fruity')
})

app.use("/fruits", fruitsRouter)

// app.get("/fruits", index)

// app.get("/fruits/:name", show)

module.exports = app