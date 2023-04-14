import React from "react";

function Footer() {
    return (
        <div className="footer container mt-4">
            <span className="mb-md-0 icon"> © 2023 Project by Dmitrii Sidorov </span>
            <div id="socials" className="footer">
                <a className="nav-link icon" href="https://www.linkedin.com/in/dmitrysidorov/">
                    <img src="../static/linkedin.svg" width="30" height="30"/>
                </a>
                <a className="nav-link icon" href="https://t.me/dimansidorov">
                    <img src="../static/telegram.svg" width="30" height="30"/>
                </a>
                <a className="nav-link icon" href="https://www.github.com/dimansidorov/">
                    <img src="../static/github.svg"  width="30" height="30"/>
                </a>
                <a className="nav-link icon" href="https://www.instagram.com/dimansidorov/">
                    <img src="../static/instagram.svg" width="30" height="30"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;