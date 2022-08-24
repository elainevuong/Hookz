require('dotenv').config();
const express = require('express')
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");
const PORT = process.env.PORT;

const app = express();
app.use(express.json())

// Connect to Mongo DB
mongoose.connect(process.env.DB)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Load Homepage
app.get('/', (req, res) => {
  res.send('Hello!')
})

// Takes the Express Router into Use as Middleware
app.use("/api", apiRoutes);

// Default Error Handling - logs the error
app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})