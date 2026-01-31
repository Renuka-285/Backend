
import { supabase } from '../config/supabaseClient.js';

export const registerCustomer = async (req, res) => {
  const { full_name, email, phone } = req.body;

  // Check duplicate email
  const { data: existing } = await supabase
    .from('customerss')
    .select('id')
    .eq('email', email)
    .single();

  if (existing) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const { data, error } = await supabase
    .from('customerss')
    .insert([{ full_name, email, phone }])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({
    message: 'Customer registered successfully',
    customer: data
  });
};

export const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  const { error } = await supabase
    .from('customerss')
    .delete()
    .eq('id', customerId);

  if (error) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  res.json({ message: 'Customer deleted (orders cascaded automatically)' });
};
