import { getJoke, getMemes, getMemeJoke } from './helper.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const memes = await getMemes(); // Get all possible memes from API

// Get a random meme
app.get('/meme', (_, res) => {
    const meme = memes[Math.floor(Math.random() * memes.length)]; // get a random meme
    res.json({
        success: true,
        name: meme,
        timestamp: new Date().toISOString(),
    });
}); // TODO: add endpoint to send over an image instead of just the name. maybe this shld go in a helper

// Get a random joke
app.get('/joke', async (_, res) => {
    const joke = await getJoke();
    res.json({
        success: true,
        setup: joke[0],
        delivery: joke[1],
    });
});

// Returns a random joke pasted on a random meme
app.get('/memejoke', async (_, res) => {
    const joke = await getJoke(); // array of 2 items
    console.log("random joke", joke)
    const meme = memes[Math.floor(Math.random() * memes.length)];
    const image = await getMemeJoke(meme, joke[0], joke[1]);
    res.setHeader('Content-Type', 'image/jpeg'); // set image header
    res.send(Buffer.from(image));
})

// Define a test route
app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});