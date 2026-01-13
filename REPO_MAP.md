# Repo Map: whattodo (Sideways Compass)

## Purpose and scope
Client-side questionnaire that maps trait dimensions to occupations and hobbies.

## Quickstart commands
- Open `index.html` in a browser, or
- `python3 -m http.server` and open `http://localhost:8000`

## Top-level map
- `index.html` - app shell and layout.
- `styles.css` - styling.
- `app.js` - scoring and UI flow.
- `data.js` - questions, traits, and catalog data.
- `DECISIONS.md` - product decisions.
- `README.md` - run instructions.

## Key entry points
- `index.html` - app bootstrap.
- `app.js` - main logic.
- `data.js` - source data.

## Core flows and data movement
- User answers -> `app.js` computes trait scores -> matches occupations/hobbies -> renders results.

## External integrations
- None; all logic is client-side.

## Configuration and deployment
- No build pipeline; static hosting only.

## Common workflows (build/test/release)
- `python3 -m http.server`

## Read-next list
- `README.md`
- `app.js`
- `data.js`
- `styles.css`
- `DECISIONS.md`

## Unknowns and follow-ups
- No automated tests or CI described.
