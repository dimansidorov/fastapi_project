from datetime import datetime

from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTableUUID
from sqlalchemy import MetaData, Table, Column, String, Integer, ForeignKey, JSON, Uuid, TIMESTAMP, Boolean
from sqlalchemy.orm import mapped_column, Mapped, relationship

from database import Base


class User(SQLAlchemyBaseUserTableUUID, Base):
    __tablename__ = "users"

    id: Uuid = Column(Uuid, primary_key=True)
    username: str = Column(String, nullable=False)
    first_name: str = Column(String, nullable=False)
    last_name: str = Column(String, nullable=False)
    register_at: datetime = Column(TIMESTAMP, default=datetime.utcnow)
    email: Mapped[str] = mapped_column(String(length=320), unique=True, index=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(length=1024), nullable=False)
    is_active: bool = Column(Boolean, default=True, nullable=False)
    is_superuser: bool = Column(Boolean, default=False, nullable=False)
    is_verified: bool = Column(Boolean, default=False, nullable=False)

    operations = relationship('Operation', back_populates='user')

    def __repr__(self):
        return self.id
