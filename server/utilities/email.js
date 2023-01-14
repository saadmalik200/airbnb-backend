const nodemailer = require("nodemailer");

module.exports = async (token) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <saad_malik200@hotmail.com>', // sender address
    to: "saadmalik.dci@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world this is plain text?", // plain text body
    html: `<b>Welcome to our Airbnb</b>
        <p>click <a href="http://localhost:3000/emailconfirm/${token}">here</a> to verify your email</p>
      `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};
