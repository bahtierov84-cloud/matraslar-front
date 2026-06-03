import React, { useState } from 'react';
import './ingredient.css';
import { techData } from '../../assets/data';

const Ingredient: React.FC = () => {
    // Храним ID карточки, в которой сейчас запущено видео (null — если нигде не запущено)
    const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

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
                                {activeVideoId === item.id && item.videoUrl ? (
                                    <>
                                        {/* Кнопка закрытия видео, чтобы вернуть картинку */}
                                        <button 
                                            className="tech-card__close-btn"
                                            type="button"
                                            onClick={() => setActiveVideoId(null)}
                                            aria-label="Close video"
                                        >
                                            &times;
                                        </button>
                                        <iframe
                                            src={`${item.videoUrl}?autoplay=1&rel=0`}
                                            title={item.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </>
                                ) : (
                                    <>
                                        <img src={item.image} alt={item.title} className="tech-card__img" />
                                        
                                        {/* Кнопка Play */}
                                        <button 
                                            className="tech-card__play-btn" 
                                            aria-label="Play video"
                                            type="button"
                                            onClick={() => setActiveVideoId(item.id)}
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    </>
                                )}
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