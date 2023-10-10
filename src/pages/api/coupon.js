import connectDb from "../middleware/mongoose";
import Coupon from "../../../models/Coupon";
const handler = async (req, res) => {
if(req.method=="POST"){
    let a = await Coupon.find({cpn:req.body.coupon});
    if(a.length==0){
        res.status(400).json({success:false,message:"Coupon does not exist"})
    }
else if(a[0].clm=="Claimed"){
    res.status(400).json({success:false,message:"Coupon already claimed"}) 
}
else if(a[0].clm=="not claimed"){
    let b = await Coupon.findOneAndUpdate({cpn:req.body.coupon},{clm:"Claimed"});
    res.status(200).json({success:true,message:"Coupon claimed successfully"})
}
else{
    res.status(404).json({success:false,message:"Some thing went wrong please try again after some time"})
}
}
else{
    res.status(200).json({success:false,message:"Method not allowed"})
}
}
export default connectDb(handler);