import React, { useState } from "react";
import { slidesData } from "../../assets/data";
import "./intro.css";

const Intro: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const currentSlide = slidesData[currentSlideIndex];

    return (
        <section className='intro'>
            <div className='intro__container container'>
                {/* Левая текстовая часть */}
                <div className='intro__content'>
                    <h1
                        className='intro__title'
                        dangerouslySetInnerHTML={{ __html: currentSlide.title }}
                    />

                    <div className='intro__controls'>
                        <a
                            href='#products'
                            className='intro__button-link'
                        >
                            <button className='intro__button' type="button">
                                Kategoriyalar
                            </button>
                        </a>

                        {/* Линия пагинации */}
                        <div className='intro__pagination'>
                            {slidesData.map((_, index) => (
                                <div
                                    key={index}
                                    className={`intro__pagination-dot ${index === currentSlideIndex ? "active" : ""}`}
                                    onClick={() => setCurrentSlideIndex(index)}
                                    role="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Правая часть: картинка */}
                <div className='intro__image' onClick={handleNextSlide} role="button" aria-label="Next slide">
                    <img
                        src={currentSlide.image}
                        alt={currentSlide.alt}
                        className='intro__main-img'
                    />
                </div>
            </div>
        </section>
    );
};

export default Intro;