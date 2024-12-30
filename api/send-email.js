const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_name, user_email, service, message } = req.body;

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: user_email,
      to: "fazilat.990@gmail.com",
      subject: `Contact Form Submission: ${service}`,
      text: `
        Name: ${user_name}
        Email: ${user_email}
        Service: ${service}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
