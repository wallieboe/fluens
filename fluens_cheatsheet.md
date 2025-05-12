# Fluens Daily Workflow Cheat Sheet

## Start development
```bash
git checkout develop
git pull origin develop
```

## After making changes
```bash
git add .
git commit -m "feat: your feature description"
git push origin develop
```

## Deploy to Test Environment
```bash
git checkout test
git merge develop
git push origin test
```

## Deploy to Production Environment
```bash
git checkout main
git merge test
git push origin main
```

## Useful Links

- GitHub Actions: https://github.com/wallieboe/fluens/actions
- Fluens Test: https://fluens-7de49--test-s54lvqc7.web.app

## Important

- Always work on `develop` first.
- Never push directly to `main`.
- Always create Pull Requests for merges into `test` and `main`.
- Keep commit messages clean and consistent.
