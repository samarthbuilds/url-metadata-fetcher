URL Metadata Fetcher

A backend application that extracts and returns metadata from webpages using a provided URL.

The project demonstrates API design, asynchronous JavaScript, error handling, URL validation, and clean backend architecture using a controller-service pattern.

⸻

🚀 Features

* Extract webpage title
* Extract meta description
* Extract favicon URL
* Extract metadata tags
* Validate URLs before processing
* Handle invalid URLs gracefully
* Structured backend architecture
* Async data fetching and processing

⸻

🛠️ Tech Stack

Backend

* Node.js
* JavaScript
* Express.js

Concepts

* REST APIs
* Async/Await
* Error Handling
* URL Validation
* JSON Processing

⸻

📂 Project Structure

url-metadata-fetcher/
│
├── src/
│   ├── routes/
│   │   └── metadataRoutes.js
│   │
│   ├── controllers/
│   │   └── metadataController.js
│   │
│   ├── services/
│   │   └── metadataService.js
│   │
│   ├── utils/
│   │   └── validateUrl.js
│   │
│   └── app.js
│
├── server.js
├── package.json
└── README.md

⸻

⚙️ How It Works

1. Client sends a URL.
2. URL validation is performed.
3. Metadata service fetches webpage content.
4. Metadata is extracted.
5. Structured JSON response is returned.

⸻

📦 Installation

Clone the repository:

git clone https://github.com/your-username/url-metadata-fetcher.git

Move into the project directory:

cd url-metadata-fetcher

Install dependencies:

npm install

Start the server:

npm start

⸻

🎯 Learning Goals

This project was built to practice:

* Backend architecture
* API development
* Async JavaScript
* Error handling
* Data extraction
* Project organization
* Clean code principles

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

Backend Engineering Journey — Week 2 project
