import connectDb from "../middleware/mongoose";
import Senior from "../../../models/Senior";
const handler = async (req, res) => {
let a= await Senior.find();
res.status(200).json({success:true,data:a})
}
export default connectDb(handler);