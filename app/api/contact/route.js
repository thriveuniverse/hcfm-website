import { Resend } from "resend";

// TODO: replace with a verified historicalfeasibility.com sender and the real inbox to receive enquiries.
const FROM_ADDRESS = "HCFM <hello@historicalfeasibility.com>";
const TO_ADDRESS = "hello@historicalfeasibility.com";

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Contact route error: RESEND_API_KEY is not set.");
      return Response.json({ message: "Email is not configured yet." }, { status: 500 });
    }

    const { name, email, organisation, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ message: "Name, email and message are required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `HCFM enquiry — ${name}${organisation ? ` (${organisation})` : ""}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        ${organisation ? `<p><strong>Organisation:</strong> ${organisation}</p>` : ""}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ message: "Failed to send." }, { status: 500 });
    }

    return Response.json({ message: "Sent." }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ message: "Server error." }, { status: 500 });
  }
}
