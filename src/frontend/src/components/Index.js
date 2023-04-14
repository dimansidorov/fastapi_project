import React from "react";

function MainPage() {
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
                        <a href="" className="mt-3 btn btn-outline-info">Познакомиться с проектом</a>
            </div>
            <h1 className="my-5">Stack</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="50"
                                    height="50" alt-text='Python'
                                    className="m-3" />
                                <h3 className="m-3">Python</h3>
                                <p className="m-3 text-muted">Python is a programming language that lets you work quickly
                                    and integrate systems more effectively.</p>
                                <a className="mx-3 mb-3 link-secondary" href="https://www.python.org/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About Python
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" width="50"
                                    height="50"
                                    className="m-3" />
                                <h3 className="m-3">FastAPI</h3>
                                <p className="m-3 text-muted">
                                    FastAPI is modern, fast, web framework for building APIs with Python 3.7+ based on standard Python type hints.
                                </p>
                                <a className="mx-3 mb-3 link-secondary" href="https://fastapi.tiangolo.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About FastAPI
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-plain.svg" width="50"
                                    height="50"
                                    className="m-3" />
                                <h3 className="m-3">SQLAlchemy</h3>
                                <p className="m-3 text-muted">
                                    SQLAlchemy is Python SQL toolkit and ORM that gives application developers the full power and flexibility of SQL.
                                </p>
                                <a className="mx-3 mb-3 link-secondary" href="https://www.sqlalchemy.org/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About SQLAlchemy
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
                                    width="50" height="50"
                                    className="m-3" />
                                <h3 className="m-3">PostgreSQL</h3>
                                <p className="m-3 text-muted">
                                    PostgreSQL is one of the most popular, powerful, open source object-relational database system.
                                </p>
                                <a className="mx-3 mb-3 link-secondary" href="https://www.postgresql.org/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About PostgreSQl
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" width="50"
                                    height="50"
                                    className="m-3" />
                                <h3 className="m-3">Redis</h3>
                                <p className="m-3 text-muted">
                                    Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.
                                </p>
                                <a className="mx-3 mb-3 link-secondary" href="https://redis.io/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About Redis
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="stack-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="50"
                                    height="50"
                                    className="m-3" />
                                <h3 className="m-3">Docker</h3>
                                <p className="m-3 text-muted">
                                    Docker is a platform designed to help developers build, share, and run modern applications.
                                </p>
                                <a className="mx-3 mb-3 link-secondary" href="https://www.docker.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                                    </svg>
                                    About Docker
                                </a>
                            </div>
                        </div>
            </div>
        </main>
       );
}

export default MainPage;