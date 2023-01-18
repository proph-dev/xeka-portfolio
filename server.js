const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  });

const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { email, tel, firstName, lastName, subject, message } = req.body;

  // send the email
  transport.sendMail({
    from: email,
    to: "xekaportfoliocontact@gmail.com",
    tel,
    firstName,
    lastName,
    subject,
    text: message
  });

  res.send("Email bien envoyé !");
});

app.listen(3001, () => {
    console.log("Server started on http://localhost:3001");
  });