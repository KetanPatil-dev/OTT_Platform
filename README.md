# OTT_Platform
# 🎬 Netflix Clone

A full-stack Netflix clone that allows users to sign up, log in, and browse a dynamic collection of movies fetched from an external API. Built using **React**, **Node.js**, **MongoDB**, and **JWT Authentication**.

---

## 🚀 Features

- User Authentication (Sign Up, Login, Logout)
- Protected Routes using JWT tokens
- Fetch movies from an external API (e.g., TMDb)
- Responsive Netflix-style UI
- Movie List: Browse movies by category
- Save favorite movies (optional feature)
- Dark-themed UI

---

## 🧰 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- CSS 

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs (for password hashing)
- jsonwebtoken
- cookie-parser
- dotenv

---

## 🔑 API Used

- [TMDb (The Movie Database)](https://www.themoviedb.org/documentation/api)  
> Replace `YOUR_API_KEY` in your `.env` file or movie fetching function.

---

## 📦 Installation

### 1. Clone the repository

git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
- Frontend
cd client
npm install
- Backend
  cd server
npm install

-Folder Structure
/client         → React frontend
/server         → Express backend
/models         → Mongoose schemas
/controllers    → API logic (auth, movies)
/routes         → Express routes
/middleware     → JWT verification
