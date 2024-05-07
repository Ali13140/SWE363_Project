const mongoose = require('mongoose');

// Define the schema for a task
const TaskSchema = new mongoose.Schema({
  title: String,
  details: String,
  dateTime: Date,
  status: String
});

// Define the schema for a user
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  tasks: [TaskSchema]
});

// Create the model from the schema
const User = mongoose.model('User', UserSchema);
const sampleUsers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'password123',
      tasks: [
        {
          title: 'Task 1',
          details: 'Details for Task 1',
          dateTime: new Date(),
          status: 'Incomplete'
        }
      ]
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      username: 'janedoe',
      email: 'jane@example.com',
      password: 'password123',
      tasks: [
        {
          title: 'Task 2',
          details: 'Details for Task 2',
          dateTime: new Date(),
          status: 'Incomplete'
        }
      ]
    }
  ];
  
  sampleUsers.forEach(async (user) => {
    const newUser = new User(user);
    await newUser.save();
  });

module.exports = User;
