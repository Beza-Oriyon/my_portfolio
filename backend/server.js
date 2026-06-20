const express = require('express');
const cors = require('cors');
const helemt= require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const contactRoutes = require('./routes/contact');


const app= express();
const PORT= process.env.PORT || 5000;

//middleware
app.use(helemt());
app.use(cors({origin: 'http://localhost:3000',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/contact', contactRoutes)
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!' });
});

// TODO: Contact form route later

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});