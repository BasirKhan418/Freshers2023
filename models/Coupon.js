const mongoose = require('mongoose');
const CouponSchema =new mongoose.Schema({
    clm: {type: String,default:"not claimed"},
    cpn: {type: String, required:true,unique:true},
    regd: {type: String, required:true,unique:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("Coupon",CouponSchema);