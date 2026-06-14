const { fetchMetadata } = require('../services/metadataService');
const validateUrl = require('../utils/validateUrl');

const getMetadata = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                success: false,
                message: 'URL is required'
            });
        }

        if (!validateUrl(url)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid URL'
            });
        }

        const metadata = await fetchMetadata(url);

        res.status(200).json({
            success: true,
            data: metadata
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch metadata',
            error: error.message
        });
    }
};

module.exports = {
    getMetadata
};
