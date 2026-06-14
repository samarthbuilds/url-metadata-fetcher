const express = require('express');
const cors = require('cors');

const metadataRoutes = require('./routes/metadataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/metadata', metadataRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'URL Metadata Fetcher API is running'
    });
});

module.exports = app;
