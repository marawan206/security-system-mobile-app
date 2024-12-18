 
import { Request, Response } from 'express';

export const getUserData = (req: Request, res: Response) => {
  res.json({ userId: 1, name: 'John Doe' });
};
