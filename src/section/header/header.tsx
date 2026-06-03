import React, { useState } from 'react'; 
import { Logo, TelNumber } from '../../assets/data'; 
import OrderModal from '../modal/OrderModal'; 
import './header.css';

const Header: React.FC = () => {
    // Состояния для управления модальным окном заказа
    const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
    const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [customerName, setCustomerName] = useState<string>("");
    const [customerPhone, setCustomerPhone] = useState<string>("");

    const openOrderModal = () => {
        setIsOrderModalOpen(true);
    };

    const closeOrderModal = () => {
        setIsOrderModalOpen(false);
        setIsOrderSuccess(false);
        setQuantity(1);
        setSelectedCategory("");
        setCustomerName("");
        setCustomerPhone("");
    };

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleOrderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Базовая валидация имени
        if (customerName.trim().length < 2) {
            return; 
        }
        
        console.log("Muvaffaqiyatli umumiy buyurtma (Header):", {
            customerName,
            customerPhone: `+998 ${customerPhone}`,
            chosenCategory: selectedCategory,
            quantity: quantity,
            productTitle: "Umumiy konsultatsiya",
        });
        setIsOrderSuccess(true); 
    };

    return (
        <header className='header'>
            <div className='header__container container'>
                
                {/* Логотип */}
                <div className='header__logo'>
                    <img src={Logo} alt='logo' />
                </div>

                {/* Блок контактов */}
                <div className='header__contact'>
                    {TelNumber.map((item, index) => (
                        <div key={item.id || index} className="header__phone-wrapper">
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
                    <button 
                        className='header__btn-item' 
                        type='button' 
                        onClick={openOrderModal}
                    >
                        Buyurtma berish
                    </button>
                </div>

            </div>

            {/* Модальное окно заказа */}
            <OrderModal 
                isOpen={isOrderModalOpen}
                isSuccess={isOrderSuccess}
                onClose={closeOrderModal}
                onSubmit={handleOrderSubmit}
                customerName={customerName}
                setCustomerName={setCustomerName}
                customerPhone={customerPhone}
                setCustomerPhone={setCustomerPhone}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </header>
    );
};

export default Header;