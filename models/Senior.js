const mongoose = require('mongoose');
const SeniorSchema =new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true,unique:true},
    regd: {type: Number, required:true,unique:true},
    phone: {type: String, default:""},
    payment: {type: String, default:""},
    meal: {type: String, default:""},

},{timestamps:true})
mongoose.models={}
export default mongoose.model("Senior",SeniorSchema);