const express = require('express');
const mongoose = require('mongoose');
const WilderModel = require('./models/Wider');
const WilderController = require('./controllers/Wilders');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/wilders')
    .then(() => console.log('Mongo connected'));

// middleware
app.use(express.json());

// routes
app.get("/", async (req, res) => {
    res.send("Hello World");
});

app.post('/api/wilders/create', WilderController.create);
app.get('/api/wilders/read', WilderController.read);
app.patch('/api/wilders/update/:wilderId', WilderController.update);

// start server
app.listen(3550, () => console.log("Server started on 3550"));