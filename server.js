const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs'); // Import fs to write to a file
const app = express();

const PORT = process.env.PORT || 3001;
  
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Endpoint to track button clicks
app.post('/track-click', (req, res) => {
    const clickData = {
        timestamp: new Date(),
        clicked: req.body.clicked,
    };

    // Log the click data to the console
    console.log('Button clicked:', clickData);

    // Optionally, write the click data to a file
    fs.appendFile('clicks.log', JSON.stringify(clickData) + '\n', (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
    });

    res.status(200).send('Click tracked');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
