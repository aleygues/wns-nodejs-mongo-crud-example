const express = require('express');
const mongoose = require('mongoose');
const WilderRoutes = require('./routes/wilders');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/wilders')
    .then(() => console.log('Mongo connected'));

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/wilders', WilderRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(500).json({ error: true });
    } else {
        next();
    }
});

app.use((req, res) => {
    res.status(404).json({ notfound: true });
});

// start server
app.listen(3552, () => console.log("Server started on 3552"));