const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let formData = []; // Temporary storage for form data

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    
    // Server-side validation
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required!');
    }
    if (!email.includes('@')) {
        return res.status(400).send('Please enter a valid email address!');
    }

    // Store validated data
    formData.push({ name, email, message });
   
    res.render('result', { name, email, message });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
