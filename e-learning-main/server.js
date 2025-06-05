const express = require('express');
const app = express();

const PORT = 5000; // Choose a port (5000 is common)

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Listen on 0.0.0.0 to allow external access
app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running at http://192.168.1.13:${PORT}');
});
