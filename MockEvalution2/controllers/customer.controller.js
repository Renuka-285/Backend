import supabase from "../config/supabase.js";
import validateCustomer from "../validations/customer.validations.js";
async function registerCustomer(req, res) {
  const error = validateCustomer(req.body);
  if (error) return res.status(400).json({ error });
  const { full_name, email, phone } = req.body;
  const { data, error: dbError } = await supabase
    .from("customers")
    .insert([{ full_name, email, phone }])
    .select();
  if (dbError) {
    if (dbError.code === "23505") {
      return res.status(409).json({ error: "Email already exists" });
    }
    return res.status(500).json({ error: dbError.message });
  }

  res.status(201).json({ message: "Customer registered", data });
}
async function deleteCustomer(req, res) {
  const { customerId } = req.params;

  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", customerId);

  if (error) {
    return res.status(404).json({ error: "Customer not found" });
  }

  res.json({
    message: "Customer deleted (orders deleted automatically due to CASCADE)",
  });
}

export { registerCustomer, deleteCustomer };
