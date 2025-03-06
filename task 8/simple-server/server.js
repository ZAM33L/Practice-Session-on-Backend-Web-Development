require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const weatherRoutes = require('./routes/weatherRoutes');
const emailRoutes = require('./routes/emailRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/weather', weatherRoutes);
app.use('/email', emailRoutes);

// Global Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
