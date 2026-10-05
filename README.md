# NeuroLearn AI

NeuroLearn AI is a complete browser-run e-learning + research platform built with Next.js. It includes:

- Student learning dashboard
- Course catalog and detail pages
- AI tutor assistant
- Research workspace and literature tracking
- Admin analytics
- Responsive UI for browser use
- Mock API routes for realistic application behavior

## Tech stack

- Next.js 14
- React 18
- TypeScript
- CSS Modules via global CSS

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Open your browser at:

```text
http://localhost:3000
```

## Main routes

- `/` - landing page
- `/login` - sign-in page
- `/courses` - course catalog
- `/courses/[id]` - course detail page
- `/dashboard` - learner dashboard
- `/research` - research workspace
- `/admin` - admin control center

## API routes

- `/api/health`
- `/api/courses`
- `/api/courses/[id]`
- `/api/tutor`
- `/api/research`
- `/api/dashboard`
- `/api/auth/login`

## Notes

This project is designed to be easy to run in a browser without external services. The AI tutor uses built-in logic and can be swapped to an LLM API later if you add an OpenAI or other AI key.

## Download zip

You can download this repository as a ZIP from the GitHub repo page. Once on your machine, run:

```bash
npm install
npm run dev
```
