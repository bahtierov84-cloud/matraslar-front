import React from 'react';
import './adv.css';
import { advCards } from '../../assets/data';

const Adv: React.FC = () => {
    return (
        <section className="adv">
            <div className="adv__container container">
                <h2 className="adv__main-title">Nega bizni tanlashadi</h2>
                
                <div className="adv__grid">
                    {advCards.map((card, idx) => (
                        <div key={idx} className="adv__card">
                            <div className="adv__img-wrapper">
                                <img src={card.image} alt={card.title} className="adv__img" />
                            </div>
                            <div className="adv__content">
                                <h3 className="adv__title">{card.title}</h3>
                                <p className="adv__desc">{card.desc}</p>
                                {card.phone && (
                                    <a 
                                        href={`tel:${card.phone.replace(/[\s-]/g, '')}`} 
                                        className="adv__phone"
                                    >
                                        {card.phone}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Adv;