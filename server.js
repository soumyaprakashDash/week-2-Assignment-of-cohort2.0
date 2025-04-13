const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const FILES_DIR = path.join(__dirname, 'files'); // points to ./files folder

// Route 1: GET /files - list all files in ./files/
app.get('/files', (req, res) => {
    fs.readdir(FILES_DIR, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading directory' });
        }
        res.status(200).json(files);
    });
});

// Route 2: GET /file/:filename - return the content of a specific file
app.get('/file/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(FILES_DIR, filename);

    // Check if file exists and read it
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.status(200).send(data);
    });
});

// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
