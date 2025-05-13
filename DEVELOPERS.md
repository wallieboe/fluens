# 👨‍💻 Fluens Developer Guide

Welkom bij Fluens!  
Deze handleiding legt uit hoe je het project lokaal opzet, welke workflows we volgen, hoe je correct bijdraagt, en hoe we samenwerken via GitHub Projects.

---

## 🚀 1. Vereisten

- Node.js v20+
- NPM v9+
- Firebase CLI
- Git
- GitHub account met toegang tot Fluens repository

---

## 🛠 2. Project lokaal opzetten

```bash
# Clone de repository
git clone https://github.com/wallieboe/fluens.git

# Ga naar de frontend directory
cd frontend

# Installeer afhankelijkheden
npm install

# Start de lokale ontwikkelserver
npm start
```

De app is bereikbaar op: [http://localhost:3000](http://localhost:3000)

---

## 🌳 3. Git Branch Workflow

We gebruiken een gestandaardiseerde branching flow:

| Branch | Functie |
|:--|:--|
| `develop` | Dagelijkse ontwikkeling |
| `test` | Pre-productie testen |
| `main` | Alleen stabiele productie-releases |

### Nieuwe feature ontwikkelen:

```bash
# Start altijd vanaf de develop branch
git checkout develop
git pull origin develop

# Maak een nieuwe feature branch gebaseerd op het Issue
git checkout -b feature/korte-beschrijving-van-feature
```

**Branch naam regels:**
- Gebruik `feature/` prefix voor nieuwe functionaliteit.
- Kleine letters en koppeltekens (`-`) tussen woorden.
- Hou de naam kort maar duidelijk (bijv. `feature/404-page-not-found`).

---

## 🔁 4. Pull Requests (PR's)

- PR’s worden **altijd** gemaakt van jouw feature branch **naar** `develop`.
- Titel PR = Korte, duidelijke beschrijving.
- Beschrijving PR = Wat je hebt toegevoegd of opgelost.
- Link het PR aan het juiste GitHub Issue en Project Board Card.
- Kleine, overzichtelijke PR’s (focus op één feature of fix per PR).

---

## 📚 5. GitHub Projects (Development Board)

We gebruiken een GitHub Project Board om alle taken te beheren:  
👉 **Fluens Development Board**

### Board structuur:

- **Backlog:** Toekomstige ideeën en wensen
- **To Do (Sprint):** Taken voor deze sprint
- **In Progress:** Waar je actief aan werkt
- **Review / Test:** Taken die wachten op review/test
- **Done:** Afgeronde taken

### Regels:

✅ Elke taak heeft een GitHub Issue.  
✅ Elke Issue is gekoppeld aan een Project Card.  
✅ Tijdens werken:
- Sleep het kaartje naar **In Progress**.
- Koppel je PR aan de juiste kaart.
✅ Na merge:
- Sleep het kaartje naar **Done**.

---

## 📦 Standaard GitHub Workflow voor Nieuwe Taken

1. Start vanuit een bestaand **Issue** op het Project Board.
2. Maak een **feature branch** vanaf `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/korte-beschrijving
   ```
3. Ontwikkel en test lokaal.
4. Commit en push je werk:
   ```bash
   git add .
   git commit -m "feat: korte beschrijving"
   git push origin feature/korte-beschrijving
   ```
5. Maak een Pull Request (PR) naar `develop`.
6. Vul duidelijke titel en omschrijving in.
7. Link de PR aan het juiste Issue en Project Card.
8. Na goedkeuring: Merge de PR.
9. Sleep het Issue naar **Done**.

---

## 🧹 6. Code standaarden

- **Commit messages** structuur:
  - `feat: ...` → Nieuwe feature
  - `fix: ...` → Bug fix
  - `docs: ...` → Documentatie updates
- **Componenten structuur:**
  - Houd componenten klein en leesbaar.
  - Volg Single Responsibility Principle.

---

## 🚀 7. Deployment Process

| Stap | Waar? | Proces |
|:--|:--|:--|
| Merge naar `test` | Firebase Testomgeving | Automatische deploy via GitHub Actions |
| Merge naar `main` (later) | Productieomgeving | Definitieve release |

---

## 📚 8. Documentatie

- **Project overview:** `README.md`
- **Veranderingen per versie:** `CHANGELOG.md`
- **Roadmap en plannen:** `ROADMAP.md`
- **Developer workflow:** `DEVELOPERS.md`

---

## 📢 9. Belangrijke Afspraken

- Geen directe commits naar `test` of `main`.
- Altijd werken via feature branches en Pull Requests.
- PR's blijven klein en overzichtelijk.
- Test altijd je werk lokaal vóór je een PR maakt.
- Elke taak moet een gekoppeld Issue + Project Board kaart hebben.

---

# 👋 Vragen?

Voor hulp of vragen, neem contact op met het Fluens Development Team.
