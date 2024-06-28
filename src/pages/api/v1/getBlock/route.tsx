import { NextApiRequest, NextApiResponse } from 'next';

// Sample data, you can replace this with real data fetching logic
const sampleBlockData = {
  blockNumber: 123456,
  transactions: [
    { id: 1, from: '0x123', to: '0x456', amount: 1.5 },
    { id: 2, from: '0x789', to: '0xabc', amount: 2.0 }
  ],
  timestamp: new Date().toISOString()
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json(sampleBlockData);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}