"""
This python file is made to :
--> import CORS from the FastAPI ap to allow React frontend to communicate with API, creates daravases tables
--> Register all routes
--> Create database tables on startups
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #imported the CORS software
from app.core.database import engine, Base

#Imported all models so SQLAlcehmy registers it
from app.models.user import User
from app.models.student import Student
from app.models.session import Session
from app.models.invoice import Invoice

Base.metadata.create_all(bind=engine)

app = FastAPI(title = "Eduflow API", version = "1.0.0")

app.add_middleware (CORSMiddleware, allow_origins = ["http://localhost:5173"], allow_credentials = True, allow_methods=["*"], allow_headers = ["*"],)

@app.get("/")
def root():
    return {"message": "Eduflow API is running"}

@app.get("/health")
def health():
    return{"status":"ok"}




