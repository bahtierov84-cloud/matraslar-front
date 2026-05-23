import React from 'react';
import './add.css';
import { addData } from '../../assets/data';

const Add: React.FC = () => {
    return (
        <section className="add">
            <div className="add__container container">
                
                {/* Левая сторона: Текстовый контент / Chap tomon: Matnli kontent */}
                <div className="add__col-text">
                    <h2 className="add__title">{addData.title}</h2>
                    <h3 className="add__address">{addData.address}</h3>
                    <p className="add__landmark">{addData.landmark}</p>
                    
                    <a 
                        href={addData.locationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="add__btn"
                    >
                        {/* Иконка маркера локации / Lokatsiya belgisi ikonkani */}
                        <svg className="add__icon" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="currentColor"/>
                        </svg>
                        {addData.buttonText}
                    </a>
                </div>

                {/* Правая сторона: Изображение и прогресс-бар / O'ng tomon: Rasm va progress-bar */}
                <div className="add__col-media">
                    <div className="add__img-wrapper">
                        <img src={addData.image} alt="Location Map" className="add__img" />
                    </div>

                    {/* Линия-индикатор (прогресс-бар) из CSS / CSS'dagi indikator chizig'i (progress-bar) */}
                    <div className="add__progress-bar">
                        <div className="add__progress-step add__progress-step--active"></div>
                        <div className="add__progress-step"></div>
                        <div className="add__progress-step"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Add;