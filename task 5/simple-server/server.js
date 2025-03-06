const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

let users = [];

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// API Endpoints
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

app.get('/api/users', (req, res) => {
    res.status(200).send(users);
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map(user => user.id === id ? updatedUser : user);
    res.status(200).send(updatedUser);
});

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.status(200).send({ message: `User with id ${id} deleted` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

