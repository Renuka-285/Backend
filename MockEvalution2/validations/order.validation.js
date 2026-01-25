
function validateOrder({product_name,quantity,price,customerId}){
    if(!product_name || !quantity || !price || !customerId){
        return "missing required fields";
    }
    return null;
}
export default validateOrder;