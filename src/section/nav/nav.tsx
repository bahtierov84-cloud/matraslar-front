import React from "react";
import "./nav.css";
import {menuItems  } from "../../assets/data";



const Nav: React.FC = () => {
  

    return (
        <nav className='menu-nav'>
            <ul className='menu-list'>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className='menu-link'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
