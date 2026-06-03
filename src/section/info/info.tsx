import React, { useState } from 'react';
import './info.css';
import { infoData } from '../../assets/data';

const Info: React.FC = () => {
    const [phone, setPhone] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const cleanNumbers = input.replace(/\D/g, ''); 
        const limitedNumbers = cleanNumbers.slice(0, 9);

        let formatted = '';
        if (limitedNumbers.length > 0) {
            formatted += limitedNumbers.slice(0, 2);
        }
        if (limitedNumbers.length > 2) {
            formatted += ' ' + limitedNumbers.slice(2, 5);
        }
        if (limitedNumbers.length > 5) {
            formatted += ' ' + limitedNumbers.slice(5, 7);
        }
        if (limitedNumbers.length > 7) {
            formatted += ' ' + limitedNumbers.slice(7, 9);
        }

        setPhone(formatted);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (phone.replace(/\s/g, '').length < 9) {
            alert("Iltimos, telefon raqamingizni to'liq kiriting.");
            return;
        }

        console.log(`Отправка номера: ${infoData.countryCode} ${phone}`);
        
        setIsSuccess(true);
    };

    return (
        <section className="info">
            <div className="info__container container">
                
                {isSuccess ? (
                    <div className="info__success-block">
                        <h2 className="info__success-title">
                            Arizangiz muvaffaqiyatli <br /> qabul qilindi ✅
                        </h2>
                        <p className="info__success-subtitle">
                            Siz bilan tez orada bog'lanamiz ☺️
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="info__text-block">
                            <h2 className="info__title">{infoData.title}</h2>
                            <p className="info__subtitle">{infoData.subtitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="info__form">
                            <div className="info__input-wrapper">
                                <span className="info__country-code">{infoData.countryCode}</span>
                                <span className="info__divider">|</span>
                                <input 
                                    type="tel" 
                                    placeholder={infoData.placeholder || "90 123 45 67"}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className="info__input"
                                    required
                                />
                            </div>
                            <button type="submit" className="info__btn">
                                {infoData.buttonText}
                            </button>
                        </form>
                    </>
                )}

            </div>
        </section>
    );
};

export default Info;