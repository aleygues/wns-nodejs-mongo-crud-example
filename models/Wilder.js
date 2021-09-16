const mongoose = require('mongoose');

const WilderSchema = new mongoose.Schema({
    name: String,
    city: String,
});

module.exports = mongoose.model('wilder', WilderSchema);