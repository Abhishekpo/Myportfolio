const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [
      "https://apoudel.dev",
      "https://www.apoudel.dev",
    ],
  })
);
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Unable to send message",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});