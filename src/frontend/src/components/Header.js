import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: { 'url': '/', 'title': 'About Project' },
            creator: { 'url': '/about', 'title': 'About Author' },
            login: { 'url': '/login', 'title': 'Sign in' },
            signup: {
                'url': '/register', title: 'Sign up'
            }
        }

    }

    

    render() {
            return (
                <div className="header">
                    <div className="container my-3 d-none d-md-block">
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="lead">FastAPI</h1>
                            <div className="">
                                <nav className="menu d-flex align-items-center">
                                    <a className="link-body-emphasis m-2 mx-4" aria-current="page"
                                        href={this.state.index['url']}>
                                        {this.state.index['title']}
                                    </a>
                                    <a className="link-body-emphasis m-2 mx-4" aria-current="page"
                                        href={this.state.creator['url']}>
                                        {this.state.creator['title']}
                                    </a>

                                </nav>
                            </div>
                            <div className="text-end m-0">

                                <a className="col btn btn-outline-success" href={this.state.signup['url']}>
                                    {this.state.signup['title']}
                                </a>
                            </div>
                        </div>


                    </div>
                    <div className="container my-3 d-sm-block d-md-none">
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="btn btn-outline-success" href={this.state.signup['url']}>
                                {this.state.signup['title']}
                            </a>
                            <h1 className="lead">FastAPI</h1>
                            <nav className="nav-item dropdown d-flex align-items-center menu">
                                <button className="navbar-toggler nav-link dropdown-toggle m-2 mx-4" type="button" data-bs-toggle="dropdown" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </button>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item link-body-emphasis" href={this.state.index['url']}>
                                                {this.state.index['title']}</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item link-body-emphasis" href={this.state.creator['url']}>
                                                {this.state.creator['title']}</a>
                                        </li>

                                    </ul>
                            </nav>
                        </div>

                    </div>

                </div>

            );
        }

}


export default Header;
