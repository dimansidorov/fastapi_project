from decimal import Decimal
from enum import Enum

from fastapi import Depends
from pydantic import BaseModel
from sqlalchemy import Uuid

from auth.base_config import current_user
from auth.utils import get_user_db


class OperationType(str, Enum):
    payroll_tax = 'Удержание НДФЛ по купонам'
    commission = 'Удержание комиссии за операцию'
    coupon = 'Выплата купонов'
    cashing_out = 'Вывод денежных средств'
    cashing_in = 'Пополнение баланса'
    sale_of_securities = 'Продажа ценных бумаг'
    purchase_of_securities = 'Покупка ценных бумаг'


class OperationCreate(BaseModel):
    quantity: Decimal = Decimal('1.0')
    figi: str
    instrument_type: str
    type: OperationType
