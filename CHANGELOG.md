# 📜 Fluens Changelog

Alle belangrijke wijzigingen en versies van het Fluens project.

---

## [0.1.0-alpha] - 2024-05-13

### ✨ Added
- Eerste implementatie van Firebase Authentication (Email/Password login).
- Login functionaliteit: gebruikers kunnen inloggen via e-mail en wachtwoord.
- Redirect naar Dashboard na succesvolle login.
- Dashboard pagina toont ingelogde gebruiker (e-mailadres zichtbaar).
- Logout functionaliteit toegevoegd.
- PrivateRoute beveiliging: alleen ingelogde gebruikers mogen `/dashboard` bezoeken.
- Foutafhandeling bij login:
  - User not found
  - Wrong password
  - Invalid email format
  - Too many login attempts
- Basis logging verbeterd (`console.log` voor success / errors).
- Versiebeheer toegevoegd (`version.js`), zichtbaar in de footer.

### 🛠️ Changed
- App structuur aangepast naar professioneel gebruik van `Router`, `AuthProvider`, `PrivateRoute`.

### 📦 Deployment
- Setup handmatige deployment naar Firebase Testomgeving.
- GitHub Actions workflow verbeterd voor automatische builds bij push naar `test`.

---

## To-Do for next releases:
- Loading spinners bij login voor betere gebruikerservaring.
- 404 Page Not Found voor niet-bestaande routes.
- Sessiebeheer: automatisch ingelogd blijven bij pagina refresh.
- Eventueel: automatische deployments gekoppeld aan Git tags.

---
