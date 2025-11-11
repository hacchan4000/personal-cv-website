// app/api/contact/route.js
import Mailjet from 'node-mailjet';

console.log('Loaded Keys:', process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);


export async function POST(req) {
  try {
    const data = await req.json();
    console.log('Incoming contact form:', data);

    const mailjetClient = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    const result = await mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'pilot@mailjet.com', // use your verified sender email
            Name: 'Portfolio Contact Form',
          },
          To: [
            {
              Email: 'adityanugraha7251@gmail.com',
              Name: 'Aditya',
            },
          ],
          Subject: 'New message from your website',
          TextPart: `
            Name: ${data.name}
            Email: ${data.email}
            Number: ${data.number}
            Message: ${data.pesan}
          `,
          HTMLPart: `
            <h3>New Contact Message</h3>
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Number:</b> ${data.number}</p>
            <p><b>Message:</b> ${data.pesan}</p>
          `,
        },
      ],
    });

    return new Response(
      JSON.stringify({ success: true, result: result.body }),
      {
        status: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    );
  } catch (err) {
    console.error('Mailjet error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
