const express = require('express')
const app = express();
require('dotenv').config();

const cors = require('cors')
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT;

// Load Homepage
app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello!')
})

// Accepts POST Requests using Ngrok Tunnel
app.post('/', (req, res) => {
  console.log(req.headers)
  console.log(req.method)
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})