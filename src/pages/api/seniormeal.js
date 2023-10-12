import connectDb from "../middleware/mongoose";
import Senior from "../../../models/Senior";
const handler = async (req, res) => {
    let an= "Veg"
let a = await Senior.find({meal:"Veg"});
let b = await Senior.find({meal:"NonVeg"});
if(a||b){
    res.status(200).json({success:true,veg:a.length,senior:"veg",nonveg:b.length,senior1:"nonveg"});
}
    
else{
    res.status(200).json({success:false,message:"No veg Found"});
}

}
export default connectDb(handler);