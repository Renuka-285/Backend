import supabase from "../config/supabase.js";
export const validateSignup = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return "All fields are required";
  }

  if (!email.includes("@")) {
    return "Invalid email format";
  }

  return null;
};
