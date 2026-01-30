import supabase from "../config/supabase.js";
export const validateCreateTodo = ({ title, userId }) => {
  if (!title) {
    return "Title is required";
  }

  if (!userId) {
    return "User ID is required";
  }

  if (typeof title !== "string") {
    return "Title must be a string";
  }

  if (title.trim().length === 0) {
    return "Title cannot be empty";
  }

  return null;
};


export const validateUpdateTodo = ({ title, description, is_completed }) => {
  if (
    title === undefined &&
    description === undefined &&
    is_completed === undefined
  ) {
    return "At least one field must be provided for update";
  }

  if (title !== undefined) {
    if (typeof title !== "string") {
      return "Title must be a string";
    }
    if (title.trim().length === 0) {
      return "Title cannot be empty";
    }
  }

  if (description !== undefined && typeof description !== "string") {
    return "Description must be a string";
  }

  if (
    is_completed !== undefined &&
    typeof is_completed !== "boolean"
  ) {
    return "is_completed must be a boolean";
  }

  return null;
};
