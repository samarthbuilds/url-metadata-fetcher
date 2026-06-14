# URL Metadata Fetcher

A Node.js application that extracts and analyzes webpage metadata from URLs.

The application fetches important metadata such as titles, descriptions, favicons, and meta tags while demonstrating backend architecture, asynchronous programming, and API handling.

🚀 Features

* Fetch webpage title
* Extract meta description
* Retrieve favicon URL
* Extract metadata tags
* Validate URLs before processing
* Handle invalid URLs gracefully
* Handle API and network errors
* Clean controller-service architecture

⸻

🛠️ Technologies Used

* JavaScript
* Node.js
* Express.js
* Async/Await
* REST APIs
* JSON Processing

⸻

## 📂 Project Structure

```text
url-metadata-fetcher/
├── src/
│   ├── controllers/
│   │   └── metadataController.js
│   ├── routes/
│   │   └── metadataRoutes.js
│   ├── services/
│   │   └── metadataService.js
│   ├── utils/
│   │   └── validateUrl.js
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```
📌 How It Works

1. User provides a URL.
2. The application validates the URL.
3. Webpage content is fetched.
4. Metadata is extracted from the webpage.
5. The metadata is returned in a structured format.
6. Errors are handled if the URL is invalid or inaccessible.

⸻

🎯 Learning Goals

This project was built to practice:

* API consumption
* Async JavaScript
* Error handling
* Backend architecture
* URL validation
* Working with JSON data
* Clean code organization

⸻

🔮 Future Improvements

* Open Graph metadata support
* Website preview generation
* Metadata caching
* Rate limiting
* Bulk URL processing
* API documentation

⸻

👨‍💻 Author

Samarth

Backend Engineering Journey: Week 2 Project
