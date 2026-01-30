import supabase from "../config/supabase.js";
export const addTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({ error: "Title and userId are required" });
  }

  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single();

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { data, error } = await supabase
    .from("todos")
    .insert([{ title, description, user_id: userId }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ todo: data[0] });
};


export const getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ todos: data });
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { data: todo } = await supabase
    .from("todos")
    .select("*")
    .eq("id", todoId)
    .single();

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { title, description, is_completed } = req.body;

  const { data, error } = await supabase
    .from("todos")
    .update({ title, description, is_completed })
    .eq("id", todoId)
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.json({ todo: data[0] });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: "Todo deleted successfully" });
};
