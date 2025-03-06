require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to the Dashboard!", user: req.user });
});