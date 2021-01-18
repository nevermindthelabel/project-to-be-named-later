import express from 'express';
import { router } from './routes/index.js';

const PORT = 3001 || process.env.PORT;
const app = express();

app.use(router);

app.listen(PORT, () => console.log(`server 💨 on port http://localhost:${PORT}`));
