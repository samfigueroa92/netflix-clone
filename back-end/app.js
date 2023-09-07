const express = require('express');
const moviesData = require('./data/moviesData.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ data: 'Service is running!' });
});

app.get('/movies', (req, res) => {
    try {
        res.status(200).json({ data: moviesData })
    } catch(err) {
        res.status(500).json({ error: err.message })
    };
});

app.get('/movies/:id', (req, res) => {
    try {
       const { id } = req.params;
       const movie = moviesData.find((movie) => movie.id === id);

       if (movie) {
        res.status(200).json({ data: movie})
       }else{
        res.status(404).json({ error: `Item - ${id} - not found!`})
       }
    } catch(err) {
        res.status(500).json({ error: err.message})
    };
});

module.exports = app;