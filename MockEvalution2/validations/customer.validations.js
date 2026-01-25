
function validateCustomer({full_name,email,phone}){
    if(!full_name || !email || !phone){
        return "All fields are required"
    }
    return null;
}
export default validateCustomer;