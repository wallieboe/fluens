# Fluens Workflow

Deze workflow beschrijft hoe je de Fluens webapplicatie correct ontwikkelt, test en uitrolt naar Firebase Hosting.

## 1. Lokale Ontwikkeling

### Start lokale ontwikkelserver

```bash
cd frontend
npm start
```

- Dit start de React app op `http://localhost:3000`.
- Gebruik deze omgeving om nieuwe functionaliteiten te ontwikkelen.

## 2. Testomgeving (Pre-Productie)

### Nieuwe versie naar Testomgeving deployen

```bash
npm run deploy:test
```

Wat gebeurt er:
- Bouwt automatisch een productieversie van de frontend (`npm run build`)
- Deployt de site naar Firebase Hosting Channel `test`
- Test URL voorbeeld: `https://test--fluens.web.app`

Gebruik dit om nieuwe features eerst te testen voordat ze op productie worden gezet.

## 3. Productieomgeving (Live Site)

### Nieuwe versie naar Productie deployen

```bash
npm run deploy:prod
```

Wat gebeurt er:
- Bouwt automatisch een productieversie van de frontend (`npm run build`)
- Deployt de site naar de hoofd Firebase Hosting site
- Live URL voorbeeld: `https://fluens.web.app`

## 4. Workflow Schema

Hieronder een eenvoudig schema van de Fluens ontwikkel- en deployment flow:

```mermaid
graph TD
  A[Ontwikkelen lokaal] --> B[Pushen naar GitHub (optioneel)]
  A --> C[Test build maken]
  C --> D[Testomgeving deployen]
  D --> E[Testen op https://test--fluens.web.app]
  E --> F[Code goedgekeurd?]
  F -- Ja --> G[Production build maken]
  G --> H[Production deployen]
  H --> I[Fluens live op https://fluens.web.app]
  F -- Nee --> A[Code verbeteren]
```

## Beschrijving Stappen

- **A. Ontwikkelen lokaal**: Bouwen van nieuwe features en verbeteringen.
- **B. Pushen naar GitHub**: Opslaan van wijzigingen (optioneel voor samenwerking).
- **C. Test build maken**: `npm run build` lokaal uitvoeren.
- **D. Testomgeving deployen**: `npm run deploy:test`.
- **E. Testen**: Site controleren op test-URL.
- **F. Keuring**: Gaat alles goed? Anders terug naar ontwikkelen.
- **G. Production build maken**: Opnieuw bouwen.
- **H. Production deployen**: `npm run deploy:prod`.
- **I. Fluens live**: Website publiek beschikbaar op de hoofd-URL.

## 5. Extra Scripts

Toegevoegd in `package.json`:

```json
"scripts": {
  "deploy:test": "npm run build && firebase hosting:channel:deploy test",
  "deploy:prod": "npm run build && firebase deploy"
}
```

## 6. Belangrijke Tips

- **Altijd testen op Testomgeving** voor een Production deploy.
- **Gebruik duidelijke commit messages** bij GitHub pushes.
- **Forceer browser refresh** (Cmd+Shift+R) na een deploy om caching te vermijden.
- **Update Test Channel regelmatig** (`firebase hosting:channel:deploy test`) zodat deze actief blijft.

---

# 🚀 Volgende stap

Als je wilt, kunnen we ook een uitgebreidere CI/CD Pipeline documenteren (voor automatisch testen en deployen via GitHub Actions)!

Happy Deploying!
