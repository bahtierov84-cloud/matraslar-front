import React, { useState } from 'react';
import './info.css';
import { infoData } from '../../assets/data';

const Info: React.FC = () => {
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Отправка номера: ${infoData.countryCode} ${phone}`);
    };

    return (
        <section className="info">
            <div className="info__container container">
                
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
                            placeholder={infoData.placeholder}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="info__input"
                            required
                        />
                    </div>
                    <button type="submit" className="info__btn">
                        {infoData.buttonText}
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Info;