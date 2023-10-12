import connectDb from "../middleware/mongoose";
import Coupon from "../../../models/Coupon";
const handler = async (req, res) => {
if(req.method==='POST'){
let a = await Coupon.findOne({regd:req.body.regd});
if(a){
    res.status(200).json({success:false,message:"Coupon Already Created with this regd no."});
}
else{
    let cpn = `AR${Math.floor(Math.random() * 10000)}`;
    let coupon = await Coupon.findOne({cpn});
    if(coupon){
        cpn = `AR${Math.floor(Math.random() * 10000)}`;
    }
    else{
        let cpn1 = new Coupon({
            regd:req.body.regd,
            cpn:cpn,
            clm:"not claimed"
        })
        await cpn1.save();
        res.status(200).json({success:true,message:"Coupon Created successfully",data:cpn});
    }  
}
}
else{
    res.status(400).json({success:false,message:"This method is not aloowed"});
}
}
export default connectDb(handler);