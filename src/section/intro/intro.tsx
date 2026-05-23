import React from 'react';
// Импортируем картинку из папки src/img/
import introImg from '../../img/intro__img.png';
import './intro.css';

const Intro: React.FC = () => {
    return (
        <div className='intro'>
            <div className='intro__container container'>
                <div className='intro__content'>
                    <h1 className='intro__title'>Kechalari sokin dam oling</h1>
                    <button>Kategoriyalar</button>
                </div>
                <div className='intro__image'>
                    {/* Используем импортированную переменную */}
                    <img src={introImg} alt='intro_img' />
                </div>
            </div>
        </div>
    );
};

export default Intro;