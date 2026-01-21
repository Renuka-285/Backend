import fs from "fs";

const DB_PATH = "./data/db.json";

export const getTodosFromDB = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data).todos;
};

export const saveTodosToDB = (todos) => {
  fs.writeFileSync(DB_PATH, JSON.stringify({ todos }, null, 2));
};
