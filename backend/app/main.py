"""
This python file is made to :
--> import CORS from the FastAPI ap to allow React frontend to communicate with API, creates daravases tables
--> Register all routes
--> Create database tables on startups
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #imported the CORS software
from fastapi.security import HTTPBearer
from app.core.database import engine, Base
from fastapi.openapi.utils import get_openapi

#Imported all models so SQLAlcehmy registers it
from app.models.user import User
from app.models.student import Student
from app.models.session import Session
from app.models.invoice import Invoice
from app.routes.auth import router as auth_router


Base.metadata.create_all(bind=engine)
security = HTTPBearer()

app = FastAPI(title="EduFlow API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

#Adds a proper BearerAuth security scheme to /docs
def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="EduFlow API",
        version="1.0.0",
        routes=app.routes,
    )
    openapi_schema["components"]["securitySchemes"]={
        "BearerAuth":{
            "type": "http",
            "scheme": "bearer",
            "bearerFromat": "JWT",
        }
    }
    openapi_schema["security"] = [{"BearerAuth": []}]
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

@app.get("/")
def root():
    return {"message": "Eduflow API is running"}

@app.get("/health")
def health():
    return{"status":"ok"}




