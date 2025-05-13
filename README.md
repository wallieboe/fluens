# Fluens 🌿

![Version](https://img.shields.io/badge/version-0.1.0--alpha-blue)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-Private-important)

**Fluens** is a modern web application built with React (frontend) and Firebase (backend).  
It is designed for scalable, secure, and modular integrations between different systems.

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
