const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.render('result', { name, email });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
