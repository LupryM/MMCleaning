import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, service } = data;

    const fullName = `${firstName} ${lastName}`;
    const formattedService = service ? service.replace(/-/g, ' ') : 'cleaning';

    // 1. Send email to the business
    const businessEmailPromise = resend.emails.send({
      from: 'Quote Request <info@angiescleaningcenturion.co.za>',
      to: 'info@angiescleaningcenturion.co.za',
      replyTo: email,
      subject: 'New Quote Request',
      text: `New Quote Request

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service: ${formattedService}`,
    });

    // 2. Send professional auto-reply to the user
    const userEmailPromise = resend.emails.send({
      from: "Angie's Cleaning <info@angiescleaningcenturion.co.za>",
      to: email,
      subject: "Your Quote Request - Angie's Cleaning",
      text: `Dear ${firstName},\n\nThank you for contacting Angie's Cleaning. We have received your request for a quote regarding our ${formattedService} services.\n\nOur team is reviewing your details and will get back to you shortly.\n\nBest regards,\nThe Team at Angie's Cleaning`,
      html: `Dear ${firstName},<br><br>
Thank you for contacting Angie's Cleaning. We have successfully received your request for a quote regarding our ${formattedService} services.<br><br>
Our team is currently reviewing your details and will get back to you shortly with a comprehensive estimate.<br><br>
Our Working Hours:<br>
Monday - Friday: 08:00 AM - 05:00 PM<br>
Saturday - Sunday: 09:00 AM - 02:00 PM<br><br>
If you have any immediate questions, please feel free to reply directly to this email, call us, or shoot us a WhatsApp message at <a href="https://wa.me/27645110847">064 511 0847</a>.<br><br>
Best regards,<br>
The Team at Angie's Cleaning<br>
angiescleaningcenturion.co.za`,
    });

    const [businessResult, userResult] = await Promise.all([businessEmailPromise, userEmailPromise]);

    // Handle fallback if domain is not verified (Resend strict checking)
    if (businessResult.error && businessResult.error.name === 'validation_error') {
       // Send at least the notification to the business owner via onboarding address
       await resend.emails.send({
          from: 'Quote Request <onboarding@resend.dev>',
          to: 'info@angiescleaningcenturion.co.za',
          replyTo: email,
          subject: 'New Quote Request',
          text: `New Quote Request

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service: ${formattedService}

---
Note: The auto-reply to the customer could not be sent because your domain is not verified on Resend yet.`,
       });
       return NextResponse.json({ success: true });
    }

    if (businessResult.error) {
      console.error('Resend SDK error (business):', businessResult.error);
      return NextResponse.json({ success: false, error: businessResult.error.message || 'Failed to send email' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
