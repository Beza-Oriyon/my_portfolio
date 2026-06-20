const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
].filter(Boolean);

const isAllowedOrigin = (origin) => {
  if (!origin) return true;
  if (allowedOrigins.includes(origin)) return true;
  // Allow Render preview/production URLs
  if (origin.endsWith('.onrender.com')) return true;
  return false;
};

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});