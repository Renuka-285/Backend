
import supabase from "../config/supabase.js";
import { validateSignup } from "../validations/userValidation.js";

export const signup = async (req, res) => {
  const error = validateSignup(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, password } = req.body;

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const { data, error: dbError } = await supabase
    .from("users")
    .insert([{ name, email, password }])
    .select();

  if (dbError) {
    return res.status(500).json({ error: dbError.message });
  }

  res.status(201).json({
    message: "User created successfully",
    user: data[0],
  });
};
