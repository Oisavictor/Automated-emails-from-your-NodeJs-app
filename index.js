const express = require('express');
const nodemailer = require('nodeMailer');
require('dotenv').config();

const app = express()


const PORT = process.env.PORT;



// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 2525,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
});



// send mail with defined transport object
let mailOptions = {
    from: "victoroisa8@gmail.com",  // list of sender
    to:"victoroisa8@gmail.com , XXX@gmail.com",  // list of receivers
    subject: "Nodemailer Project", // Subject line
    text: "I am Testing or sending a dummy email from my Node app using nodemailer" // plain text body
    // html: "<b>Hello world?</b>", // html body
  };

  
  // Transporter.sendMail object
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
  

app.listen(PORT, () => {
  console.log(`nodemailerProject is listening at http://localhost:${PORT}`)
})

