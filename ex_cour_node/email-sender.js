const monmail = require("nodemailer");
const envoimail = async (email, subject, text) => {
    try {
        const transporter = monmail.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port:25,
            secure: true,
            auth: { user: process.env.EMAIL, pass: process.env.PASSWORD, },
        });
        await transporter.sendMail({
            from:process.env.EMAIL,
            to:email,
            subject:subject,
            text:text,});
            console.log("email envoyer avec succée");
        }catch(error){console.log(error,"email no envoyée");}
    } ;
envoimail("ben_aissa_mohamed@hotmail.fr","testt node","ahla bik fi nodejs");




    
