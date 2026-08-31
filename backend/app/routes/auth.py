from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import hash_password, verify_password, create_access_token, get_current_user
from app.models.user import User
from app.schemas.user import UserCreate, UserResponse
from app.schemas.auth import LoginRequest, TokenResponse

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserResponse, status_code=201)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    """
    Register a new user.
    Validates input, hashes password, saves to database.
    Returns user data without password.
    """
    # Check if email already exists
    existing_user = db.query(User).filter(
        User.email == user_data.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Hash the password before saving
    hashed = hash_password(user_data.password)

    # Create new user object
    new_user = User(
        email=user_data.email,
        hashed_password=hashed,
        full_name=user_data.full_name,
        is_tutor = user_data.is_tutor
    )

    # Save to database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.post("/login", response_model=TokenResponse)
def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    """
    Log in an existing user.
    Verifies credentials, returns JWT token.
    """
    # Find user by email
    user = db.query(User).filter(
        User.email == credentials.email
    ).first()

    # Check user exists AND password is correct
    if not user or not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Create JWT token
    access_token = create_access_token(
        data={"sub": str(user.id)}
    )

    return TokenResponse(access_token=access_token)

#create endpoint for get_access_token to test
@router.get("/me", response_model = UserResponse)
def get_me(current_user: User = Depends(get_current_user)): #first meed to run get_current_user function to get the user
    """
    Returns the currently logged in user's data.
    Requires a valid JWT token
    """
    return current_user