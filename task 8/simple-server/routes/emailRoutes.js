const express = require('express');
const { addEmailJob } = require('../queue');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    await addEmailJob(email);
    res.json({ message: `✅ Email job added for ${email}` });
});

module.exports = router;
