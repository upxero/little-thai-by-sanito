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
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Little Thai Reservations" <${process.env.BREVO_USER}>`, // moet gevalideerd zijn in Brevo
      to: process.env.RECEIVER_EMAIL, // je Gmail kan hier
      replyTo: email, // klant e-mail voor antwoord
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
