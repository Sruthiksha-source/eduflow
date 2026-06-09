from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core.config import settings

pwd_context = CryptContext(schemes = ["bycrypt"], deprecated = "auto")

def hash_password(password: str) -> str:
    """
    Converts plain text into hash (bycrypt - one way)
    """
    return pwd_context.hash(password)

def verify_password(plain_password : str, hashed_password : str) -> bool:
    """
    Checks plain text password against stored hash
    Rturns True if match otherwise False
    """
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data : dict) -> str:
    """
    Creates a signed JWT token containing user data
    """