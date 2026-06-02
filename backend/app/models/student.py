"""
Model represents every student a tutor is teaching
"""
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship #allows navigation across tables
from sqlalchemy.sql import func
from app.core.database import Base

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index = True)
    tutor_id = Column(Integer, ForeignKey("users.id"), nullable=False) #linked to another table - connects students to tutors
    full_name = Column(String, nullable = False)
    email = Column(String)
    subject = Column(String)
    notes = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default = func.now())

    #define any relationships with this table
    sessions = relationship ("Session", back_populates = "student") #back_populates more explicit - can see the relationship defined on both files
    tutor = relationship ("User", backref="students") #relationship - allows getting the tutors for each student
    #backref - allows two way relationship of students to tutors and vice versa.

