import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
