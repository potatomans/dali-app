import { getJoke, getMemes } from './helper.js';
import express from 'express';

// const express = require('express');
// const helper = require('./helper');
const app = express();
// const cors = require('cors'); // Add if linking to frontend

// app.use(cors()); // Add if linking to frontend

const memes = await getMemes(); // Get all possible memes from API

// Get a random meme
app.get('/meme', (_, res) => {
    const meme = memes[Math.floor(Math.random() * memes.length)]; // get a random meme
    res.json({
        success: true,
        name: meme,
        timestamp: new Date().toISOString(),
    });
}); // TODO: add endpoint to send over an image instead of just the name

// Get a random joke
app.get('/joke', async (_, res) => {
    const joke = await getJoke();
    res.json({
        success: true,
        setup: joke[0],
        delivery: joke[1],
    });
});

// Define a test route
app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});