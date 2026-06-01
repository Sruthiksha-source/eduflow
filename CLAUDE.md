# EduFlow — Claude Code Context

## What this project is
A full-stack tutoring management platform that allows 
tutors to manage students, book sessions, generate 
invoices and accept payments.

## Tech Stack
- Backend: FastAPI (Python), SQLAlchemy, PostgreSQL
- Frontend: React + Tailwind CSS (Week 3)
- Auth: JWT tokens
- Payments: Stripe (Week 8)
- Email: SendGrid (Week 9)
- Deployed on: Render (API) + Vercel (Frontend)

## Folder Structure
backend/app/models/   → SQLAlchemy database models
backend/app/routes/   → API endpoints
backend/app/schemas/  → Pydantic request/response shapes
backend/app/core/     → config.py and database.py

## Pattern we follow
Every feature follows this exact order:
1. Model first (database structure)
2. Schema second (data validation)
3. Route third (business logic)

## Commit convention
feat: new feature
fix: bug fix
chore: setup and config
docs: documentation
refactor: restructure

## Rules
- Always explain code before writing it
- Never touch .env files
- Always follow Model → Schema → Route pattern
- Use conventional commits
