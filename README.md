# ⚡ DashFlow — All-in-One Daily Productivity & Utility Hub

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-blue?style=for-the-badge&logo=vercel)](https://your-deployment-link.com)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge&logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, modular full-stack web productivity dashboard built with the **MERN** stack (MongoDB, Express, React, Node.js) and Tailwind CSS. Designed to consolidate daily developer and productivity workflows into a unified, high-performance workspace.

---

## 📸 Preview

![DashFlow Preview](https://via.placeholder.com/1200x630.png?text=DashFlow+Dashboard+Preview)
*(Replace with an actual screenshot or GIF of your running application)*

---

## 🚀 Key Features

* **⚡ Responsive Modular Architecture:** Component-driven workspace designed to support seamless switching across multiple independent utility tools.
* **📝 Notes Management (CRUD):** 
  * Responsive 4-column dynamic grid layout with 2-line auto-clamping.
  * Modal-driven note creation with timestamps.
  * Real-time deletion and persistent state synchronized with MongoDB.
* **🎨 Modern Dark UI/UX:** Styled using a sleek Slate/Zinc aesthetic, backdrop blur effects, smooth micro-interactions, and collapsible interactive sidebar navigation.
* **🔒 Production-Ready Backend:** RESTful API architecture built on Node.js and Express 5, featuring structured routing, error middleware, and MongoDB Atlas database integration.
* **📱 Mobile-First Responsiveness:** Fully adaptable layouts optimized across mobile, tablet, and desktop viewports.

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, React Router, Tailwind CSS, Lucide Icons, Vite |
| **Backend** | Node.js, Express.js (v5.x), CORS, dotenv |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Deployment** | Vercel / Render |

---

## 📁 Project Structure

```text
DashFlow/
├── backend/
│   ├── models/            # Mongoose Schemas (Note, User, etc.)
│   ├── routes/            # REST API route handlers
│   ├── controllers/       # Business logic controllers
│   ├── config/            # Database connection & config
│   ├── .env.example       # Example backend environment variables
│   └── server.js          # Express server entry point & SPA fallback
│
└── frontend/
    ├── public/            # Static assets & favicon
    ├── src/
    │   ├── components/    # Reusable UI components (Sidebar, Modals, Inputs)
    │   ├── pages/         # View pages (Dashboard, NotesPage, Settings)
    │   ├── App.jsx        # Routing configuration
    │   └── index.css      # Tailwind directives & base styles
    └── package.json
