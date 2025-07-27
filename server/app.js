// Import required modules
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config"); // Load environment variables

// Enable CORS for all routes
app.use(cors()); // Allow all origins
app.options("*", cors()); // Handle preflight requests for all routes

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
//Routes
const categoryRoutes =require('./routes/categories')

app.use('/api/category', categoryRoutes);


//database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Datbase Connection is ready...");
    //server
    app.listen(process.env.PORT, () => {
      console.log(`server is running http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
