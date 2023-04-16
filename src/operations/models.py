from datetime import datetime

from sqlalchemy import Table, Column, Integer, String, MetaData, TIMESTAMP, Uuid, ForeignKey, DECIMAL
from sqlalchemy.orm import relationship

from database import Base


class Operation(Base):
    __tablename__ = "operations"

    id: int = Column(Integer, primary_key=True)
    quantity: str = Column(DECIMAL, default='1.0')
    figi: str = Column(String)
    instrument_type: str = Column(String, nullable=True)
    date: datetime = Column(TIMESTAMP, default=datetime.utcnow())
    type: str = Column(String)
    user_id: Uuid = Column(ForeignKey('users.id'))

    user = relationship('User', back_populates='operations')



