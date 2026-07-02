from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.core.config import settings
from fastapi.security import OAuth2PasswordBearer #tells FastAPI ro expect requests including Beare
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db


oauth2_scheme = OAuth2PasswordBearer(tokenUrl = "auth/login") #/docs can see where to send users to get a token. 

#set up the bcrypt tool, deprecated allows any replacements to be upgraded automatically in passlib
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
    

def get_current_user(
        token : str = Depends(oauth2_scheme),   #extracts the token from the authorization header
        db : Session = Depends (get_db) #opens a database session
):
    """
    Decodes JWT token, finds the user in the database.
    Raises 401 if token is invalid, expired or user not found
    """
    #defined the exception
    credentials_exception = HTTPException(
        status_code= 401,
        detail = "Could not validate credentials",
        headers = {"WWW-Authenticate":"Bearer"}
    )

    payload = decode_access_token(token)    #if token is invalid the decode_access_token method will return None
    if payload is None:
        raise credentials_exception
    
    user_id = payload.get("sub")    #auth.py - created  token with sub - if missing reject
    if user_id is None:
        raise credentials_exception
    
    from app.models.user import User

    #Need to find user but need to check against the live database - can't trust the token alone
    user = db.query(User).filter(User.id == int(user_id)).first()

    if user is None:
        raise credentials_exception
    
    return user #This user object gets automatically injected into any route that uses get_current_user as a dependency
