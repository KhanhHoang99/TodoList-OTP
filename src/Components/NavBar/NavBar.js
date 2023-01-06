import './navbar.scss';
import {  Link } from "react-router-dom";
const MENUS= [
    { title: 'home', url: '/' },
    { title: 'to do lists', url: '/todolists' },
    { title: 'OTP app', url: '/otp' },
    { title: 'about', url: '/about' },
];

const NavBar = () => {
    return (
        <ul className="navbar">
            {
                MENUS && MENUS.length > 0 &&
                MENUS.map((menu) => <li key={menu.title}><Link to={menu.url}>{menu.title}</Link></li>)
            }
        </ul>
    )
}

export default NavBar;