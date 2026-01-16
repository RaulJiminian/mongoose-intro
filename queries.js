const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Todo = require("./models/todo.js");

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries();

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB");

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log("Queries running.");
  // The functions calls to run queries in our db will go here as we write them.
  // await createTodo();
  // await findTodos();
  // await updateTodo();
  await deleteTodo();
};

connect();
/*------------------------------ Query Functions -----------------------------*/
const createTodo = async () => {
  const todoData = {
    text: "Fill out end of week exit ticket",
    isComplete: false,
  };

  const todo = await Todo.create(todoData);
  console.log(todo);
};

const findTodos = async () => {
  const todos = await Todo.find({ text: "Learn JS" }); // The "find" method returns every document in the todos collection
  console.log(todos);
  // const todo = await Todo.findById("69651c8f08a424e9173c6f80")
  // console.log(todo)
};

const updateTodo = async () => {
  const id = "696519f6b5fa19c5602f347d";
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { isComplete: true },
    { new: true }
  );
  console.log("Updated todo:", updatedTodo);
};

// queries.js

const deleteTodo = async () => {
  const id = "696519f6b5fa19c5602f347d";
  const removedTodo = await Todo.findByIdAndDelete(id);
  console.log("Removed todo:", removedTodo);
};
