import connectDb from "../middleware/mongoose";
import Senior from "../../../models/Senior";
const nodemailer = require("nodemailer");
import Coupon from "../../../models/Coupon";
const handler = async (req, res) => {
if(req.method=="POST"){
    const transporter = await nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
          user: 'basirkhan4ukhanatoz@gmail.com',
          pass: 'O1aXMRNItUmjprkD'
        }
      });
    console.log(req.body);
let a = await Senior.findByIdAndUpdate({_id:req.body.id},{payment:req.body.payment});
let cpn = `AR${Math.floor(Math.random() * 10000)}`;
let coupon = await Coupon.findOne({cpn});
if(coupon){
    cpn = `AR${Math.floor(Math.random() * 10000)}`;
}
else{
    let a = new Coupon({cpn:cpn});
    await a.save();
}
console.log(a.email)
const info = await transporter.sendMail({
    from: '<Team@arambh.com>', // sender address
    to: `${a.email}`, // list of receivers
    subject: `🎉 Freshers' Party Payment Confirmation 🚀`, // Subject line
    text: "Account Created Successfully", // plain text body
    html: `
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
<div style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
<tr>
    <td bgcolor="#ff5722" style="text-align: center; padding: 20px; color: #fff;">
        <h1>🍔 Food Coupon ! 🍕</h1>
        <p>Enjoy a special meal on your fresher's party.</p>
    </td>
</tr>
<tr>
    <td style="padding: 30px;">
        <h2 style="font-size: 24px; color: #333; margin-bottom: 20px;">Get A Free Meal On Fresher's Party</h2>
        <p style="margin-bottom: 20px;">Use code <strong>${cpn}</strong> at fresher's party event get your free meal.</p>
    </td>
</tr>
</table>
</div>
<div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
<p>If you have any questions or need further assistance, please contact us.</p>
</div>
</div>

</body>
    `, 
  });
res.status(200).json({success:true,message:"Payment updated successfully"});
}
else{
    res.status(200).json({success:false,message:"Method not allowed"})
}
}
export default connectDb(handler);