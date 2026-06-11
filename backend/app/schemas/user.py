"""
User data
"""
from pydantic import BaseModel, EmailStr, field_validator, model_validator #validates email format
from datetime import datetime

class UserCreate(BaseModel):
    """
    Data required to register a new user
    Password confirmed before saving to database
    """
    email : EmailStr
    password : str
    confirm_password : str
    full_name : str

    #need to make sure password is valid
    #1. password == confirm_password
    #2. Password is atleast 8 character
    #3. Password contains atleast one number

    #use pydantic validators to check the password
    @field_validator ("password")
    @classmethod
    def pasword_strength(cls, password): #check values with cls
        if len(password)< 8 :
            raise ValueError ("Password must be atleast 8 characters long")
        if not any (char.isdigit() for char in password):
            raise ValueError("Password must contain atleast one number")
        return password
    

    @model_validator(mode = "after")
    def passwords_match(self):
        if self.password != self.confirm_password :
            raise ValueError("Passwords don't match")
        return self
    
    class Config:
        str_strip_whitespace = True

class UserResponse(BaseModel):
    """
    Data returned after registration or login
    """
    id : int
    email : EmailStr
    full_name : str
    is_tutor : bool
    created_at : datetime

    class Config:
        from_attributes = True