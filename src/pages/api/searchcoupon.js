
import connectDb from "../middleware/mongoose";
import Coupon from "../../../models/Coupon";
const handler = async (req, res) => {
if(req.method==='POST'){
let a = await Coupon.findOne({regd:req.body.regd});
if(a){
    res.status(200).json({success:true,data:a});
}
else{
    res.status(200).json({success:false,message:"No Coupon Found"});
}
}
else{
    res.status(400).json({success:false,message:"This method is not aloowed"});
}
}
export default connectDb(handler);