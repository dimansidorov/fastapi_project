from typing import List

from fastapi import FastAPI

from models import Trade

app = FastAPI(title='Trading App')

users = [
    {'id': 1, 'first_name': 'Dmitrii', 'last_name': 'Sidorov'},
    {'id': 2, 'first_name': 'Olga', 'last_name': 'Sidorova'},
    {'id': 3, 'first_name': 'Sofia', 'last_name': 'Liuba'},
]

list_of_trades = []


@app.get('/users/')
def get_users():
    return users


@app.get('/users/{user_id}')
def get_user(user_id: int):
    return list(filter(lambda user: user['id'] == user_id, users))[0]


@app.post('/trades/')
def add_post(trades: List[Trade]):
    list_of_trades.extend(trades)
    return {'status': 200, 'data': list_of_trades}
