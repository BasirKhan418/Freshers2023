import connectDb from "../middleware/mongoose";
import Fresher from "../../../models/Fresher";
import Coupon from "../../../models/Coupon";
const nodemailer = require("nodemailer");
import Mail from "../../../models/Mail";
const handler = async (req, res) => {
    if(req.method==="POST"){
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

        
        let {name,email,regd,meal,status}=req.body;
        let fresher = await Fresher.findOne({regd});
        let fresher1 = await Fresher.findOne({email});
        if(fresher){
            res.status(400).json({success:false,message:"Fresher with same regd no. already exists"})
        }
        else if(fresher1){
            res.status(400).json({success:false,message:"Fresher with same email already exists"})
        }
        else{
            let b = await Mail.findOneAndUpdate({_id:"652695762d7239feaa278ab1"},{count:mail.count+1});
            let cpn = `AR${Math.floor(Math.random() * 10000)}`;
            let coupon = await Coupon.findOne({cpn});
            if(coupon){
                cpn = `AR${Math.floor(Math.random() * 10000)}`;
            }
            else{
                try{
                    let a = new Coupon({cpn:cpn,regd:regd});
                    await a.save(); 
                    let ab= new Fresher({name:name,email:email,regd:regd,meal:status});
            await ab.save();
            
            res.status(200).json({success:true,data:a,cpn:cpn})
                }
                catch(err){
                    res.status(400).json({success:false,message:"Error in coupon generation .Already with this registration number coupon is generated"})
                }
            }
            console.log(cpn);
            
            if(mail.count>=1&&mail.count<=200){
                const info = await transporter.sendMail({
                    from: '<Team@arambh.com>', // sender address
                    to: `${req.body.email}`, // list of receivers
                    subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                    text: "Account Created Successfully", // plain text body
                    html: `
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #ff5722; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
            </div>
            <div style="padding: 20px;">
                <p>Hello ${name},</p>
                <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
                <p>Date: 13th October</p>
                <p>Time: 12.30PM</p>
                <p>Location: CUTM ,Near Gym Area</p>
                <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            </div>
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
        <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color:#ff5722; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                <p>If you have any questions or need further assistance, please contact us.</p>
            </div>
        </div>
       
    </body>
                    `, 
                  });
            }
            else if(mail.count>=200&&mail.count<=500){
                const info = await transporter1.sendMail({
                    from: '<Team@arambh1.com>', // sender address
                    to: `${req.body.email}`, // list of receivers
                    subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                    text: "Account Created Successfully", // plain text body
                    html: `
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #ff5722; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
            </div>
            <div style="padding: 20px;">
                <p>Hello ${name},</p>
                <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
                <p>Date: 13th October</p>
                <p>Time: 12.30PM</p>
                <p>Location: CUTM ,Near Gym Area</p>
                <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            </div>
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
        <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color:#ff5722; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                <p>If you have any questions or need further assistance, please contact us.</p>
            </div>
        </div>
       
    </body>
                    `, 
                  });
            }  
            else if(mail.count>=500&&mail.count<=800){
                const info = await transporter2.sendMail({
                    from: '<Team@arambh2.com>', // sender address
                    to: `${req.body.email}`, // list of receivers
                    subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                    text: "Account Created Successfully", // plain text body
                    html: `
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #ff5722; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
            </div>
            <div style="padding: 20px;">
                <p>Hello ${name},</p>
                <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
                <p>Date: 13th October</p>
                <p>Time: 12.30PM</p>
                <p>Location: CUTM ,Near Gym Area</p>
                <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            </div>
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
        <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color:#ff5722; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                <p>If you have any questions or need further assistance, please contact us.</p>
            </div>
        </div>
       
    </body>
                    `, 
                  });
            }
            else if(mail.count>=800&&mail.count<=1100){
                const info = await transporter3.sendMail({
                    from: '<Team@arambh3.com>', // sender address
                    to: `${req.body.email}`, // list of receivers
                    subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                    text: "Account Created Successfully", // plain text body
                    html: `
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #ff5722; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
            </div>
            <div style="padding: 20px;">
                <p>Hello ${name},</p>
                <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
                <p>Date: 13th October</p>
                <p>Time: 12.30PM</p>
                <p>Location: CUTM ,Near Gym Area</p>
                <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            </div>
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
        <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color:#ff5722; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                <p>If you have any questions or need further assistance, please contact us.</p>
            </div>
        </div>
       
    </body>
                    `, 
                  });
            }   
            else if(mail.count>=1100&&mail.count<=1400){
                const info = await transporter4.sendMail({
                    from: '<Team@arambh4.com>', // sender address
                    to: `${req.body.email}`, // list of receivers
                    subject: `🎉 Freshers' Party Registration Confirmation 🚀`, // Subject line
                    text: "Account Created Successfully", // plain text body
                    html: `
                    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #ff5722; padding: 20px 0; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: #fff; font-size: 28px;">Freshers' Party Registration Confirmation</h1>
            </div>
            <div style="padding: 20px;">
                <p>Hello ${name},</p>
                <p>Congratulations! You have successfully registered for the Freshers' Party Event. We are thrilled to have you join us for this exciting event filled with fun and entertainment.</p>
                <p>Date: 13th October</p>
                <p>Time: 12.30PM</p>
                <p>Location: CUTM ,Near Gym Area</p>
                <p>Don't forget to bring your student ID for entry. We look forward to seeing you there!</p>
            </div>
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
        <a href="" style="display: inline-block; margin: 20px 0; padding: 10px 20px; background-color:#ff5722; color: #fff; text-decoration: none; border-radius: 5px;">Event Details</a>
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                <p>If you have any questions or need further assistance, please contact us.</p>
            </div>
        </div>
       
    </body>
                    `, 
                  });
            }     
          
    }
}
   
    else{
        res.status(404).json({success:false,message:"Method not allowed"})
    }
}
export default connectDb(handler);