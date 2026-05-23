import React from 'react';
import './footer.css';
import { footerData } from '../../assets/data';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer__container container">
                
                {/* Верхняя строка: Навигация и Соцсети */}
                <div className="footer__top">
                    <nav className="footer__nav">
                        {footerData.links.map((link, idx) => (
                            <a key={idx} href={link.url} className="footer__link">
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    <div className="footer__socials">
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social-icon">
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="currentColor"><path d="M10.12 11.25l.58-3.81H7.04V4.97c0-1.04.51-2.06 2.15-2.06H10.8V.67S9.31.42 7.89.42c-2.9 0-4.8 1.76-4.8 4.95v3.07H0v3.81h3.09v9.22c.62.1 1.25.15 1.89.15s1.27-.05 1.89-.15v-9.22h3.25z"/></svg>
                        </a>
                        {/* Twitter */}
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social-icon">
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="currentColor"><path d="M18.1 3.65c.01.16.01.32.01.48 0 4.9-3.73 10.55-10.55 10.55A10.46 10.46 0 011.9 13.01c.23.03.46.04.7.04 1.87 0 3.59-.64 4.96-1.71A3.71 3.71 0 014.1 8.77c.23.04.46.06.7.06.36 0 .71-.05 1.05-.14a3.71 3.71 0 01-2.97-3.64v-.05c.51.28 1.1.45 1.72.47a3.71 3.71 0 01-1.15-4.94A10.53 10.53 0 0011.1 4.18a3.71 3.71 0 016.32-3.38 7.4 7.4 0 002.35-.9 3.72 3.72 0 01-1.63 2.05 7.42 7.42 0 002.13-.58 7.47 7.47 0 01-1.85 1.92z"/></svg>
                        </a>
                        {/* Vimeo */}
                        <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="footer__social-icon">
                            <svg width="19" height="17" viewBox="0 0 19 17" fill="currentColor"><path d="M18.44 3.9c-.1 2.25-1.66 5.34-4.68 9.27-3.12 4.08-5.75 6.12-7.89 6.12-1.33 0-2.45-1.23-3.36-3.68L1.13 9.77C.51 7.55.1 6.32.1 6.07c0-.82.61-1.23 1.84-1.23.86 0 1.89.56 3.1 1.68l.94.94c.78-.96 1.48-1.92 2.1-2.88a18.23 18.23 0 011.83-2.47c.82-.9 1.55-1.34 2.2-1.34 1.1 0 1.76.73 1.96 2.19.23 1.6.07 3.25-.49 4.93-.36 1.1-.73 1.64-1.1 1.64-.34 0-.75-.32-1.22-.96l-.61-.75c-.34-.45-.63-.68-.87-.68-.24 0-.58.33-1.02.99a8.6 8.6 0 00-.91 1.73c-.14.45-.1.74.1.87.27.2.78.17 1.54-.1a7.48 7.48 0 002.52-2.1c1-.1 1.6-.74 1.83-1.92.23-1.22-.16-1.83-1.16-1.83-.48 0-1.03.18-1.66.54a4.13 4.13 0 01.37-2.12c.54-.57 1.15-.86 1.82-.86 1.34 0 2.13.88 2.37 2.65z"/></svg>
                        </a>
                        {/* Youtube */}
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social-icon">
                            <svg width="21" height="15" viewBox="0 0 21 15" fill="currentColor"><path d="M20.12 2.26a2.6 2.6 0 00-1.83-1.84C16.67.03 10.5.03 10.5.03s-6.17 0-7.79.39A2.6 2.6 0 00.88 2.26C.5 3.88.5 7.27.5 7.27s0 3.4.38 5.01c.21.8.85 1.44 1.65 1.65 1.62.43 7.79.43 7.79.43s6.17 0 7.79-.39a2.6 2.6 0 001.83-1.84c.38-1.62.38-5.01.38-5.01s0-3.39-.38-5.01zM8.38 10.37V4.18l5.42 3.1-5.42 3.1z"/></svg>
                        </a>
                    </div>
                </div>

                <hr className="footer__divider" />

                {/* Нижняя строка: Копирайт, Стрелка вверх, Разработчик */}
                <div className="footer__bottom">
                    <p className="footer__copyright">{footerData.copyright}</p>
                    
                    <button onClick={scrollToTop} className="footer__arrow-up" aria-label="Scroll to top">
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 20V2M8 2L1 9M8 2L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Текстовая плашка вместо картинки-логотипа */}
                    <div className="footer__developer">
                        <span className="footer__dev-text">designed and developed in</span>
                        <div className="footer__dev-logo">
                            <span className="footer__dev-dots"></span>
                            <span className="footer__dev-brand">abutech</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;