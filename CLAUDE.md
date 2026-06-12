# CLAUDE.md — Fluens

Dit bestand geeft Claude Code (en andere AI-assistenten) de context om aan Fluens te werken.

## Wat is Fluens?

Fluens is een webplatform voor het **automatiseren van financiële workflows**, in ontwikkeling bij **Annona Deep Tier Impact Finance bv**. De geplande kernfunctionaliteit is **scenario-management** (zie ROADMAP.md, v0.3.0): gebruikers kunnen scenario's aanmaken en beheren, met opslag per gebruiker in Firestore (gepland voor v1.0.0).

**Huidige status: v0.1.1-alpha.** Wat er nu werkt:
- Landingspagina (Nederlandstalig, marketing-stijl) met dark/light-mode toggle
- Registreren en inloggen via Firebase Authentication (e-mail/wachtwoord)
- Dashboard (alleen voor ingelogde gebruikers, beveiligd via `PrivateRoute`)
- Uitloggen, 404-pagina, versienummer in de footer

De UI-taal is **Nederlands**; code, commits en bestandsnamen zijn Engels.

## Tech stack

| Laag | Technologie |
|:--|:--|
| Frontend | React 19 (JavaScript, geen TypeScript) via Create React App (`react-scripts` 5) |
| Styling | Tailwind CSS 3 (`darkMode: 'class'`), plugins: forms, typography |
| Routing | react-router-dom 7 |
| Auth | Firebase Authentication (e-mail/wachtwoord), SDK v11 |
| Hosting | Firebase Hosting (SPA-rewrite naar `index.html`) |
| CI/CD | GitHub Actions (`.github/workflows/firebase-hosting.yml`) |
| Tests | Jest + React Testing Library (CRA-standaard) |

De map `backend/` is leeg (placeholder); er is nog geen eigen backend. `venv/` is een overblijfsel van een Python-experiment en wordt genegeerd door git.

## Projectstructuur

```
fluens/
├── frontend/                  # De volledige React-app — hier gebeurt al het werk
│   ├── src/
│   │   ├── App.js             # Router + providers + globale layout/footer
│   │   ├── firebaseConfig.js  # Firebase-init, exporteert `auth`
│   │   ├── version.js         # appVersion — ophogen bij releases (zichtbaar in footer)
│   │   ├── components/        # FluensLogo, Navigation, PrivateRoute
│   │   ├── context/           # AuthContext (currentUser), ThemeContext (dark/light)
│   │   └── pages/             # LandingPage, Login, Register, Dashboard, NotFound
│   ├── tailwind.config.js     # fluens-blue #3576C9, fluens-dark-blue #0f2d5a, fadeIn-animatie
│   └── package.json
├── firebase.json              # Hosting-config (public: frontend/build)
├── .firebaserc                # Firebase-project: fluens-7de49
├── README.md / DEVELOPERS.md / ROADMAP.md / CHANGELOG.md
└── fluens_cheatsheet.md / fluens_workflow.md   # Dagelijkse git-workflow
```

## Commando's (altijd vanuit `frontend/`)

```bash
cd frontend
npm install          # eenmalig / na dependency-wijzigingen
npm start            # dev-server op http://localhost:3000
npm test             # Jest in watch-mode (CI=true npm test voor één run)
npm run build        # productie-build naar frontend/build
npm run deploy:test  # handmatig: build + deploy naar Firebase test-channel
npm run deploy:prod  # handmatig: build + firebase deploy (productie)
```

Vereisten: Node 20+, npm 9+, Firebase CLI (alle drie lokaal aanwezig).

## Firebase — let op: twee projecten

- `frontend/src/firebaseConfig.js` wijst naar Firebase-project **`fluens-dev`** → hier draait **Authentication** (gebruikersaccounts).
- `.firebaserc` wijst naar Firebase-project **`fluens-7de49`** → hier draait **Hosting** (test-channel en productie).

Dit is een bestaande inconsistentie/bewuste splitsing — verander dit niet zonder overleg. De API-key in `firebaseConfig.js` staat bewust in de repo (Firebase web-API-keys zijn publiek; beveiliging loopt via Firebase-rules).

## Git-workflow

Branches:

| Branch | Doel |
|:--|:--|
| `develop` | Default branch; alle dagelijkse ontwikkeling, PR-doelwit |
| `test` | Staging; merge vanuit develop → GitHub Actions deployt naar Firebase test-channel |
| `main` | Productie; merge vanuit test → GitHub Actions deployt naar productie-hosting |

Regels (uit DEVELOPERS.md):
- **Nooit direct pushen naar `test` of `main`** — altijd via Pull Requests.
- Feature-branches vanaf `develop`, naamgeving `feature/korte-beschrijving` (kleine letters, koppeltekens).
- PR's klein houden: één feature of fix per PR, gericht op `develop`.
- Taken lopen via GitHub Issues + het Fluens Development Board (repo: `wallieboe/fluens`).

Commit-conventie: `feat:`, `fix:`, `docs:`, `test:`, `chore:`.

## Conventies en aandachtspunten

- **UI-teksten in het Nederlands**, code in het Engels.
- **Dark mode**: class-based via `ThemeContext` (zet `dark` op `<html>`, bewaart keuze in `localStorage`). Geef nieuwe componenten altijd `dark:`-varianten mee plus `transition-colors`.
- **Huisstijlkleuren**: gebruik bij voorkeur de Tailwind-tokens `fluens-blue`/`fluens-dark-blue`; in bestaande code staan ook hardgecodeerde hexwaardes (`#3576C9`, `#285a97`) — niet erg, maar nieuwe code liefst via de tokens.
- **Beveiligde routes**: wikkel ze in `<PrivateRoute>` (redirect naar `/login` indien niet ingelogd).
- **Auth-status**: via `useAuth()` uit `AuthContext` (geeft `currentUser`); thema via `useTheme()`.
- **Versie bumpen**: bij een release zowel `frontend/src/version.js` als de badge in `README.md` en `CHANGELOG.md` bijwerken.
- **Routes**: `/` (landing), `/login`, `/register`, `/dashboard` (beveiligd), `*` (404).
- `.gitignore` is opgemaakt als markdown-document met een codeblock erin; de patronen werken wel, maar regels als ` ``` ` en `---` zijn technisch ruis. Niet "opschonen" zonder te controleren dat alle patronen behouden blijven.

## Testen

- Tests draaien met `npm test` in `frontend/` (`CI=true npm test -- --watchAll=false` voor een eenmalige run).
- Bestaande test: `App.test.js` controleert het versienummer in de footer.
- Nieuwe tests naast het component plaatsen als `*.test.js`, met React Testing Library.
- **Jest + react-router v7**: react-router-dom v7 publiceert een kapot `main`-veld; de Jest 27 van CRA kan het `exports`-veld niet lezen. Daarom staan er `moduleNameMapper`-regels in `frontend/package.json` (voor `react-router-dom`, `react-router` en `react-router/dom`) en een `TextEncoder`/`TextDecoder`-polyfill in `src/setupTests.js`. **Niet verwijderen** — zonder deze fixes draait geen enkele test die App importeert.
- **Async renderen in tests**: `AuthProvider` rendert pas na de eerste `onAuthStateChanged`-callback van Firebase. Gebruik in tests dus `await screen.findByText(...)` in plaats van `getByText` voor alles binnen `<App />`.

## Roadmap (samengevat)

1. **v0.2.0-beta** — UX/stabiliteit: loading-spinners bij login/logout, sessie behouden na refresh (deels al gedaan: 404-pagina bestaat).
2. **v0.3.0** — Scenario Management MVP: scenariolijst op dashboard, "Nieuw scenario"-formulier, CRUD-structuur (nog zonder backend).
3. **v1.0.0** — Productie: Firestore-opslag per gebruiker, toegangscontrole, deploy naar productie.

## Deployment-URL's

- Test: https://fluens-7de49--test-s54lvqc7.web.app
- Productie: nog niet live
