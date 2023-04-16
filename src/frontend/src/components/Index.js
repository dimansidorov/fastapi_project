import React from "react";
import { Link } from "react-router-dom";

const StackItem = ({item}) => {
    return (
        <div className="col stack-item" >
                <img src={item.image}
                    width="50" height="50" alt-text={item.title} className="m-3" />
                <h3 className="m-3">{item.title}</h3>
                <p className="m-3 text-muted">{item.text}</p>
                <a className="mx-3 mb-3 link-secondary" href={item.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" alt-text='chain'
                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                    </svg>
                    About {item.title}
                </a>
            </div>
    )
}

const MainPage = ({ stack }) => {
    return (
        <main className="container my-5">
            <div className="mx-2">
                <h1 className="">Главная страница данного проекта</h1>
                <p className="lead mt-4 text-muted">
                    <strong>
                        Мой пет-проект - это блог, написанный на Flask. Пользователи могут создавать учетные записи, войти в
                        систему и создавать, редактировать и удалять свои записи в блоге. Приложение включает в себя систему
                        аутентификации пользователей и публикацию статей в блоге.
                        Респонсивный дизайн и интуитивно понятный интерфейс делают его простым в использовании.
                        Так же реализованы api-эндпоинты и подключен swagger.
                    </strong>
                </p>
                <Link to='/' className="mt-3 btn btn-outline-info"> Познакомиться с проектом </Link>
            </div>
            <h1 className="my-5">Stack</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {stack.map((item) => <StackItem key={item.id} item={item} />)}
            </div>
        </main>

    );
}

export default MainPage;