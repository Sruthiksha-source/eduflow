"""
Represents the transactions paid for each sessions importing information from the student.py, user.py and sessions.py table.
Sent from tutor to student
Dependant on the status of the sessions for the status of the payment with Date and time.
Tracks the amount owed, payment status and timestamps
Status Lifecycle : unpaid --> paid
"""
from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func #able to access SQL functions in Python
from app.core.database import Base

class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(Integer, primary_key = True, index = True)
    tutor_id = Column(Integer, ForeignKey("users.id"), nullable = False)
    student_id = Column(Integer, ForeignKey("students.id"), nullable = False)
    session_id = Column(Integer, ForeignKey("sessions.id"), nullable = False)
    amount = Column(Float, nullable = False) #amount to be paid - needs to be an amount for an invoice
    status = Column(String, default = "unpaid") #can be null since it could have not been paid / default is unpaid
    issued_at = Column(DateTime(timezone = True), server_default = func.now())
    paid_at = Column(DateTime(timezone = True), nullable = True)

    #Relationships defined
    tutor = relationship("User", backref="invoices")
    student = relationship("Student", backref="invoices")
    session = relationship("Session", backref="invoices")
