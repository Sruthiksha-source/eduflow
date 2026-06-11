from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core.config import settings

#set up the bycrypt tool, deprecated allows any replacements to be upgraded automatically in passlib
pwd_context = CryptContext(schemes = ["bcrypt"], deprecated = "auto")

def hash_password(password: str) -> str:
    """
    Converts plain text into hash (bcrypt - one way)
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
    Creates a signed JWT token containing user data. Token expires after specified value of time
    """
    to_encode = data.copy() #modify the copy not original
    #used UTC allowing universal time and so uses timezone aware datetimes when checking expiry
    expire = datetime.now(timezone.utc) + timedelta(
        minutes = settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    #add expiry time to token payload
    to_encode.update({"exp":expire})
    #encode the token using algorithm and secret_key
    return jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm = settings.ALGORITHM
    )

def decode_access_token(token : str) -> dict:
    """
    Decodes and verifies a JWT token. Raises JWTError if token is invalid or expired
    """
    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )
        return payload
    except JWTError: #if anything is wrong , JWT error is raised and return None
        return None
    
