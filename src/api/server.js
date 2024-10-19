// server.js
import app from './app.js';
import dotenv from 'dotenv/config';

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));