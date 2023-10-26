# Repro Eslint Knip Monorepo


This is a reproduction for a knip issue regarding eslint and monorepos.

## Steps to reproduce

1. Clone this repo
2. Run `yarn` in the root of the repo
3. Run `yarn knip` in the root of the repo
4. See the error

```
yarn knip
Unresolved imports (1)
FULL-PATH/repro-eslint-knip-monorepo/.eslintrc.json  apps/repro-eslint-knip-monorepo/.eslintrc.json
```

However, the file correctly exists