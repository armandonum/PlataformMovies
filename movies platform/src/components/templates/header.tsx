import { Link } from "react-router-dom";
import './header.css';

type HeaderProps = {
    title: string;
    links: { text: string; href: string }[];
};

function Header({ title, links }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <ul className="horizontal-menu">
                    {links.map((link) => (
                        <li key={link.href} className="horizontal-menu-item">
                            <Link to={link.href}>{link.text}</Link >
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;