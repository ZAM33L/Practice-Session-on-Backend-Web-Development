require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware..
app.use(cors());
app.use(express.static("public"));

// Rate Limiting Middleware
let requestCount = 0;
const rateLimit = (req, res, next) => {
    if (requestCount >= 10) {
        return res.status(429).json({ error: "Rate limit exceeded. Try again later." });
    }
    requestCount++;
    setTimeout(() => requestCount--, 60000); // Reset after 1 minute
    next();
};

// Weather API Route
app.get("/weather", rateLimit, async (req, res) => {
    try {
        const city = req.query.city;
        if (!city) return res.status(400).json({ error: "City is required" });

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);

        res.json({
            temp: response.data.main.temp,
            description: response.data.weather[0].description
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
