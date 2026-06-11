from pydantic import BaseModel, EmailStr

class LoginRequest(BaseModel):
    """
    Data required to log in.
    Email and password only
    """
    email : EmailStr
    password : str

    class Config:
        str_strip_whitespace = True #ensures trailing space isn't an issue

class TokenResponse(BaseModel):
    """
    Returned after successful login, contain JWT token for future requests
    """

    access_token : str
    token_type : str = "bearer" #has default value so we don't need to set it manually.

