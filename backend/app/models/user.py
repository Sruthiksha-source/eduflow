"""
This model is for the User and every model will link back to this.
"""
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func #gives access to SQL functions - used for func.now()
from app.core.database import Base #from database.py

class User(Base): #registers as a table from Base
    __tablename__ = "users"

    id = Column(Integer, primary_key = True, index = True) #ID is the primary key
    email = Column(String, unique = True, index = True, nullable = False) #2 users cannot have the same email, using index for fast lookups
    hashed_password = Column(String, nullable = False) #store hashed for security purposes
    full_name = Column(String)
    is_tutor = Column(Boolean, default = True) #most users signing up will most likely be tutors
    is_active = Column(Boolean, default = True) #Allows deactivation without deletion of accounts
    created_at = Column(DateTime(timezone=True), server_default = func.now()) #stores timezone info - PostgreSQL sets this to current time