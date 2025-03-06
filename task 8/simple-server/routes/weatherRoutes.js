const express = require('express');
const axios = require('axios');
const redis = require('../redisClient');

const router = express.Router();
const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/', async (req, res) => {
    const { city } = req.query;
    const cacheKey = `weather:${city}`;

    try {
        // Check cache
        const cachedData = await redis.get(cacheKey);
        if (cachedData) return res.json(JSON.parse(cachedData));

        // Fetch data from OpenWeather API
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = {
            temp: response.data.main.temp,
            description: response.data.weather[0].description
        };

        // Store in Redis (cache for 10 minutes)
        await redis.setex(cacheKey, 600, JSON.stringify(weatherData));

        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

module.exports = router;
