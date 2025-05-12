# Fluens

Fluens is een moderne webapplicatie gebouwd met React (frontend) en Firebase (backend).
De applicatie wordt ontwikkeld met schaalbaarheid en veiligheid als uitgangspunt.

## Projectstructuur

```
fluens/
  ├── frontend/    # React applicatie (client side)
  ├── venv/        # Python virtual environment (voor backend/API uitbreidingen)
  ├── README.md    # Project documentatie
  └── .gitignore   # Git exclusions
```

## Installatie en opstarten

### 1. Clone deze repository

```bash
git clone https://github.com/<jouw-gebruiker>/fluens.git
cd fluens
```

### 2. Zet de frontend omgeving op

```bash
cd frontend
npm install
npm start
```

De React-app draait nu lokaal op `http://localhost:3000`.

### 3. (Optioneel) Activeer Python virtual environment

```bash
source venv/bin/activate
```

Voor toekomstige backend-ontwikkeling (bijvoorbeeld API's met Flask of FastAPI).

---

## Deployments

* **Development**: lokaal via `npm start`.
* **Testomgeving**: via Firebase Hosting Channel Deploy.
* **Productieomgeving**: via Firebase Production Deploy.

---

## Stack

* React (met Create React App)
* Firebase Authentication
* Firebase Firestore
* Firebase Hosting
* Python (optioneel, voor API/backend)
