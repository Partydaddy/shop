
export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ url: 'https://checkout.stripe.com/test' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
