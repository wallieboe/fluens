# 👨‍💻 Fluens Developer Guide

Welkom bij Fluens!  
Deze handleiding legt uit hoe je het Fluens project lokaal opzet, welke workflows we volgen, hoe je correct bijdraagt, en hoe we samenwerken via GitHub Projects.

---

## 🚀 1. Vereisten

- Node.js v20+
- NPM v9+
- Firebase CLI
- Git
- Een GitHub account
- Toegang tot de Fluens repository

---

## 🛠 2. Project lokaal opzetten

```bash
# Clone de repository
git clone https://github.com/wallieboe/fluens.git

# Ga naar de frontend directory
cd frontend

# Installeer alle afhankelijkheden
npm install

# Start de lokale ontwikkelserver
npm start
```

De app is bereikbaar op: [http://localhost:3000](http://localhost:3000)

---

## 🌳 3. Branch Workflow

We gebruiken een standaard Git branching flow:

| Branch | Functie |
|:--|:--|
| `develop` | Dagelijkse ontwikkeling |
| `test` | Pre-productie testen |
| `main` | Alleen stabiele productie-releases |

### Nieuwe feature ontwikkelen:

```bash
# Maak een nieuwe feature branch vanaf develop
git checkout develop
git pull origin develop
git checkout -b feature/jouw-feature-naam

# Ontwikkel je feature
# Commit regelmatig:
git add .
git commit -m "feat: korte uitleg over feature"

# Push naar je eigen feature branch
git push origin feature/jouw-feature-naam
```

---

## 🔁 4. Pull Requests (PR's)

- PR's worden **altijd gedaan naar de `develop` branch**.
- Voeg duidelijke beschrijving toe bij je PR.
- Link de PR aan de juiste GitHub Project Card (zie onder).
- Laat minimaal 1 andere developer reviewen voor merging.

---

## 📚 5. GitHub Projects (Development Board)

We gebruiken een GitHub Project Board om alle ontwikkeling te organiseren:  
**👉 Fluens Development Board**

### Kolommen structuur:
- **Backlog:** Toekomstige ideeën / wensen
- **To Do (Sprint):** Taken voor deze sprint
- **In Progress:** Waar je actief aan werkt
- **Review / Test:** Tasks die wachten op review/test
- **Done:** Voltooide taken

### Regels voor werken met Project Board:

✅ Elke feature/bug moet een GitHub Issue hebben.  
✅ Elke Issue wordt gekoppeld aan een **Project Card**.  
✅ Als je aan iets werkt:
- Sleep de kaart naar **In Progress**.
- Bij PR: Link je PR aan de juiste kaart.

✅ Bij afronden:
- Na merge naar develop, sleep je de kaart naar **Done**.

---

## 🧹 6. Code standaarden

- Commit messages:
  - `feat: ...` voor nieuwe features
  - `fix: ...` voor bug fixes
  - `docs: ...` voor documentatie aanpassingen
- Schrijf duidelijke, leesbare componenten.
- Houd componenten klein en single-responsibility.

---

## 🚀 7. Deployment Proces

| Stap | Waar? | Wat? |
|:--|:--|:--|
| Merge naar `test` | Testomgeving | Automatische Firebase deploy |
| Merge naar `main` (later) | Productieomgeving | Volledige productie release |

---

## 📚 8. Documentatie

- Algemene projectinformatie → `README.md`
- Versiegeschiedenis → `CHANGELOG.md`
- Toekomstplanning → `ROADMAP.md`
- Developer onboarding guide → `DEVELOPERS.md`

---

## 📢 9. Belangrijke Afspraken

- Geen directe commits naar `test` of `main`.
- Altijd werken via feature branches en PR’s.
- Kleine, duidelijke PR’s (maximaal één feature per PR).
- Test altijd lokaal voor je een PR maakt.
- Koppel elke taak/feature aan een kaart in de Project Board.

---

# 👋 Vragen?

Bij vragen of problemen: neem contact op met het Fluens Development Team.
