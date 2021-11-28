import { useState } from 'react';
import { Link } from 'react-router-dom';
import hamMenu from "../images/menu_white.png";
import logo from '../images/pho_icon_white.png';
import logo_dark from "../images/pho_icon_black.png";
import close_icon from "../images/close_icon.png";
import "../styles/navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const clickMenu = () => {
        setClick(true);
    }
    const closeMenu = () => {
        setClick(false);
    }
    return (
        <nav>
            {!click &&
                <nav className='navbar'>
                    <Link to="/" className="logo">
                        <img src={logo} alt="" className="icon" />
                        Pho Noodle House
                    </Link>
                    <ul className="nav-list">
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="mobile-nav" onClick={clickMenu}>
                        <img src={hamMenu} className="mobile-icon" alt="hamburger-menu" />
                    </div>
                </nav>
            }
            {click &&
                <nav className="mobile-menu">
                    <div className="mobile-menu-content">
                        <div className="top-mobile-nav">
                            <Link to="/" className="logo-dark" onClick={closeMenu}>
                                <img src={logo_dark} alt="" className="icon" />
                                Pho Noodle House
                            </Link>
                            <div className="close-div">
                                <img src={close_icon} alt="" className="close-icon"
                                    onClick={closeMenu}
                                />
                            </div>
                        </div>
                        <ul className="mobile-nav-list">
                            <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
            }
        </nav>
    );
}

export default Navbar;