## eduflow
A platform for independant tutors or small tutoring businesses can manage studetn sessions, track progress and assignments, send invoices etc.

## Project Structure

```
eduflow/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── config.py        # reads .env secrets using Pydantic
│   │   │   └── database.py      # SQLAlchemy engine, session and Base
│   │   ├── models/
│   │   │   ├── __init__.py      # registers all models for SQLAlchemy
│   │   │   ├── user.py          # users table — tutor accounts
│   │   │   ├── student.py       # students table — linked to tutor
│   │   │   ├── session.py       # sessions table — bookings
│   │   │   └── invoice.py       # invoices table — billing
│   │   ├── routes/              # API endpoints (Week 2)
│   │   ├── schemas/             # Pydantic request/response shapes (Week 2)
│   │   ├── __init__.py
│   │   └── main.py              # FastAPI entry point, CORS, table creation
│   ├── .env                     # secrets — never committed to GitHub
│   ├── Procfile                 # tells Render how to start the app
│   ├── requirements.txt         # Python dependencies
│   └── runtime.txt              # Python version for Render
├── frontend/                    # React + Tailwind (Week 3)
├── .gitignore
├── CLAUDE.md                    # project context for Claude Code
└── README.md
```
## Commit conventions used:
This project uses the following conventions:
- feat : new feature
- fix : fixing bugs
- chore : setup and config
- docs : Documentation
- refractor : Code restruction

## Progress Log
- [X] Week 1 - Project Setup, folder structure completed
- [X] Week 1 - FastAPI live with health check endpoints
- [X] Week 1 - PostgreSQL connected and eduflow database made

## Live API
Base URL : https://eduflow-zjfu.onrender.com
Docs : https://eduflow-zjfu.onrender.com/docs
