# Portfolio — Bezawit Lulekal

Full-stack portfolio with a React frontend and Node.js/Express backend.

## Local development

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at http://localhost:5173

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs at http://localhost:5000

Copy `.env.example` to `.env` in each folder if you need custom URLs.

---

## Deploy to Render

This repo includes a [`render.yaml`](./render.yaml) blueprint that deploys **two services**:

| Service | Type | Folder |
|---|---|---|
| `portfolio-frontend` | Static Site (Vite/React) | `frontend/` |
| `portfolio-backend` | Web Service (Node/Express) | `backend/` |

### Step 1 — Push to GitHub

Render deploys from Git. Commit and push this repo:

```bash
git add .
git commit -m "Add portfolio app and Render deployment config"
git push origin main
```

### Step 2 — Create Render Blueprint

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click **New +** → **Blueprint**
3. Connect your GitHub account and select this repository
4. Render will detect `render.yaml` and show both services
5. Click **Apply**

Render will:
- Build and deploy the backend API
- Build the frontend with `VITE_API_URL` pointing to the backend
- Set up SPA routing so `/projects`, `/skills`, `/contact` work on refresh

### Step 3 — Wait for deploy

- Backend URL: `https://portfolio-backend.onrender.com`
- Frontend URL: `https://portfolio-frontend.onrender.com`

> **Free tier note:** Render free web services spin down after inactivity. The first request may take ~30 seconds to wake up.

### Manual deploy (alternative)

If you prefer not to use the blueprint:

**Backend (Web Service)**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

**Frontend (Static Site)**
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Add rewrite rule: `/*` → `/index.html`
- Environment variable: `VITE_API_URL` = your backend URL (e.g. `https://portfolio-backend.onrender.com`)

---

## Project structure

```
my_portfolio/
├── frontend/     React + Vite + Tailwind
├── backend/      Express API (contact form)
└── render.yaml   Render deployment blueprint
```
