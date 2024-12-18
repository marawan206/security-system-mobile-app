import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'This is a test route!' });
});

export default router;
 
