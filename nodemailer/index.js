const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your gmail email here',
    pass: 'your password app'//your can generate here by Add an app password from here: myaccount.google.com/apppasswords 
    //example: nodemailer it will generate a password copy and clean the space and past here
  }
});

// Define the email content with a reply-to address
let mailOptions = {
  from: 'your gmail email',
  to: 'your gmail email',
  replyTo: 'client email', // Specify the reply-to address
  subject: 'Subject of the email',
  text: `Body of the email,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
