import { NavLink } from "react-router-dom";

const navItems = [
    { href: '/', text: 'Home' },
    { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
    return (
        <div>
            {navItems.map(({ href, text}) => (
                <NavLink to={href} key={href}>{text}</NavLink>
            ))}
        </div>
    )
}

export default AppBar;
