import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email content for the owner
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            🚗 New Contact Form Submission - Phuket Child Seat
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 15px;">Customer Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${
                phone
                  ? `
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">
                  <a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              `
                  : ""
              }
              ${
                service
                  ? `
              <tr${!phone ? ' style="background-color: #f8f9fa;"' : ""}>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${service}</td>
              </tr>
              `
                  : ""
              }
            </table>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #3B82F6; border-radius: 5px;">
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              📧 Reply directly to this email to respond to the customer<br>
              📱 Or call them at: ${phone || "No phone provided"}<br>
              🕒 Submitted: ${new Date().toLocaleString("en-US", {
                timeZone: "Asia/Bangkok",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })} (Thailand Time)
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to owner
    const { data, error } = await resend.emails.send({
      from: "Phuket Child Seat <noreply@kids-onboard.com>", // Replace with your verified domain
      to: ["owner@gmail.com"], // Replace with actual owner email
      replyTo: email, // Customer's email for easy reply
      subject: `🚗 New Contact: ${name} - ${service || "General Inquiry"}`,
      html: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to customer
    const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #3B82F6; margin-bottom: 20px;">Thank you for contacting Phuket Child Seat! 🚗</h2>
          
          <p style="color: #333; line-height: 1.6;">Dear ${name},</p>
          
          <p style="color: #333; line-height: 1.6;">
            We've received your inquiry and will get back to you within 1 hour during business hours.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Your Message:</h3>
            <p style="color: #333; margin-bottom: 0;">${message}</p>
          </div>
          
          <p style="color: #333; line-height: 1.6;">
            <strong>What's next?</strong><br>
            Our team will review your request and contact you soon with personalized recommendations for your travel needs.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong>Phuket Child Seat Team</strong><br>
              Safe Travel Services with Imported Britax Seats
            </p>
          </div>
        </div>
      </div>
    `;

    // Send confirmation to customer
    await resend.emails.send({
      from: "Phuket Child Seat <noreply@kids-onboard.com>",
      to: [email],
      subject: "Thank you for your inquiry - Phuket Child Seat",
      html: confirmationEmail,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
