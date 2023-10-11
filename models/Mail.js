const mongoose = require('mongoose');
const MailSchema =new mongoose.Schema({
    count: {type: Number, default:0}
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Mail",MailSchema);