import nodemailer from "nodemailer";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const { name, email, phone, date, time, persons, message } = JSON.parse(event.body);

  try {
    // Nodemailer transport configuratie
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.BREVO_USER, // bv: mike.upxero@gmail.com
        pass: process.env.BREVO_PASS, // je Brevo SMTP wachtwoord
      },
    });

    // Mail verzenden
    await transporter.sendMail({
      from: `"Little Thai by Sanito Reservations" <${process.env.BREVO_USER}>`, // geverifieerd adres
      replyTo: email, // klant e-mail
      to: process.env.RECEIVER_EMAIL, // bv: mike.upxero@gmail.com
      subject: `New reservation from ${name}`,
      html: `
        <h3>New reservation received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${persons}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Error sending email via Brevo:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Email sending failed" }),
    };
  }
}
