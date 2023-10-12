import connectDb from "../middleware/mongoose";
import Senior from "../../../models/Senior";
const handler = async (req, res) => {
if(req.method==='POST'){
let a = await Senior.findOne({regd:req.body});

if(a){
    res.status(200).json({success:true,data:a});
}
else{
    res.status(200).json({success:false,message:"No Senior Found"});
}
}
else{
    res.status(400).json({success:false,message:"This method is not aloowed"});
}
}
export default connectDb(handler);