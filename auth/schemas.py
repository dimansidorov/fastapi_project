import uuid
from typing import Optional

from fastapi_users import schemas
from pydantic import EmailStr
from sqlalchemy import Uuid


class UserRead(schemas.BaseUser[uuid.UUID]):
    username: str
    first_name: str
    last_name: str
    # role_id: int


class UserCreate(schemas.BaseUserCreate):
    username: str
    first_name: str
    last_name: str
    role_id: int



class UserUpdate(schemas.BaseUserUpdate):
    pass
