# Practice-Session-on-Backend-Web-Development

# Advanced Full-Stack Development Tasks

## Overview

This project consists of multiple tasks that progressively build a robust full-stack application using Angular, Node.js, Express, MongoDB, MySQL, Firebase, Redis, and other modern technologies.

---

## **Task 1: Basic Frontend Application**

### ✅ Objective:

- Build a simple static frontend with HTML, CSS, and JavaScript.
- Focus on creating a user-friendly UI.

### 📌 Features:

- Basic HTML structure with styling.
- Interactive JavaScript elements.

[Click here to watch demo video](./task 1/l1bt1.mp4)

---

## **Task 2: Frontend with API Integration**

### ✅ Objective:

- Enhance the frontend by fetching data from an external API.

### 📌 Features:

- Use `fetch()` or `Axios` to retrieve and display API data.
- Handle errors and display user-friendly messages.

---

## **Task 3: Backend API Development**

### ✅ Objective:

- Develop a RESTful API using Node.js and Express.

### 📌 Features:

- Implement CRUD operations.
- Use Express routes and middleware.
- Connect to MongoDB for data storage.

---

## **Task 4: Database Management**

### ✅ Objective:

- Enhance backend with a database (MongoDB/MySQL).

### 📌 Features:

- Define schemas/models.
- Implement database operations (Create, Read, Update, Delete).
- Ensure data validation.

---

## **Task 5: User Authentication**

### ✅ Objective:

- Implement secure authentication with JWT.

### 📌 Features:

- User signup, login, and authentication.
- Password hashing with `bcryptjs`.
- Protect routes using JWT-based authorization.

---

## **Task 6: OAuth Authentication**

### ✅ Objective:

- Implement authentication using Firebase OAuth.

### 📌 Features:

- Allow users to log in using Google.
- Use Firebase Authentication SDK.
- Handle session management.

---

## **Task 7: Advanced API Usage & External API Integration**

### ✅ Objective:

- Integrate third-party APIs (e.g., OpenWeather API).

### 📌 Features:

- Fetch and display weather data.
- Implement CORS handling for external API requests.
- Optimize API calls using caching.

---

## **Task 8: Advanced Server-Side Functionality**

### ✅ Objective:

- Implement middleware, background tasks, and caching.

### 📌 Features:

- Use `morgan` for request logging.
- Implement job queues with `BullMQ` and `Redis`.
- Use `Memurai` or `Redis` for server-side caching.
- Implement a worker process for handling background tasks.

---

## **How to Run the Project**

### 🔧 **Frontend**

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Start the frontend server:
   ```sh
   npx http-server -c-1 --cors -o
   ```

### 🔧 **Backend**

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```

### 🔧 **Redis Setup**

1. Start Redis using Memurai:
   ```sh
   cd "C:\Program Files\Memurai"
   memurai.exe
   ```
2. Verify Redis is running:
   ```sh
   redis-cli ping
   ```

---

## **Testing in Postman**

### 🌍 **Test Weather API (GET)**

- **URL:** `http://localhost:5000/weather?city=Chennai`
- **Method:** `GET`
- **Expected Response:**
  ```json
  {
    "city": "Chennai",
    "temperature": "32°C",
    "description": "Partly Cloudy"
  }
  ```

### 📧 **Test Email Queue (POST)**

- **URL:** `http://localhost:5000/send-email`
- **Method:** `POST`
- **Body (JSON):**
  ```json
  {
    "to": "your-email@example.com",
    "subject": "Test Email",
    "message": "Hello, this is a test email!"
  }
  ```
- **Expected Response:**
  ```json
  {
    "message": "Email job added to queue"
  }
  ```

---

## **Technologies Used**

- **Frontend:** HTML, CSS, JavaScript, Angular (for advanced frontend tasks)
- **Backend:** Node.js, Express
- **Database:** MongoDB, MySQL
- **Authentication:** Firebase, JWT
- **Task Queue & Caching:** Redis, BullMQ, Memurai
- **API Integration:** OpenWeather API

---

## **Conclusion**

This project demonstrates a full-stack development process, integrating frontend, backend, database, authentication, API handling, caching, and background job processing. 🚀

---



