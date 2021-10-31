// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  method: string | undefined
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ name: 'Sam Doe', method: req.method })
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Wick', method: req.method })
  }
}
