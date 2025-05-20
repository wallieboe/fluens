# Fluens 🌿

![Version](https://img.shields.io/badge/version-0.1.1-alpha-blue)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-Private-important)

**Fluens** is a modern web application built with React (frontend) and Firebase (backend).  
It is designed for scalable, secure, and modular integrations between different systems.

---

## 📦 Project Template Features

This repository serves as a template for new React + Firebase projects. It includes:

- Modern React setup with TypeScript support
- Tailwind CSS with custom configuration
- Custom color scheme (fluens-blue: #3576C9, fluens-dark-blue: #0f2d5a)
- Custom animations and transitions
- Firebase Authentication (Email/Password)
- React Router for navigation
- Responsive design components
- Accessible components and forms
- Custom error handling and loading states
- Pre-configured build and development scripts

### Key Components

- **Authentication**: Login and Registration pages
- **UI**: Modern design system with consistent styling
- **Navigation**: Responsive navigation and routing
- **Forms**: Validated forms with error handling
- **Layout**: Flexible layout components
- **Styling**: Custom Tailwind configuration

### Color Scheme

The template uses a custom color scheme:
- Primary: fluens-blue (#3576C9)
- Secondary: fluens-dark-blue (#0f2d5a)
- These colors are defined in tailwind.config.js and can be customized as needed

---

## 🚀 Project Overview

- **Frontend:** React 19 + Tailwind CSS
- **Backend:** Firebase (Authentication, Firestore, Hosting)
- **Authentication:** Firebase Email/Password
- **CI/CD:** GitHub Actions for automated deployments to Firebase
- **Hosting:** Firebase Hosting

---

## 🛠 Quick Start

```bash
# Clone the repository
git clone https://github.com/wallieboe/fluens.git

# Navigate into the frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start the local development server
npm start
```

App will be available at: [http://localhost:3000](http://localhost:3000)

---

## 🌳 Branch Workflow

| Branch | Purpose |
|:--|:--|
| `develop` | Daily development (features, fixes, tests) |
| `test` | Pre-production/staging environment (merge from develop) |
| `main` | Production-ready releases only (merge from test) |

✅ All feature work happens in `develop`,  
✅ Merges into `test` for validation,  
✅ Final merges into `main` for live production releases.

---

## 🔗 Deployment URLs

| Environment | URL |
|:--|:--|
| Test | [https://fluens-7de49--test-s54lvqc7.web.app](https://fluens-7de49--test-s54lvqc7.web.app) |
| Production | (to be added after production deployment) |

---

## 📝 License

© 2025 Fluens.  
All rights reserved by Waltertje van nu. 🚀
