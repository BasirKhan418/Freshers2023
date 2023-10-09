const mongoose = require('mongoose');
const FaqSchema =new mongoose.Schema({
    question: {type: String, required:true},
    answer: {type: String, required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Faq",FaqSchema);