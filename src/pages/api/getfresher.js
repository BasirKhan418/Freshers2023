import connectDb from "../middleware/mongoose";
import Fresher from "../../../models/Fresher";
const handler = async (req, res) => {
let a= await Fresher.find();
res.status(200).json({success:true,data:a})
}
export default connectDb(handler);