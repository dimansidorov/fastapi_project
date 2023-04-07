import smtplib
from email.message import EmailMessage

from celery import Celery
from fastapi import Depends
from pydantic import EmailStr

from auth.base_config import current_user
from config import GOOGLE_APP_USER, GOOGLE_APP_PASSWORD

GOOGLE_APP_HOST = "smtp.gmail.com"
GOOGLE_APP_PORT = 465

celery = Celery('tasks', broker='redis://localhost:6379')


def get_email_template(username: str, user_email: EmailStr) -> EmailMessage:
    email = EmailMessage()
    email['Subject'] = 'Some Topic'
    email['From'] = GOOGLE_APP_USER
    email['TO'] = user_email

    email.set_content(
        '<div>'
        f'<h1 style="color: red;">Здравствуйте, {username}, а вот и ваш отчет. Зацените 😊</h1>',
        subtype='html'
    )

    return email


@celery.task
def send_email(username: str, user_email: EmailStr):
    email = get_email_template(username, user_email)
    with smtplib.SMTP_SSL(GOOGLE_APP_HOST, GOOGLE_APP_PORT) as service:
        service.login(GOOGLE_APP_USER, GOOGLE_APP_PASSWORD)
        service.send_message(email)
