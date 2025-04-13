
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

const MY_PASSWORD=process.env.MY_PASSWORD;

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'lealemtesfazedo@gmail.com',
    pass: MY_PASSWORD,
  },
});

app.get('/' ,(req,res)=>{
  {
    res.send("hello");
  }
})


app.post('/send-message', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📨 Received data:", req.body);

  try {
    const mailOptions = {
      from: email,
      to: 'lealemtesfazedo@gmail.com',
      subject: `Message from ${name}: ${subject}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent!");
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error("❌ Nodemailer error:", error); 
    res.status(500).send('Something went wrong!');
  }
});



app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
