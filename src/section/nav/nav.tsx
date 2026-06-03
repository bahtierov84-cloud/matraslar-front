import React from "react";
import "./nav.css";
import { menuItems } from "../../assets/data";

const Nav: React.FC = () => {

    /**
     * Обработчик плавной прокрутки к якорям
     * @param e - событие клика
     * @param link - значение href ссылки (например, "#products")
     */
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        // Проверяем, что ссылка ведет на внутренний якорь
        if (link.startsWith("#")) {
            e.preventDefault(); // Отменяем стандартный резкий скачок браузера

            const targetId = link.replace("#", "");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Выполняем плавную прокрутку
                targetElement.scrollIntoView({
                    behavior: "smooth", // Анимированная прокрутка
                    block: "start",      // Выравнивание секции по верхнему краю экрана
                });
            }
        }
    };

    return (
        <nav className='menu-nav'>
            <ul className='menu-list'>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={item.link} 
                            className='menu-link'
                            onClick={(e) => handleScroll(e, item.link)}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;