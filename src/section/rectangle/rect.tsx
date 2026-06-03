import React, { useState } from 'react';
import './rect.css';
import { aboutRowOne, aboutRowTwo } from '../../assets/data';

const About: React.FC = () => {
    // Состояние управления видео
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    
    // Вынесли ID видео в константу
    const videoId = "ZmbBOiwj5_A";

    return (
        <section className="about" id="about">
            <div className="about__container container">
                
                {/* Первый ряд: Текст слева, Видео справа */}
                <div className="about__row">
                    <div className="about__col-text">
                        <h2 className="about__title">{aboutRowOne.title}</h2>
                        <p className="about__lead">{aboutRowOne.description}</p>
                        <div className="about__card-box">
                            <ul className="about__list">
                                {aboutRowOne.features.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="about__col-media">
                        <div className="about__video-wrapper">
                            {isPlaying ? (
                                <>
                                    <iframe 
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                                        allow="autoplay; encrypted-media" 
                                        allowFullScreen 
                                        title="About us video"
                                    />
                                    <button 
                                        className="about__close-btn" 
                                        onClick={() => setIsPlaying(false)}
                                        aria-label="Закрыть видео"
                                    >×</button>
                                </>
                            ) : (
                                <>
                                    <img src={aboutRowOne.image} alt="Video poster" className="about__img" />
                                    <button 
                                        className="about__play-btn" 
                                        onClick={() => setIsPlaying(true)}
                                        aria-label="Запустить видео"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Второй ряд: Картинка слева, Текст справа */}
                <div className="about__row about__row--reverse">
                    <div className="about__col-media">
                        <div className="about__image-wrapper">
                            <img src={aboutRowTwo.image} alt="Showroom" className="about__img" />
                        </div>
                    </div>
                    <div className="about__col-text">
                        <p className="about__lead">{aboutRowTwo.descriptionTop}</p>
                        <div className="about__card-box">
                            <ol className="about__ordered-list">
                                {aboutRowTwo.points.map((point, idx) => (
                                    <li key={idx}><span>{point}</span></li>
                                ))}
                            </ol>
                        </div>
                        <p className="about__footer-text">{aboutRowTwo.descriptionBottom}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;