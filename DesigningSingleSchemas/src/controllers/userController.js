import { supabase } from "../config/supabase.js";
import bcrypt from "bcrypt";
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        password: hashedPassword,
        age,
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        return res.status(409).json({ error: "Email already exists" });
      }
      throw error;
    }

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, role } = req.body;

    const { data, error } = await supabase
      .from("users")
      .update({ name, age, role })
      .eq("id", id)
      .select();

    if (data.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    if (error) throw error;

    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("users")
      .delete()
      .eq("id", id)
      .select();

    if (data.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    if (error) throw error;

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
