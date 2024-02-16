const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "http://localhost:3000",
  port: 3000,
  secure: true,
  auth: {
    user: "username",
    pass: "password",
  },
});

async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Mik 135 👻" <mik135@checkpoint.com>', 
    to: "deji@instructor.com", 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);

}