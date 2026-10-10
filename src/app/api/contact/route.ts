import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    const attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <info@angiescleaningcenturion.co.za>',
      to: 'info@angiescleaningcenturion.co.za',
      replyTo: email,
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
      attachments
    });

    if (error) {
      console.error('Resend SDK error:', error);
      
      // Fallback if domain is not verified, attempt to send from onboarding@resend.dev
      if (error.name === 'validation_error') {
        const { error: retryError } = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'info@angiescleaningcenturion.co.za',
          replyTo: email,
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
          attachments
        });
        
        if (retryError) {
          return NextResponse.json({ success: false, error: retryError.message || 'Failed to send email' }, { status: 400 });
        }
        return NextResponse.json({ success: true });
      }

      return NextResponse.json({ success: false, error: error.message || 'Failed to send email' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
