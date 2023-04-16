from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession

from auth.base_config import current_user
from auth.models import User
from database import get_async_session
from operations.models import Operation
from operations.schemas import OperationCreate

router = APIRouter(
    prefix='/operations',
    tags=['Operations']
)


@router.get("/", name='operations')
async def get_operations(operation_type: str,
                                  user: User = Depends(current_user),
                                  session: AsyncSession = Depends(get_async_session)):
    try:
        query = Operation.query.filter(type=operation_type).one_or_none()
        result = await session.execute(query)
        return {
            'status': 'success',
            'data': result.all(),
            'details': None
        }
    except Exception as err:
        raise HTTPException(status_code=500, detail={
            'status': err,
            'data': type(err),
            'details': None
        })


@router.post("/add_operation")
async def add_specific_operations(new_operation: OperationCreate, user: User = Depends(current_user), session: AsyncSession = Depends(get_async_session)):
    try:
        new_operation = new_operation.dict()
        new_operation['user_id'] = user.id
        statement = insert(Operation).values(**new_operation)
        # print(*statement)
        await session.execute(statement)
        await session.commit()
        return {"status": "success"}
    except Exception as err:
        raise HTTPException(status_code=500, detail={
            'status': err,
            'data': type(err),
            'details': None
        })

# @router.get("/{id}")
# async def get_operation(id, session: AsyncSession = Depends(get_async_session)):
#     operation = Operation()
#     await session.execute(stmt)
#     await session.commit()
#     return {"status": "success"}