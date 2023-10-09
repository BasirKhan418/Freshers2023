const mongoose = require('mongoose');
const FresherSchema =new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true,unique:true},
    regd: {type: Number, required:true,unique:true},
    meal: {type: String, default:""},
    phone: {type: String, default:""}
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Fresher",FresherSchema);