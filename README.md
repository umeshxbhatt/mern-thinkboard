# ⚡ ThinkBoard — Modern Full-Stack Notes Workspace

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://mern-thinkboard-d3sq.onrender.com/)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A fast, clean, and responsive notes management workspace built on the **MERN** stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. Designed to capture ideas, manage tasks, and organize daily notes through a modern slate-themed dashboard.

🔗 **Live Deployment:** [https://mern-thinkboard-d3sq.onrender.com/](https://mern-thinkboard-d3sq.onrender.com/)  
📦 **GitHub Repository:** [https://github.com/umeshxbhatt/mern-thinkboard](https://github.com/umeshxbhatt/mern-thinkboard)

---

## 📸 Overview

![ThinkBoard Preview](https://via.placeholder.com/1200x630.png?text=ThinkBoard+MERN+Application+Preview)
*(Tip: Add a real screenshot or GIF of your running ThinkBoard dashboard here)*

---

## ✨ Key Features

* **📝 Complete CRUD Operations:** Create, view, update, and delete notes with real-time feedback and persistent database synchronization.
* **🗂️ Clean 4-Column Grid View:** Organized dashboard featuring intelligent multi-line clamping (`line-clamp-2`) for clean card typography and scannability.
* **🎨 Modern Slate Aesthetic:** Minimalist dark mode interface built with Tailwind CSS, backdrop blurs, crisp micro-interactions, and collapsible sidebar navigation.
* **📱 Responsive & Mobile-First:** Fluid layouts that adapt automatically across mobile devices, tablets, and wide desktop displays.
* **🚀 Production-Ready Architecture:** 
  * Node.js & Express REST API with modular controllers and routes.
  * MongoDB Atlas persistence with Mongoose ODM data modeling.
  * Express catch-all routing compatible with Single Page Application (SPA) reloads.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, React Router, Tailwind CSS, Lucide Icons, Vite |
| **Backend** | Node.js, Express.js, CORS, dotenv |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Deployment** | Render |

---

## 📁 Repository Structure

```text
mern-thinkboard/
├── backend/
│   ├── config/            # MongoDB connection logic
│   ├── controllers/       # Notes controller functions (CRUD)
│   ├── models/            # Mongoose Schema (Note.js)
│   ├── routes/            # Express API routes (/api/notes)
│   ├── .env.example       # Sample environment configuration
│   └── server.js          # Express entry point & static SPA serving
│
└── frontend/
    ├── public/            # Static assets
    ├── src/
    │   ├── components/    # Reusable UI elements (Sidebar, Navbar, Modals)
    │   ├── pages/         # Page views (Dashboard, Notes, CreateNote)
    │   ├── App.jsx        # Routing configuration
    │   └── index.css      # Tailwind base and utility styling
    └── package.json
