const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/ping/',(req,res) => {
  req.rawHeaders
  res.writeHead(200,'OK')
  res.end('Ping - Pong')
})

app.listen(PORT,'0.0.0.0' , () => {
})




