import React, { useState } from 'react';
import './ingredient.css';
import { techData } from '../../assets/data';

const Ingredient: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

    // Функция для отрисовки карточки (единый шаблон для обоих режимов)
    const renderCard = (item: typeof techData[0]) => (
        <article key={item.id} className="tech-card">
            <h3 className="tech-card__title">{item.title}</h3>
            <div className="tech-card__video-wrapper">
                {activeVideoId === item.id ? (
                    <>
                        <button className="tech-card__close-btn" onClick={() => setActiveVideoId(null)}>&times;</button>
                        <iframe src={`${item.videoUrl}?autoplay=1`} title={item.title} allowFullScreen></iframe>
                    </>
                ) : (
                    <>
                        <img src={item.image} alt={item.title} className="tech-card__img" />
                        <button className="tech-card__play-btn" onClick={() => setActiveVideoId(item.id)}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </button>
                    </>
                )}
            </div>
            <p className="tech-card__desc">{item.description}</p>
        </article>
    );

    return (
        <section className="tech">
            <div className="tech__container container">
                <h2 className="tech__title">Ishlab chiqarish texnologiyalari</h2>
                
                {/* 1. Сетка для ПК */}
                <div className="tech__grid-desktop">
                    {techData.map((item) => renderCard(item))}
                </div>

                {/* 2. Слайдер для мобильных/планшетов */}
                <div className="tech__mobile-slider">
                    {renderCard(techData[activeIndex])}
                    
                    <div className="tech__dots">
                        {techData.map((_, index) => (
                            <span 
                                key={index} 
                                className={`tech__dot ${index === activeIndex ? 'active' : ''}`} 
                                onClick={() => {
                                    setActiveIndex(index);
                                    setActiveVideoId(null);
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ingredient;