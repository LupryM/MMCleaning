const fetch = require('node-fetch');

async function run() {
  const res = await fetch('http://localhost:3000/api/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      phone: '1234567890',
      service: 'deep-cleaning'
    })
  });
  
  console.log('Status:', res.status);
  const text = await res.text();
  console.log('Body:', text);
}

run();
