import { getTodosFromDB, saveTodosToDB } from "../models/todo.model.js";

/* GET all todos */
export const getAllTodos = (req, res) => {
  try {
    const todos = getTodosFromDB();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

/* POST create todo */
export const createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todos = getTodosFromDB();

    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    todos.push(newTodo);
    saveTodosToDB(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

/* PUT update todo */
export const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const todos = getTodosFromDB();

    const todo = todos.find((t) => t.id === Number(id));

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = !todo.completed;
    saveTodosToDB(todos);

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

/* DELETE todo */
export const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const todos = getTodosFromDB();

    const filteredTodos = todos.filter((t) => t.id !== Number(id));

    if (todos.length === filteredTodos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    saveTodosToDB(filteredTodos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
