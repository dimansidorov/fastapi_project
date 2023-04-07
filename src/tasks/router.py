from fastapi import APIRouter, Depends

from auth.base_config import current_user

from .tasks import send_email

router = APIRouter(prefix='/report', tags=['Tasks'])


@router.get('/send_report')
def get_report(user=Depends(current_user)):
    send_email.delay(user.username, user.email)
    return {
        'status': 200,
        'data': 'Письмо отправлено',
        'details': None
    }