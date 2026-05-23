import React from 'react';
import './ingredient.css';
import { techData } from '../../assets/data';

const Ingredient: React.FC = () => {
    return (
        <section className="tech">
            <div className="tech__container container">
                
                {/* Заголовок секции */}
                <h2 className="tech__title">Ishlab chiqarish texnologiyalari</h2>
                
                {/* Сетка карточек */}
                <div className="tech__grid">
                    {techData.map((item) => (
                        <article key={item.id} className="tech-card">
                            <h3 className="tech-card__title">{item.title}</h3>
                            
                            {/* Блок картинки с кнопкой видео */}
                            <div className="tech-card__video-wrapper">
                                <img src={item.image} alt={item.title} className="tech-card__img" />
                                
                                {/* Кнопка Play */}
                                <button className="tech-card__play-btn" aria-label="Play video">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                            
                            <p className="tech-card__desc">{item.description}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Ingredient;