const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users"); // replace with path to your User model

const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());


// Connect to MongoDB
mongoose
  .connect(
    "mongodb://ikh1324657980:132qewadszcx@ac-rn9zuhq-shard-00-00.7sh9oto.mongodb.net:27017,ac-rn9zuhq-shard-00-01.7sh9oto.mongodb.net:27017,ac-rn9zuhq-shard-00-02.7sh9oto.mongodb.net:27017/?ssl=true&replicaSet=atlas-df5h6i-shard-0&authSource=admin&retryWrites=true&w=majority&appName=SWE"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Define a route to get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a route to get a specific user by username
app.get("/users/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
