## eduflow
A full-stack tutoring management SaaS platform built independently from scratch, designed to help tutors manage their entire tutoring practice in one place. Built with FastAPI (Python) and PostgreSQL on the backend, with a React and Tailwind CSS frontend

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Python, FastAPI. SQLAlchemy, Pydantic v2|
| Database | PostgreSQL, Supabase (cloud hosting) |
| Auth | JWT (python-jose), bcrypt (passlib) |
| Frontend | React, Vite, Tailwind CSS, React Router |
| Deployment | Render(API), Vercel(frontend) |
| Monitoring | UptimeRobot (Keep render alive) |
| Planned | Stripe, SendGrid, Anthropic API (EduBot) |

## Project Structure

```
eduflow/
├── backend/
│ ├── app/
│ │ ├── core/
│ │ │ ├── config.py # reads .env secrets with Pydantic
│ │ │ ├── database.py # SQLAlchemy engine, session, Base
│ │ │ └── security.py # JWT creation, bcrypt hashing,
│ │ │ get_current_user dependency
│ │ ├── models/
│ │ │ ├── user.py # users table — tutor and student accounts
│ │ │ ├── student.py # students table — linked to tutor
│ │ │ ├── session.py # sessions table — bookings
│ │ │ └── invoice.py # invoices table — billing
│ │ ├── routes/
│ │ │ └── auth.py # register, login, /me endpoints
│ │ ├── schemas/
│ │ │ ├── user.py # UserCreate, UserResponse
│ │ │ └── auth.py # LoginRequest, TokenResponse
│ │ └── main.py # FastAPI entry point, CORS,
│ │ Swagger bearer auth, table creation
│ ├── .env # secrets — never committed to GitHub
│ ├── Procfile # tells Render how to start the app
│ ├── requirements.txt # Python dependencies
│ └── runtime.txt # Python version for Render
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── ProtectedRoute.jsx # redirects unauthenticated users
│ │ ├── context/
│ │ │ └── AuthContext.jsx # global auth state, JWT persistence
│ │ ├── pages/
│ │ │ ├── Landing.jsx # public landing page
│ │ │ ├── Login.jsx # login form
│ │ │ ├── Register.jsx # two-step role selection + form
│ │ │ └── Dashboard.jsx # tutor and student dashboards
│ │ ├── services/
│ │ │ └── api.js # all FastAPI calls in one place
│ │ ├── App.jsx # React Router routes
│ │ └── main.jsx # entry point, AuthProvider wrapper
│ └── vite.config.js # Vite + Tailwind CSS v4 config
├── .gitignore
├── CLAUDE.md # project context for AI assistance
└── README.md
```

---

## Key Product Decisions

- **Role-based registration** — users choose Tutor or Student on signup
- **Stage-based learning** — tutors assign structured stages upfront,
  students progress through locked/unlocked content
- **Recurring weekly sessions** — fixed day and time, auto-generated
- **24-hour cancellation policy** — with tutor-configurable fee enforcement
- **Automated payment reminders** — 48hr warning, 24hr due, 2hr final
- **EduBot** (post-launch) — Anthropic API AI assistant, contextually
  aware of each student's curriculum, stage and learning history

---

## Security Implementation

- JWT tokens signed with HS256 using SECRET_KEY
- Passwords hashed with bcrypt (passlib, pinned to 4.0.1)
- Pydantic v2 validates all incoming API data
- SQLAlchemy ORM prevents SQL injection
- Row Level Security enabled on all Supabase tables
- CORS restricted to known frontend origins
- Secrets managed via environment variables — never in code

---

## Setup (Local Development)

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Create backend/.env with:
# DATABASE_URL=postgresql://...
# SECRET_KEY=your-secret-key
# ALGORITHM=HS256
# ACCESS_TOKEN_EXPIRE_MINUTES=30

uvicorn app.main:app --reload --port 8001
```

### Frontend
```bash
cd frontend
npm install

# Create frontend/.env with:
# VITE_API_URL=http://localhost:8001

npm run dev
```

---

## Commit conventions used:
This project uses the following conventions:
- feat : new feature
- fix : fixing bugs
- chore : setup and config
- docs : Documentation
- refractor : Code restruction

## Progress Log
- [x] Week 1 - Project Setup, folder structure completed
- [x] Week 1 - FastAPI live with health check endpoints
- [x] Week 1 - PostgreSQL connected and eduflow database made
- [x] Week 1 — All 4 models created and tables live in PostgreSQL
- [x] Week 1 — Deployed to Render with live URL
- [x] Week 2 — Pydantic schemas with input validation
- [x] Week 2 — bcrypt password hashing implemented
- [x] Week 2 — JWT authentication working (register + login)
- [x] Week 2 — Migrated database from Render to Supabase
- [x] Week 2 — Protected endpoints with get_current_user
- [x] Week 2 — Swagger bearer auth configured
- [x] Week 2 — Database migrated from Render to Supabase
- [x] Week 2 — Row Level Security enabled on all Supabase tables

- [x] Week 3 — React app initialised with Vite and Tailwind CSS v4
- [x] Week 3 — React Router with protected routes
- [x] Week 3 — AuthContext with persistent JWT auth state
- [x] Week 3 — Login page with form validation and error handling
- [x] Week 3 — Register page with two-step role selection (Tutor/Student)
- [x] Week 3 — Tutor dashboard with stats and quick actions
- [x] Week 3 — Student dashboard with stage progress and tutor link
- [x] Week 3 — Landing page placeholder
- [x] Week 3 — Frontend deployed to Vercel
- [x] Week 3 — Full auth flow working on live URL

### In Progress

- [ ] Landing Page — full design from Figma (priority for applications)
- [ ] Week 4 — Student CRUD routes (POST, GET, PUT, DELETE /students)
- [ ] Week 4 — Student schemas (StudentCreate, StudentResponse)
- [ ] Week 4 — Student list page in React
- [ ] Week 4 — Add student form
- [ ] Week 4 — Dashboard stats with real data

### Upcoming

- [ ] Week 5 — Stage and Assignment models
- [ ] Week 5 — Stage-based learning progression system
- [ ] Week 5 — Gamified level system for students
- [ ] Week 5 — Student links to tutor flow
- [ ] Week 6 — Recurring session booking with calendar
- [ ] Week 6 — 24-hour cancellation policy
- [ ] Week 7 — Auto-generated PDF invoice system
- [ ] Week 8 — Stripe payment integration
- [ ] Week 8 — Pre-session payment flow
- [ ] Week 9 — SendGrid email reminders
- [ ] Week 9 — Analytics dashboard with Recharts
- [ ] Week 10 — Mobile responsive design pass
- [ ] Week 10 — Custom domain
- [ ] Week 10 — Demo video and full README with screenshots
- [ ] Post-launch — EduBot AI learning assistant (Anthropic API)

---

## Deployment

| Service | Purpose | URL |
|---|---|---|
| Render | FastAPI backend | https://eduflow-zjfu.onrender.com |
| Vercel | React frontend | https://eduflow-xi-ten.vercel.app |
| Supabase | PostgreSQL database | Pooler connection (eu-west-2) |

---

*Built by Sruthiksha Ananth — Computer Science, University of York*
*Placement year portfolio project — 2025/2026*
## Live API
Base URL : https://eduflow-zjfu.onrender.com
Docs : https://eduflow-zjfu.onrender.com/docs
