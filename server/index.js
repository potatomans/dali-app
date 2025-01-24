const express = require('express');
const app = express();
// const cors = require('cors'); // Add if linking to frontend

// app.use(cors()); // Add if linking to frontend

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});