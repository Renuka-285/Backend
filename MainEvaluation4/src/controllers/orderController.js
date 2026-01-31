
import { supabase } from '../config/supabaseClient.js';

export const createOrder = async (req, res) => {
  const { product_name, quantity, price, customerId } = req.body;

  // Check customer exists
  const { data: customer } = await supabase
    .from('customerss')
    .select('id')
    .eq('id', customerId)
    .single();

  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  const { data, error } = await supabase
    .from('orderss')
    .insert([{
      product_name,
      quantity,
      price,
      customer_id: customerId
    }])
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: 'Order created', order: data });
};

export const getCustomerOrders = async (req, res) => {
  const { customerId } = req.params;

  const { data, error } = await supabase
    .from('orderss')
    .select('*')
    .eq('customer_id', customerId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ orders: data });
};

export const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const { quantity, price, order_status } = req.body;

  const updateData = {};
  if (quantity !== undefined) updateData.quantity = quantity;
  if (price !== undefined) updateData.price = price;
  if (order_status !== undefined) updateData.order_status = order_status;

  if (Object.keys(updateData).length === 0) {
    return res.status(400).json({ error: 'No fields provided to update' });
  }

  const { data, error } = await supabase
    .from('orderss')   
    .update(updateData)
    .eq('id', orderId)
    .select()
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  if (!data) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({
    message: 'Order updated successfully',
    order: data
  });
};


export const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  const { error } = await supabase
    .from('orderss')
    .delete()
    .eq('id', orderId);

  if (error) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json({ message: 'Order deleted' });
};
