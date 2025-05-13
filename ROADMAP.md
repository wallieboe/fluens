# 🛤️ Fluens Project Roadmap

Een overzicht van de geplande ontwikkelingsfasen en functies voor Fluens.

---

## 🚀 v0.2.0-beta - Stabiliteit en UX Verbeteringen

**Doel:** Fluens gebruiksvriendelijker maken voor eindgebruikers.

### Features:
- Loading spinner bij login/logout
- 404 Page Not Found pagina
- Stay Logged In functionaliteit (auth sessie behouden na refresh)

**Deadline Suggestie:**  
_Eén week na start v0.2.0-beta ontwikkeling_

---

## 🚀 v0.3.0 - Scenario Management Module (MVP)

**Doel:** Start van echte Fluens functionaliteit: Scenario's beheren.

### Features:
- Dashboard uitbreiden met lijst van (dummy) scenario's
- "Nieuw Scenario" knop en formulierpagina toevoegen
- Voorbereiden van CRUD structuur (nog zonder backend)

**Deadline Suggestie:**  
_Twee weken na afronding v0.2.0-beta_

---

## 🚀 v1.0.0 - Eerste Productieklaar Versie

**Doel:** Fluens live brengen voor echte gebruikers.

### Features:
- Firestore integratie voor scenario opslag per gebruiker
- Auth-gebaseerde toegangscontrole op scenario's
- Deployment naar productie (https://fluens.web.app)
- SSL en caching optimalisaties voor frontend
- (Optioneel) Integratie Firebase Crash Reporting of basic analytics

**Deadline Suggestie:**  
_Twee maanden na projectstart (vanaf v0.1.0-alpha)_

---

## 📚 Release Strategie

| Release | Status | Opmerkingen |
|:--|:--|:--|
| v0.1.0-alpha | ✅ Live | Login, Dashboard, Logout, PrivateRoute |
| v0.2.0-beta | 🚀 Gepland | UX verbeteringen en stabiliteit |
| v0.3.0 | 🚀 Gepland | Scenario Management basisversie |
| v1.0.0 | 🚀 Gepland | Productie-release Fluens MVP |

---

## 📝 Notities

- Alle belangrijke veranderingen worden bijgehouden in `CHANGELOG.md`.
- Versiebeheer wordt gedaan via Git tags (bijv. `v0.2.0-beta`, `v1.0.0`).
- Major nieuwe functies worden vooraf gepland in mini-sprints.

---
