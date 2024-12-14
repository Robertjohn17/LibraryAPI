# Library Management System API

## Overview

This project is a RESTful API for a Library Management System that allows users to register, log in, and manage books. The API supports user authentication, CRUD operations for books, and pagination for book listings.

## Features

- **User Registration**: Allows new users to register by providing their email and password.
- **User Authentication**: Allows users to log in and obtain a JWT token for accessing protected routes.
- **Role-Based Access Control**: Supports two roles:
  - **Admin**: Full access to all routes (can manage users and books).
  - **User**: Limited access to book listings and their own data.
- **Book Management**:
  - Add a new book.
  - Get a list of books with pagination.
  - Get details of a specific book by ID.
  - Update book details.
  - Delete a book.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing user and book data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Token)**: For authentication and securing routes.
- **Bcrypt.js**: For password hashing.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js
- MongoDB (locally or a cloud instance like MongoDB Atlas)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/libraryapidb  # Replace with your MongoDB URI
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the application

```bash
npm start
```

## API Endpoints

### 1. User Registration

- URL: /api/user/register
- Method: POST
- Request Body:

```bash
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### 2. User Login

- URL: /api/user/register
- Method: POST
- Request Body:

```bash
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### 3. Get All Books (with Pagination)

- URL: /api/books
- Method: GET
- **Query Parameters**:
  - page: Page number (optional, default is 1)
  - limit: Number of books per page (optional, default is 10)

```bash
    GET /api/books?page=2&limit=5
```

### 4. Get Book by ID
- URL: /api/books/:id
- Method: GET
```bash 
GET /api/books/607d2c1f8e4b2b1bc0f99d84
```

### 5. Add a New Book
- URL: /api/books
- Method: POST
- Request Body:
```bash
{
  "title": "New Book Title",
  "author": "New Author",
  "isbn": "1122334455",
  "publishedDate": "2023-06-30"
}
```

### 6. Update a Book
- URL: /api/books/:id
- Method: PUT

### 7. Delete a Book
- URL: /api/books/:id
- Method: DELETE
- Example Request
```bash 
DELETE /api/books/607d2c1f8e4b2b1bc0f99d84
```

## Authentication

- All routes except user registration, login and displaying all books are protected and require a valid JWT token.
You need to pass the JWT token in the Authorization header as a Bearer token for authenticated routes:
```bash 
Authorization: Bearer <your_jwt_token>
```

## Error Handling

- 400: Bad request (e.g., missing parameters, invalid input).
- 401: Unauthorized (invalid or missing JWT token).
- 404: Not found (e.g., user or book not found).
- 500: Internal server error.

## Contributing

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch (git checkout -b feature/your-feature).
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/your-feature).
6. Create a new Pull Request.

