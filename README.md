# whattodo (Sideways Compass)

Lightweight, client-side questionnaire that maps playful questions to trait dimensions and returns three occupations and three hobbies with explanations.

## Purpose
- Offer a lightweight, client-side questionnaire that connects traits to occupations and hobbies.

## Goals
- Keep the experience no-build and easy to run locally.
- Provide clear, playful explanations for each match.
- Maintain curated trait data and scoring logic in plain JS.

## Highest-Impact Next Step
- Add shareable results via URL parameters so users can revisit and share outcomes.

## Run locally

Option 1 (quick):
- Open `index.html` in a browser.

Option 2 (recommended for consistent loading):
- Run `python3 -m http.server` in this directory and open `http://localhost:8000`.

## Structure

- `index.html`: app shell and layout
- `styles.css`: visual design
- `data.js`: questions, traits, and catalogs
- `app.js`: scoring, matching, and UI flow
- `DECISIONS.md`: recorded decisions

## Notes

- All logic runs in the browser; no backend required.
- Catalogs include 60 occupations and 60 hobbies with trait vectors and cluster tags.
- For PR status and review flow expectations, see `skills/agent-process-contract.md`.
