const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'momadejunior584@gmail.com',
    pass: 'vbyrwanncufqntdr'
  }
});

let product = [{
  car: "BMW",
  color: "red",
}, {
  car: "VW",
  color: "black",
}];

// Define the email content with a reply-to address
let mailOptions = {
  from: 'momadejunior584@gmail.com',
  to: 'momadejunior584@gmail.com',
  replyTo: 'momadejunior.dev@gmail.com', // Specify the reply-to address
  subject: 'Subject of the email',
  text: `Body of the email\n${product.map(car => `${car.car} - ${car.color}`).join('\n')}`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
