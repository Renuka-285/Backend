
import supabase from "../config/supabase.js";
import validateOrder from "../validations/order.validation.js";

async function createOrder(req, res) {
  const error = validateOrder(req.body);
  if (error) return res.status(400).json({ error });

  const { product_name, quantity, price, customerId } = req.body;
  const { data, error: dbError } = await supabase
    .from('orders')
    .insert([{
      product_name,
      quantity,
      price,
      customer_id: customerId
    }])
    .select();
    if (dbError) {
    return res.status(400).json({ error: "Invalid customer ID" });
  }

  res.status(201).json({ message: "Order created", data });
}
async function getCustomerOrders(req, res) {
  const { customerId } = req.params;

  const { data } = await supabase
    .from('orders')
    .select('*')
    .eq('customer_id', customerId);

  res.json(data);
}
async function updateOrder(req, res) {
  const { orderId } = req.params;

  const { data } = await supabase
    .from('orders')
    .update(req.body)
    .eq('id', orderId)
    .select();

  if (!data || data.length === 0) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json({ message: "Order updated", data });
}
async function deleteOrder(req, res) {
  const { orderId } = req.params;

  const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', orderId);

  if (error) {
    return res.status(404).json({ error: "Order not found" });
  }

  res.json({ message: "Order deleted" });
}
export {
  createOrder,
  getCustomerOrders,
  updateOrder,
  deleteOrder
};