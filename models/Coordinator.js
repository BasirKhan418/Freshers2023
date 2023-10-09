const mongoose = require('mongoose');
const CoordinatorSchema =new mongoose.Schema({
    name: {type: String, required:true},
    post: {type: String, required:true},
    img: {type: String, required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Coordinator",CoordinatorSchema);