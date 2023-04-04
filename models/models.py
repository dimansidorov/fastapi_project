from datetime import datetime

from sqlalchemy import MetaData, Table, Column, String, Integer, ForeignKey, JSON, Uuid, TIMESTAMP

metadata = MetaData()

roles = Table(
    'roles',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String, nullable=False),
    Column('permissions', JSON),
)

users = Table(
    'users',
    metadata,
    Column('id', Uuid, primary_key=True),
    Column('username', String, nullable=False),
    Column('first_name', String, nullable=False),
    Column('last_name', String, nullable=False),
    Column('email', String, nullable=False),
    Column('password', String, nullable=False),
    Column('register_at', TIMESTAMP, default=datetime.utcnow),
    Column('role', Integer, ForeignKey('roles.id'))
)
