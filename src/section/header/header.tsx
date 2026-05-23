import React from 'react';  
import './header.css';
import Logo from '../../img/logo.png';  
// Импортируем только номер телефона из вашего файла data.ts
import { TelNumber } from '../../assets/data';   

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                
                {/* Логотип */}
                <div className='header__logo'>
                    <img src={Logo} alt='logo' />
                </div>

                {/* Блок контактов со значком телефона */}
                <div className='header__contact'>
                    {TelNumber.map((item) => (
                        <div key={item.id} className="header__phone-wrapper">
                            <svg 
                                className="header__phone-icon" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href={`tel:${item.number.replace(/\s+/g, '')}`} className='header__phone'>
                                {item.number}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Кнопка заказа */}
                <div className="header__btn">
                    <button className='header__btn-item'>Buyurtma berish</button>
                </div>

            </div>
        </header>
    );
};

export default Header;