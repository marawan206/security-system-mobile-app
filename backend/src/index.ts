import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes';
import { logRequest } from './middleware/logRequest';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running');
});

app.use('/api', apiRoutes);

app.use(logRequest);

// Set up port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
