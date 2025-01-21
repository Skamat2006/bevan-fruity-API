const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res) => {
    res.send({"name": "Sonal"})
})

app.get("/chicken", (req, res) => {
    res.send("Hello, Chicken!")
})

app.get("/chicken/:name", (req,res) => {

    // res.send(req.params) // returns an object with name key and value of whats passed in the endpoint
 
    const chickenName = req.params.name // send just the name thats passed in the endpoint
    res.send(chickenName)
})

app.get("/chicken/1?apiKey", (req,res) => {
    const chickenName = req.params// send just the name thats passed in the endpoint
    res.send(req.query)
})

app.get("/no-content", (req,res) => {
    res.send(req.sendStatus(204))
})

app.get("/forbidden", (req,res) => {
    res.send(req.sendstatus(403))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})