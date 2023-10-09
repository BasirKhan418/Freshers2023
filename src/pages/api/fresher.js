import connectDb from "../middleware/mongoose";
import Fresher from "../../../models/Fresher";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
    if(req.method==="POST"){
        const transporter = await nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
              user: 'basirkhan4ukhanatoz@gmail.com',
              pass: 'O1aXMRNItUmjprkD'
            }
          });
        let {name,email,regd,meal,phone}=req.body;
        let fresher = await Fresher.findOne({regd});
        let fresher1 = await Fresher.findOne({email});
        if(fresher){
            res.status(400).json({success:false,message:"Fresher with same regd no. already exists"})
        }
        else if(fresher1){
            res.status(400).json({success:false,message:"Fresher with same email already exists"})
        }
        else{
            let a = new Fresher({name:name,email:email,regd:regd,meal:meal,phone:phone});
            await a.save();
            res.status(200).json({success:true,data:a})
            const info = await transporter.sendMail({
                from: '<Team@arambh.com>', // sender address
                to: `${req.body.email}`, // list of receivers
                subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                text: "Account Created Successfully", // plain text body
                html: `
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
        <div style="background-color: #3498db; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
        </div>
        <div style="padding: 20px;">
            <p>Hello ${name},</p>
            <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
            <p>Date: 13th October</p>
            <p>Time: 12.30PM</p>
            <p>Location: CUTM ,Near Gym Area</p>
            <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
        </div>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p>If you have any questions or need further assistance, please contact us.</p>
        </div>
    </div>
</body>
                `, 
              });
        }

    }
    else{
        res.status(404).json({success:false,message:"Method not allowed"})
    }
res.status(200).json({success:true,dEVS:"bASIRKHAN",message:"Hello world",name:"Basir Khan"})}
export default connectDb(handler);