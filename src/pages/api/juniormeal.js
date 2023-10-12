import connectDb from "../middleware/mongoose";
import Fresher from "../../../models/Fresher";
const handler = async (req, res) => {
    let an= "Veg"
let a = await Fresher.find({meal:"Veg"});
let b = await Fresher.find({meal:"NonVeg"});
if(a||b){
    res.status(200).json({success:true,veg:a.length,junior:"veg",nonveg:b.length,junior1:"nonveg"});
}
    
else{
    res.status(200).json({success:false,message:"No veg Found"});
}

}
export default connectDb(handler);