# Node.js HTTP Server

This is a simple HTTP server built with Node.js. It handles different routes such as the home page, an about page, a JSON API response, and a POST request to handle incoming data. The server listens on port 3000.

## Features

 **Home Page**: Accessible at `/` (GET request), responds with a plain text message: "Home page".
 **About Page**: Accessible at `/about` (GET request), responds with a plain text message: "This is the about page".
 **API Endpoint**: Accessible at `/api` (GET request), responds with a JSON object containing personal data:
  ```json
  {
    "firstName": "Siphelele",
    "lastName": "Zulu"
  }
```
POST Request: Accessible at /post (POST request), allows posting data to the server, which will be logged and returned in the response:
json

```
  "message": "Data received",
  "data": "posted data here"
```
Prerequisites
Node.js: You must have Node.js installed to run the server.
How to Run
Clone the repository or copy the code.

Navigate to the project folder.

Run the server using Node.js:

```
node server.js
Open a browser or API client (like Postman) and go to the following routes:
```
http://localhost:3000/: Home page
http://localhost:3000/about: About page
http://localhost:3000/api: API endpoint with JSON response
http://localhost:3000/post: Send a POST request with some data to this endpoint.
Example of POST Request
Using curl to send a POST request:

```
curl -X POST http://localhost:3000/post -d "name=John&age=30"
The server will respond with:
```
json
```
{
  "message": "Data received",
  "data": "name=John&age=30"
}
```
Error Handling
If a route does not exist, the server will return a 404 status code with the message: "Page not found, ufunani".
