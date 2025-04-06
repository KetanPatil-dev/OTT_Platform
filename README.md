# OTT_Platform
# 🎬 Netflix Clone

A full-stack Netflix clone that allows users to sign up, log in, and browse a dynamic collection of movies fetched from an external API. Built using **React**, **Node.js**, **MongoDB**, and **JWT Authentication**.

![image alt](https://github.com/KetanPatil-dev/OTT_Platform/blob/df487cf464a0ed259f0fcb1352316f59db456730/Images/Screenshot%202025-04-04%20at%202.01.57%E2%80%AFPM.png)
![image alt](https://github.com/KetanPatil-dev/OTT_Platform/blob/bcaa16730af2e1456ff369aa090fa15033342e76/Images/Screenshot%202025-04-04%20at%202.04.00%E2%80%AFPM.png)
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
- NOTE :- The authentication I implemented was designed mt me because one of the routes threw random error, it worked fine on Postman but not on the Client side.
  So i made my own custom authentication.
