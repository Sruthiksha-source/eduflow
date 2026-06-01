#import tool BaseSettings from the pydantic_settings package to read .env files
from pydantic_settings import BaseSettings
from pathlib import Path

#finds .env relative to where it lives - flexible
ENV_FILE = Path(__file__).resolve().parent.parent.parent/".env"

class Settings(BaseSettings):
    DATABASE_URL : str      #must exist as str
    SECRET_KEY : str        #must exist as str
    ALGORITHM : str = "HS256"   #has a default so optional in .env
    ACCESS_TOKEN_EXPIRE_MINUTES : int = 30  #has a default
#need to find the file
    class Config:
        env_file = str(ENV_FILE)
#creates an object accessible anywhere in the code - singleton
settings = Settings()