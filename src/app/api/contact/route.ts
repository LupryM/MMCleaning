import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, service, message, attachment } = data;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Contact Form <info@angiescleaningcenturion.co.za>',
        to: 'info@angiescleaningcenturion.co.za',
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        attachments: attachment ? [attachment] : []
      })
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await res.json();
      console.error('Resend API error:', errorData);
      
      // Fallback if domain is not verified, attempt to send from onboarding@resend.dev
      if (errorData.statusCode === 403 && errorData.name === 'validation_error') {
        const retryRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'info@angiescleaningcenturion.co.za',
            reply_to: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Service:</strong> ${service || 'Not specified'}</p>
              <br/>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
            attachments: attachment ? [attachment] : []
          })
        });
        
        if (retryRes.ok) {
          return NextResponse.json({ success: true });
        }
        const retryError = await retryRes.json();
        return NextResponse.json({ success: false, error: retryError.message || 'Failed to send email' }, { status: 400 });
      }

      return NextResponse.json({ success: false, error: errorData.message || 'Failed to send email' }, { status: 400 });
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
