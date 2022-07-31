import React from "react";
import './Header.css'

const Header = () => {

    return (
        <header className="header-container">
            <nav className="menu-list">
                <i className="fa-solid fa-gem"></i>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <a href="">Cart</a>
                </div>
                <a href="">Sign in</a>
            </nav>
        </header>
    );
}

export default Header;