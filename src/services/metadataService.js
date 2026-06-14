const axios = require('axios');
const cheerio = require('cheerio');

const fetchMetadata = async (url) => {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const title = $('title').text() || 'No title found';

    const description =
        $('meta[name="description"]').attr('content') ||
        'No description found';

    const favicon =
        $('link[rel="icon"]').attr('href') ||
        $('link[rel="shortcut icon"]').attr('href') ||
        null;

    const metaTags = {};

    $('meta').each((i, element) => {
        const name =
            $(element).attr('name') ||
            $(element).attr('property');

        const content = $(element).attr('content');

        if (name && content) {
            metaTags[name] = content;
        }
    });

    return {
        title,
        description,
        favicon,
        metaTags
    };
};

module.exports = {
    fetchMetadata
};
