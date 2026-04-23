
import express from 'express';
import mocksRouter from './routes/mocks.router.js';

const app = express();
app.use(express.json());

app.use('/api/mocks', mocksRouter);

app.listen(3000, () => console.log('Server running on port 3000'));
