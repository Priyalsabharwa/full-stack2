# JWT Authentication Experiment (Spring Boot)

This project demonstrates a stateless authentication system using **Spring Boot 3.x** and **JSON Web Tokens (JWT)**.

## 🚀 Overview
In this experiment, we implemented token-based authentication. This ensures the backend remains stateless, making it scalable and secure for modern web applications.


## 🛠️ Tech Stack
* **Java 17+**
* **Spring Boot 3.x**
* **JJWT Library** (For token generation and parsing)
* **Postman** (For testing)

---

## 📂 Core Components
1. **`JwtUtil.java`**: Handles token generation and validation.
2. **`JwtRequestFilter.java`**: Intercepts requests to check for the `Bearer` token.
3. **`SecurityConfig.java`**: Configures security rules and protects endpoints.

---

## 🧪 Testing (Postman)
1. **Login**: `POST /api/v1/auth/login` returns a JWT.
2. **Authorized Access**: `GET /api/v1/auth/protected` works only with a valid token in the Header.
3. **Unauthorized Access**: Returns **403 Forbidden** if the token is missing.