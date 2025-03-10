import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'public/documents/Godel-Space Capability Statement.pdf');
  // Check if file exists
  if (fs.existsSync(filePath)) {
    // Set headers
    res.setHeader('Content-Disposition', 'attachment; filename=capabilitystatement.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    
    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
}