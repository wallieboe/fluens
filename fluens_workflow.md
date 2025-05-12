# Fluens Development Workflow

## Git Branch Strategy

- `develop`: All feature work and initial testing.
- `test`: Stable features tested before production.
- `main`: Only fully approved and validated code.

## Standard Development Flow

```bash
# Start on develop
git checkout develop

# Make changes
git add .
git commit -m "feat: add new feature"
git push origin develop

# Merge develop into test for staging
git checkout test
git merge develop
git push origin test

# Final merge to main after validation
git checkout main
git merge test
git push origin main
```

## Commit Message Convention

- `feat: ...` → New feature
- `fix: ...` → Bug fix
- `docs: ...` → Documentation changes
- `test: ...` → Adding or updating tests
- `chore: ...` → Maintenance tasks (e.g. updating dependencies)

## Pull Request Rules

- No direct push to `test` or `main`.
- Pull Request required to merge into `test`.
- At least one approval needed to merge into `main`.

## Deployment Process

- **From test branch:**
  - Push triggers GitHub Actions.
  - Action builds the React app.
  - Action deploys to Firebase Hosting Test Channel.

- **From main branch:**
  - Push triggers GitHub Actions.
  - Action deploys to production hosting.
