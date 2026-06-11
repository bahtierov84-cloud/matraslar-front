import React, { useState } from "react";
import "./nav.css";
// Импортируем данные и логотип из вашего файла data.ts
import { menuItems, LogoImg } from "../../assets/data";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        link: string,
    ) => {
        setIsOpen(false);

        if (link.startsWith("#")) {
            e.preventDefault();
            const targetId = link.replace("#", "");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <nav className='menu-nav'>
            <button className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✕" : "☰"}
            </button>

            <ul className={`menu-list ${isOpen ? "active" : ""}`}>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.link}
                            className='menu-link'
                            onClick={(e) => handleScroll(e, item.link)}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
                <div className='menu-header'>
                    <img src={LogoImg} alt='Dream Cloud' />

                    {/* Отображение текущей даты */}

                    <button onClick={() => setIsOpen(false)}>✕</button>
                </div>

                <div className='menu-content'>
                    <ul className='mobile-nav-list'>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.link}
                                    onClick={(e) => handleScroll(e, item.link)}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='menu-footer-phone'>
                    <span>📞</span>
                    <a
                        href='tel:+998901234567'
                        style={{ textDecoration: "none", color: "inherit" }}>
                        +998 90 123 45 67
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
