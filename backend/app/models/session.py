"""
Represents a single tutoring session booked between tutor and student.
Stores when a session is schedule, length, hourly rate and the status

"""
from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base

class Session(Base):
    __tablename__= "sessions"

    id = Column(Integer, primary_key = True, index = True)
    tutor_id = Column(Integer, ForeignKey("users.id"), nullable = False) #foreign key - links back to User
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False) #foreign key - links back to Student
    scheduled_at = Column(DateTime(timezone=True), nullable = False) #time required to book
    duration_minutes = Column(Integer, default = 60) #default of 60 minutes
    hourly_rate = Column(Float, default = 0.0)
    status = Column(String, default = "scheduled") #tracks the lfecycle of the session - scheduled, completed and cancelled
    notes = Column(String)
    created_at = Column(DateTime(timezone=True), server_default = func.now())

    #define the relationships of the foreign keys
    tutor = relationship("User", backref = "sessions")
    student = relationship("Student", back_populates="sessions")
    

