const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users"); // replace with path to your User model

const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json())

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
// Define a route to delete a task from a specific user
app.get("/users/:username/tasks/:taskId", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send();
    }
    const task = user.tasks.id(req.params.taskId);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/users/:username/tasks/:taskId", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send();
    }
    user.tasks.pull({ _id: req.params.taskId }); // Use pull to remove the task
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a route to add a task to a specific user
app.post("/users/:username/tasks", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send();
    }
    user.tasks.push(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/users/:username/tasks/:taskId", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send();
    }
    const task = user.tasks.id(req.params.taskId);
    console.log(req.body)
    task.set(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
