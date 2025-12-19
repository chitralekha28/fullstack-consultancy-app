## 📌 Project Overview

This project is a **full-stack web application** consisting of a **user-facing landing page** and an **admin panel**.
The application allows businesses to showcase their projects and clients, collect user inquiries through a contact form, and manage newsletter subscriptions — all dynamically powered by a backend.

The admin panel provides full control over content management without modifying frontend code.

---

## ✨ Features

### 🌐 Landing Page

* Hero section with **Free Consultation / Quick Quote form**
* **Why Choose Us**, **About Us**, and CTA sections
* **Our Projects** section (data fetched from backend)
* **Happy Clients** section (data fetched from backend)
* Contact form submission
* Newsletter subscription (email capture)
* Fully responsive design (mobile & desktop)

---

### 🧑‍💼 Admin Panel

* Add and delete **Projects**
* Add and delete **Clients**
* View **Contact Form submissions**
* View **Newsletter subscribers**
* Changes made in admin panel reflect instantly on landing page

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* HTML5, CSS3
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* **Frontend**: Netlify
* **Backend**: Railway
* **Database**: MongoDB Atlas (free tier)

---

## 🚀 Live Demo

* **Frontend (Live Site)**:
  👉 *Add your Netlify URL here*

* **Backend API**:
  👉 *Add your Railway URL here*

---

## 📂 Project Structure

```
root/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── admin/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd project-folder
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🧪 Functional Highlights

* Dynamic data rendering using REST APIs
* Centralized content management through admin panel
* SPA routing with proper deployment configuration
* Cloud database integration
* Production-ready deployment

---


