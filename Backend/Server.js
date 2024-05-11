const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users"); // replace with path to your User model

const cors = require("cors");
const nodemailer=require("nodemailer");
const bcrypt = require('bcrypt');
const saltRounds = 10; // Define the number of salt rounds


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
// GET route for checking if a user exists
app.get('/users/check/:email', async (req, res) => {
  try {
    // Check if user with the same email already exists
    const user = await User.findOne({ email: req.params.email });
    console.log(req.params.email)

    if (user) {
      console.log(user)

      return res.status(200).send(user);
    } else {
      return res.send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Replace the plain text password with the hashed password
    req.body.password = hashedPassword;

    const user = new User(req.body); // Create a new user
    await user.save(); // Save the user to the database
    console.log("User: "+user)
    res.status(201).send(user); // Send the saved user back
  } catch (error) {
    res.status(400).send(error); // Send back any errors
  }
});


// POST route for sending verification email
app.post('/sendVerificationEmail', async (req, res) => {
  try {
    // Create a Nodemailer transporter
    var transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secureConnection: false,
      port: 587,
      auth: {
        user: "taskDoneProject@outlook.com",
        pass: "taskDoneSWE"
      },
      tls: {
        ciphers:'SSLv3'
      }
    });
    

    // Send the email
    await transporter.sendMail({
      from: 'taskDoneProject@outlook.com', // sender address
      to: req.body.email, // list of receivers
      subject: "Email Verification", // Subject line
      text: `Your verification code is ${req.body.code}`, // plain text body
    });
    console.log("Here?")

    res.status(200).send('Verification email sent');
  } catch (error) {
    console.error(error);
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
app.post('/login', async (req, res) => {
  try {
    // Find the user with the provided email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send('Invalid email or password');
    }

    // Check if the provided password matches the password in the database
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid email or password');
    }

    // If the email and password are valid, send a success status
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
