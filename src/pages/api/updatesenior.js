import connectDb from "../middleware/mongoose";
import Senior from "../../../models/Senior";
const nodemailer = require("nodemailer");
import Coupon from "../../../models/Coupon";
import Mail from "../../../models/Mail";
const handler = async (req, res) => {
if(req.method=="POST"){
    let mail = await Mail.findOne({_id:"652695762d7239feaa278ab1"});
        const transporter = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'basirkhan4ukhanatoz@gmail.com',
              pass: 'O1aXMRNItUmjprkD'
            }
          });
    
        const transporter1 = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'thebasirkhanofficial@gmail.com',
              pass: 'bOTLR5E0phXVM2qm'
            }
          });
    
    
        const transporter2 = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'specareenterprises@gmail.com',
              pass: 'XdIG2sMJZjyc6SWY'
            }
          });
    
        const transporter3 = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'projectstudiobyfivedevs@gmail.com',
              pass: 'VDCX4jOWqYA30K1S'
            }
          });
        const transporter4 = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'khanbasir5555@gmail.com',
              pass: 'MaRwImrfStFp1TPD'
            }
          });

let cpn = `AR${Math.floor(Math.random() * 10000)}`;
let coupon = await Coupon.findOne({cpn});
if(coupon){
    cpn = `AR${Math.floor(Math.random() * 10000)}`;
}
else{
    try{
        let ba = await Senior.findByIdAndUpdate({_id:req.body.id},{payment:req.body.payment});
        let a = new Coupon({cpn:cpn,regd:req.body.regd});
        await a.save();
        let b = await Mail.findOneAndUpdate({_id:"652695762d7239feaa278ab1"},{count:mail.count+1});
    }
    catch(err){
       res.status(200).json({success:false,message:"Coupon not generated due to some error . Maybe same regd no. exists in coupon database"});
    }
   

}

if(mail.count>=1&&mail.count<=200){
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
}
else if(mail.count>=201&&mail.count<=500){
    const info = await transporter1.sendMail({
        from: '<Team@arambh1.com>', // sender address
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
}
else if(mail.count>=501&&mail.count<=800){
    const info = await transporter2.sendMail({
        from: '<Team@arambh2.com>', // sender address
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
}
else if(mail.count>=801&&mail.count<=1100){
    const info = await transporter3.sendMail({
        from: '<Team@arambh3.com>', // sender address
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
}
else if(mail.count>=1101&&mail.count<=1400){
    const info = await transporter4.sendMail({
        from: '<Team@arambh4.com>', // sender address
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
}
res.status(200).json({success:true,message:"Payment updated successfully"});
}
else{
    res.status(200).json({success:false,message:"Method not allowed"})
}
}
export default connectDb(handler);